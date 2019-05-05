import React from "react"
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Picker, ToastAndroid } from "react-native"
import { Actions } from "react-native-router-flux";
import { images } from "../../config/images";
import { colors } from "../../config/colors";
import Cache from "../../cache"
import api from "../../api";
import LogoView from "../../components/logoView";
import { xx } from "../../config/styles";
import { Ionicons } from '@expo/vector-icons'
import { COUNTRY, workflow_1, EMPLOYEMENT_TYPE } from "../../config/staticdata";

const width = Dimensions.get('window').width

export default class Signup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isWaiting: false,
      signup_type: 3,
      title: '',
      username: 'Test',
      email: 'test44@marketsflow.com',
      first_name: 'Test',
      last_name: 'Test',
      phone: '787433333',
      password: 'UKengland10!',
      password_confirmation: 'UKengland10!'
    }
  }

  signup = () => {
    this.setState({ isWaiting: true })
    const { password_confirmation, password, phone, last_name, first_name, email, signup_type, title } = this.state

    console.log('hello signup_type', signup_type)
    console.log('hello title', title)
    console.log('hello email', email)
    console.log('hello username', first_name + last_name)
    console.log('hello first name', first_name)
    console.log('hello last name', last_name)
    console.log('hello phone', phone)
    console.log('hello password', password)
    console.log('hello password_confirmation', password_confirmation)

    api.signup(password_confirmation, password, phone, last_name, first_name, email, signup_type, title, (err, res) => {
      if (err == null) {
        console.log('res', res)
        Actions.login()
        this.setState({ isWaiting: false })
        ToastAndroid.show('Success !', ToastAndroid.SHORT);

      } else {
        console.log('err', err)
        this.setState({ isWaiting: false })
        if(err.password !== undefined){
          ToastAndroid.show(err.password[0], ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(err.email[0], ToastAndroid.SHORT);
        }
      }
    })

  }

  render() {

    const { title } = this.state

    if (this.state.isWaiting) {
      return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
          <Text style={styles.bold}>Loading ...</Text>
        </View>
      )

    }

    return (
      <KeyboardAvoidingView style={xx.container} behavior={"padding"} enabled>

        <LogoView />

        <ScrollView style={{ width: '100%' }}>

          <TouchableOpacity
            style={[styles.input, { justifyContent: 'center' }]}
            onPress={() => Actions.list({ update: (i) => { this.setState({ title: i }) }, dataSource: EMPLOYEMENT_TYPE })}
          >
            <Text style={{color: title ? colors.DARK : colors.GREY}}>{title ? title : 'Title'}</Text>
            <Ionicons size={20} name="md-arrow-dropdown" color={colors.GREY} style={{ right: 10, position: 'absolute' }} />
          </TouchableOpacity>

          <View style={{ width: '100%', margin: 'auto', }}>

            <TextInput
              style={styles.input}
              placeholder={'First Name'}
              onChangeText={(first_name) => this.setState({ first_name })}
              value={this.state.first_name}
            />

            <TextInput
              style={styles.input}
              placeholder={'Middle Name'}
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />

            <TextInput
              style={styles.input}
              placeholder={'Last Name'}
              onChangeText={(last_name) => this.setState({ last_name })}
              value={this.state.last_name}
            />

            <TextInput
              style={styles.input}
              placeholder={'Email'}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />

            <TextInput
              style={styles.input}
              placeholder={'Phone'}
              onChangeText={(phone) => this.setState({ phone })}
              value={this.state.phone}
            />

            <TextInput
              style={styles.input}
              placeholder={'Password'}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />

            <TextInput
              style={styles.input}
              placeholder={'Confirm Password'}
              onChangeText={(password_confirmation) => this.setState({ password_confirmation })}
              value={this.state.password_confirmation}
            />

          </View>



          <View style={[xx.horizontalView, { marginTop: width / 50 }]}>
            <TouchableOpacity style={xx.btn} onPress={this.signup}>
              <Text style={xx.txt}>Register</Text>
            </TouchableOpacity>
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
    textAlign: 'center',
    color: colors.GREEN,
    fontSize: 17,
    marginVertical: width / 12
  },
  input: {
    borderBottomColor: colors.GREY,
    borderBottomWidth: 1,
    padding: 1,
    height: width / 11,
    marginHorizontal: 12,
    marginVertical: 2,
    paddingLeft: 12
  },

  view: {
    backgroundColor: colors.GREEN,
    width: '100%',
    padding: 8,
    marginTop: 12
  }

})