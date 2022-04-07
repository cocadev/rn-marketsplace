import React from "react"
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, CheckBox } from "react-native"
import { Actions } from "react-native-router-flux";
import { images } from "../../config/images";
import { colors } from "../../config/colors";
import Cache from "../../cache"
import api from "../../api";
import { xx } from "../../config/styles";
import LogoView from "../../components/logoView";
import Header from "../../components/header";
import { Ionicons } from '@expo/vector-icons'
import { COUNTRY, workflow_1, EMPLOYEMENT_TYPE } from "../../config/staticdata";

const width = Dimensions.get('window').width

export default class Flow29 extends React.Component {

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

            <Header title={'Prepared to Payment'} />

            <Text style={[xx.green, { color: colors.GREY, marginTop: 6 }]}>Enter amount to transfer</Text>
            <TextInput
              style={xx.input}
              placeholder={'First Name'}
              onChangeText={(text1) => this.setState({ text1 })}
              value={this.state.text1}
            />

            <View style={{alignItems:'center'}}>

            <Header title={'Bank payment transfer details'} />

            <Header title={'Prepared to Payment'} />

            <Header title={'Prepared to Payment'} />

            <Text style={[xx.green, { color: colors.GREY, marginTop: 6 }]}>This is a standard procedure to protect your funds and your account. You can continue to work, but you will need to verify your identity before transferring or withdrawing funds</Text>


            </View>

          </View>

          <View style={[xx.horizontalView, {marginTop:width/50}]}>
            <TouchableOpacity style={xx.btn} onPress={()=>Actions.flow299()}>
              <Text style={xx.txt}>1 made this transfer Per</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
