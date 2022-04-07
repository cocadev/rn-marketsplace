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

export default class Flow28 extends React.Component {

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

            <Header title={'Submit ID & Proof of Address'} />

            <View style={{alignItems:'center'}}>

              <TouchableOpacity style={[xx.btn, { width: width/1.5, marginTop: width / 20 }]} >
                <Text style={xx.txt}>Compare ID Proof</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[xx.btn, { width: width/1.5, marginTop: width / 25}]} >
                <Text style={xx.txt}>Compare ID Reverse</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[xx.btn, { width: width/1.5, paddingHorizontal:0, marginTop: width / 25}]} >
                <Text style={xx.txt}>Compare Proof of Address</Text>
              </TouchableOpacity>

            </View>

          </View>

          <View style={xx.horizontalView}>
            <TouchableOpacity style={xx.btn} onPress={()=>Actions.pop()} >
              <Text style={xx.txt}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={xx.btn} onPress={()=>Actions.flow29()} >
              <Text style={xx.txt}>Next</Text>
            </TouchableOpacity>
          </View>


        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
