import React from "react"
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, ToastAndroid } from "react-native"
import { Actions } from "react-native-router-flux";
import { images } from "../../config/images";
import { colors } from "../../config/colors";
import api from "../../api";

const width = Dimensions.get('window').width

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "ajay1@marketsflow.com",
      password: "UKengland10!",
      isWaiting: false,
    }
  }

  login = () => {
    this.setState({isWaiting:true})

    console.log('hello email',  this.state.email)
    console.log('hello password',  this.state.password)
  
    api.login(this.state.email, this.state.password, (err, res) => {
      if (err == null) {
        console.log('res', res)
        Actions.flow13()
        this.setState({isWaiting:false})
        ToastAndroid.show('Success !', ToastAndroid.SHORT);

      } else {
        console.log('err', err)
        this.setState({isWaiting:false})
        ToastAndroid.show('Invalid credentials.', ToastAndroid.SHORT);

      }
    })
  }

  render() {

    if (this.state.isWaiting) {
      return (
        <View style={[styles.container, {justifyContent:'center'}]}>
          <Text style={styles.bold}>Loading ...</Text>
        </View>
      )

    }
    return (
      <KeyboardAvoidingView style={styles.container} behavior={"padding"} enabled>

        <Image source={images.logo} style={styles.logo} />

        <ScrollView style={{width:'100%'}}>

          <Text style={styles.bold}>Your money works</Text>

          <Text style={styles.green}>{'INTELLIGENT \nINVESTMENT MANAGEMENT'}</Text>

          <View style={{ width: '100%', margin: 'auto', }}>

            <TextInput
              style={styles.input}
              placeholder={'Email'}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />

            <TextInput
              style={styles.input}
              placeholder={'Password'}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />

          </View>

          <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btn} onPress={this.login}>
              <Text style={styles.txt}>Login</Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.bold, { marginTop: 0 }]}>Forgot Password</Text>

          <View style={{alignItems:'center'}}>

            <Text style={{ color: colors.GREY, marginTop: width / 7, fontSize: 15 }}>{'Authorized and regulated by the Financial\n Conduct Authority (FCA No. 792373)'}</Text>

            <Text style={{ color: colors.GREY, marginTop: 6, fontSize: 15 }}>© Copy 2019 Marketsflow</Text>

          </View>

        </ScrollView>
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
    marginTop: width / 3
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
    marginVertical: width / 12
  },
  input: {
    borderBottomColor: colors.GREY,
    borderBottomWidth: 1,
    margin: 20
  }

})