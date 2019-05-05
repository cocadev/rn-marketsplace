import Cache from "./cache";
import * as config from "./config";
import UtilService from "./utils";

module.exports = {
  async fetchData(url, request, cb) {
    try {
      let response = await fetch(url, request);
      let responseJson = await response.json()
      if (response.status == 200) {
        cb(null, responseJson);
      } else {
        cb(responseJson);
      }
    } catch (error) {
      console.log('----', url)
      cb(error);
    }
  },
  async middleware(url, request, cb) {  
      this.fetchData(url, request, cb)
  },
  baseApi(sub_url, method, json_data, cb) {
   
    let request = {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: Cache.currentUser
          ? "bearer " + Cache.token
          : null,
      }
    };
    if (method == "POST" || method == "PUT") {
      request["body"] = JSON.stringify(json_data);
    }else{
      // sub_url += '&t='+(new Date()).getTime()
    }


    this.middleware(config.SERVICE_API_URL + sub_url, request, cb);
  },

  async init(cb) {
    //check if current user exists or not
    let user = await UtilService.getLocalStringData("currentUser");
    Cache.clientID = await UtilService.getLocalStringData("client");
    if (user == null) {
      cb("err");
    } else {
      Cache.currentUser = JSON.parse(user);

      let locationHeader = await UtilService.getLocalStringData('locationHeader')
      let locations = await UtilService.getLocalStringData('locations')

      Cache.locationHeader = JSON.parse(locationHeader)
      Cache.locations = JSON.parse(locations)
      cb(null);
    }
  },

  login22222(ClientID, PhoneNumber, Password, cb) {
    Cache.PhoneNumber = PhoneNumber;
    Cache.Password = Password;
    Cache.clientID = ClientID;
    this.baseApi("/api/appLogin", "POST", { PhoneNumber, Password }, cb);
  },

  confirmOTP(PhoneNumber, OtpNumber, PushToken, cb) {
    this.baseApi(
      "/api/otpLogin",
      "POST",
      { PhoneNumber, OtpNumber, PushToken },
      (err, res) => {
        console.log('user', err, res)
        if (err == null) {
          Cache.currentUser = res;
          UtilService.saveLocalStringData("currentUser", JSON.stringify(res));
          UtilService.saveLocalStringData("client", Cache.clientID);
          cb(err, res);
          return;
        }
        cb(err, res);
      }
    );
  },

  logout() {
    UtilService.removeLocalObjectData("currentUser");
  },

  async uploadImage(uri, cb) {
    try {

      let formData = new FormData();
      formData.append('file', {
        uri,
        name: `photo.jpg`,
        type: `image/jpg`,
      });

      let response = await fetch(
        config.SERVICE_API_URL + "UpLoad/UploadProfileImage",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: "bearer " + Cache.token,
          },
          body: formData
        }
      );

      let status = response.status;
      let responseJson = await response.json();

      if (status == 200 || status == 201) {
        cb(null, responseJson.Value);
      } else {
        cb(responseJson.Message);
      }
    } catch (error) {
      cb(error);
    }
  },

  async baseUploadApi(sub_url, file){
    // console.log('baseUploadApi', file)
    if ( !Cache.hasInternetConnection ){
      return null;
    }
      let image = {
        uri: file,
        type: "image/jpeg",
        name: "file.jpeg"
      };
      try{
      let formData = new FormData();
      formData.append("file", image);
      let response = await fetch(
        config.SERVICE_API_URL + sub_url,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            "client":"c001"
          },
          body: formData
        }
      );
      let status = response.status;
      let responseJson = await response.json();
      // console.log('status',status, 'responseJson', responseJson)
      return {
        status,
        data:JSON.parse(responseJson.Result)
      }
      }catch(error){
        // console.log(error)
        return error
      }
  },

  async uploadAllData(cb){
    if ( Cache.locationHeader ){
      this.uploadLocations(async(err, res)=>{
        if ( err == null) {
          Cache.locationHeader = null
          Cache.locations = []
          await UtilService.removeLocalObjectData('locationHeader')
          await UtilService.removeLocalObjectData('locations')
        }
      })
    }
    if ( Cache.requestStack.length > 0 ){
      async.mapSeries(Cache.requestStack, async ({url, request}, cb)=>{
        try {
          let response = await fetch(url, request);
          let responseJson = await response.json();
          if (response.status == 200) {
            cb(null, responseJson);
          } else {
            cb(responseJson);
          }
        } catch (error) {
          cb(error);
        }
      }, async (error, results)=>{
        Cache.requestStack.splice(0, results.length)
        await UtilService.removeLocalObjectData('requests')
        if ( error != null ){
          await UtilService.saveLocalStringData('requests', JSON.stringify(Cache.requestStack))
        }
        cb(err, results)
      })
    }
  },

  getRegions() {
    this.baseApi(`/api/Region/GetRegions`, "GET", {}, '');
  },

  /////////////////////////
  //////// Account ////////
  /////////////////////////
  login(username, password, cb) {

    this.baseApi("login", "POST", { username, password }, cb);
  },

  signup( password_confirmation, password, phone, last_name, first_name, email ,signup_type, title, cb){
    this.baseApi('register', 'POST', { password_confirmation, password, phone, last_name, first_name, email ,signup_type, title }, cb)
  },

  /////////////////////////
  ///////// Location //////
  /////////////////////////
  searchLocation(Text, cb){ 
    this.baseApi('Location/SearchLocation?Text=' + Text, 'GET', {}, cb) 
  },



  

  




















};
