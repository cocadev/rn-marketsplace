import React from "react"
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, AsyncStorage } from "react-native"
import { Google } from 'expo';
import { Actions } from "react-native-router-flux";
import { images } from "../../config/images";
import { colors } from "../../config/colors";
import Cache from "../../cache"

const width = Dimensions.get('window').width

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
      language: { latitude: 12.5937, longitude: 63.9629, },
      isWaiting: false,
    }
  }


  render() {

    if (this.state.isWaiting) {
      return (
        <View style={styles.container}>
          <Text style={styles.bold}>Loading ...</Text>
        </View>
      )

    }
    return (
      <View style={styles.container}>

        <Image source={images.logo} style={styles.logo} />

        <Text style={styles.bold}>Your money works</Text>

        <Text style={styles.green}>{'INTELLIGENT \nINVESTMENT MANAGEMENT'}</Text>

        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.btn} onPress={()=>Actions.login()}>
            <Text style={styles.txt}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={()=>Actions.signup()}>
            <Text style={styles.txt}>Sign Up</Text>
          </TouchableOpacity>

        </View>

        <Text style={[styles.bold, { marginTop: 0 }]}>Discover more</Text>

        
        <Text style={{ color: colors.GREY, marginTop:width/7, fontSize:15 }}>{'Authorized and regulated by the Financial\n Conduct Authority (FCA No. 792373)'}</Text>

        <Text style={{ color: colors.GREY, marginTop: 6, fontSize:15 }}>© Copy 2019 Marketsflow</Text>


      </View>
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
    marginTop: width/2
  },
  btn: {
    backgroundColor: colors.GREEN,
    borderRadius: 2,
    width: width / 2.5,
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
    textAlign: 'center',
    color: colors.GREEN,
    fontSize: 17,
    marginVertical: width / 5.4

  }

})