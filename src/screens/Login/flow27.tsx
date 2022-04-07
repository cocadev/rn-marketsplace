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

export default class Flow27 extends React.Component {

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


          <View style={{ width: '100%', margin: 'auto', marginTop: width / 25 }}>

            <Header title={'Financial information'} />

            <Text style={[xx.green, { marginTop: width / 10 }]}>Employement Type</Text>
            <TextInput
              style={xx.input}
              placeholder={'First Name'}
              onChangeText={(text1) => this.setState({ text1 })}
              value={this.state.text1}
            />

            <Text style={xx.green}>Company</Text>
            <TouchableOpacity
              style={[xx.input, { justifyContent: 'center' }]}
              onPress={() => Actions.list({ update: (i) => { this.setState({ type: i }) }, dataSource: EMPLOYEMENT_TYPE })}
            >
              <Text>{this.state.type}</Text>
              <Ionicons size={20} name="md-arrow-dropdown" color={colors.GREY} style={{ right: 10, position: 'absolute' }} />
            </TouchableOpacity>

            <Text style={xx.green}>Nature</Text>
            <TouchableOpacity
              style={[xx.input, { justifyContent: 'center' }]}
              onPress={() => Actions.list({ update: (i) => { this.setState({ type: i }) }, dataSource: EMPLOYEMENT_TYPE })}
            >
              <Text>{this.state.type}</Text>
              <Ionicons size={20} name="md-arrow-dropdown" color={colors.GREY} style={{ right: 10, position: 'absolute' }} />
            </TouchableOpacity>

            <Text style={[xx.green, { color: colors.GREY, marginTop: 6 }]}>This is a standard procedure to protect your funds and your account. You can continue to work, but you will need to verify your identity before transferring or withdrawing funds</Text>

            <Text style={[xx.green, { marginTop: 6 }]}>Terms & Conditions</Text>
            <TextInput
              style={xx.textarea}
              placeholder={'First Name'}
              onChangeText={(text1) => this.setState({ text1 })}
              value={this.state.text1}
              multiline={true}
              numberOfLines={8}
              textAlignVertical="top"
            />

            

            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20,}}>
              <CheckBox
                value={this.state.checked}
                onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
              <Text style={[xx.green, {color:colors.GREY}]}>I accept the above terms and conditions</Text>
            </View>



          </View>

          <View style={xx.horizontalView}>
            <TouchableOpacity style={xx.btn} onPress={()=>Actions.pop()} >
              <Text style={xx.txt}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={xx.btn} onPress={()=>Actions.flow28()} >
              <Text style={xx.txt}>Next</Text>
            </TouchableOpacity>
          </View>


        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
