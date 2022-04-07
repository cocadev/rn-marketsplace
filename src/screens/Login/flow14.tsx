import React from "react"
import { StyleSheet, Text, View, Image, Dimensions, KeyboardAvoidingView, TouchableOpacity } from "react-native"
import { images } from "../../config/images";
import { colors } from "../../config/colors";
import { Actions } from "react-native-router-flux";

const width = Dimensions.get('window').width

export default class Flow14 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isWaiting: false,
      signup_type: 3,
      title: 1,
      username: 'Test',
      email: 'test44@marketsflow.com',
      first_name: 'Test',
      last_name: 'Test',
      phone: '787433333',
      password: 'UKengland10!',
      password_confirmation: 'UKengland10!'
    }
  }


  render() {

    return (
      <KeyboardAvoidingView style={styles.container} behavior={"padding"} enabled>

        <Image source={images.logo} style={styles.logo} />

        <View style={styles.view}>
          <Text style={[styles.bold, { color: '#fff' }]}>Welcome to Workflow</Text>
        </View>


          <View style={styles.picker}>
          
          </View>

          <Text style={styles.text}>We can make working with promises even simpler with async and await. The await keyword resolves the promise and returns the value which we can assign to a variable. Here’s an example:</Text>
          <Text style={styles.text}>We can make working with promises even simpler with async and await. The await keyword resolves the promise and returns the value which we can assign to a variable. Here’s an example:</Text>
          <Text style={styles.text}>We can make working with promises even simpler with async and await. The await keyword resolves the promise and returns the value which we can assign to a variable. Here’s an example:</Text>
          <Text style={styles.text}>We can make working with promises even simpler with async and await. The await keyword resolves the promise and returns the value which we can assign to a variable. Here’s an example:</Text>

          <TouchableOpacity onPress={()=>Actions.flow23()} style={{ width: '100%', margin: 'auto', marginTop:12, alignItems:'center' }}>

            <Text style={styles.green}>We will be in touch!</Text>

          </TouchableOpacity>


          <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontWeight: 'bold', color: colors.GREY, marginTop: width / 12 }}>Risk Advasory</Text>
          </View>

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
    alignItems: "center",
  },
  logo: {
    width: width / 1.5,
    height: width / 8.7,
    marginTop: width / 5
  },
  btn: {
    backgroundColor: colors.GREEN,
    borderRadius: 2,
    width: width / 1.5,
    height: 38,
    margin: 12,
    padding: 17,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 16,
    color: colors.WHITE
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.GREY,
    fontSize: 17
  },
  green: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 2,
    color: colors.GREEN,
    fontSize: 17,
  },
  input: {
    borderColor: colors.GREY,
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 20,
    marginVertical: 6
  },
  picker: {
    backgroundColor: colors.GREY,
    height:1,
    marginHorizontal: 20,
    marginTop: 30,
    width:'88%'
  },
  view: {
    backgroundColor: colors.GREEN,
    width: '100%',
    padding: 8,
    marginTop: 12
  },
  text:{
    fontSize:12,
    color:colors.GREY,
    marginHorizontal:20,
    marginTop:20
  }

})