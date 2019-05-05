import React from "react"
import { Text, View, Dimensions, KeyboardAvoidingView, ScrollView, } from "react-native"
import { colors } from "../../config/colors";
import { xx } from "../../config/styles";
import LogoView from "../../components/logoView";
import Header from "../../components/header";

const width = Dimensions.get('window').width

export default class Flow299 extends React.Component {

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
      <KeyboardAvoidingView style={xx.container} behavior={"padding"} enabled>

        <LogoView />

        <ScrollView style={{ width: '100%' }}>


          <View style={{ width: '100%', margin: 'auto', marginTop: width / 20 }}>

            <Header title={'Dear Mr. First Name Last Name'} />

            <Header title={'Congratulations, your CAd Amount number is : 6000 USD?'} />


            <View>

              <Text style={[xx.green, { color: colors.GREY, marginTop: 6 }]}>This is a standard procedure to protect your funds and your account. You can continue to work, but you will need to verify your identity before transferring or withdrawing funds</Text>
              <Text style={[xx.green, { color: colors.GREY, marginTop: 6 }]}>This is a standard procedure to protect your funds and your account. You can continue to work, but you will need to verify your identity before transferring or withdrawing funds</Text>
              <Text style={[xx.green, { color: colors.GREY, marginTop: 6 }]}>This is a standard procedure to protect your funds and your account. You can continue to work, but you will need to verify your identity before transferring or withdrawing funds</Text>
              <Text style={[xx.green, { color: colors.GREY, marginTop: 6 }]}>This is a standard procedure to protect your funds and your account. You can continue to work, but you will need to verify your identity before transferring or withdrawing funds</Text>

            </View>

            <View style={{ alignItems:'center'}}>
              <Text style={[xx.green, {fontSize:16, marginTop: width/15, marginBottom:width/10}]}>We will be in touch?</Text>
              <Text style={[xx.green, {color:colors.GREY}]}>Risk Advasory</Text>

            </View>

            

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
