import React from "react"
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from "react-native"
import { Actions } from "react-native-router-flux";
import { images } from "../../config/images";
import { colors } from "../../config/colors";
import Cache from "../../cache"
import api from "../../api";
import { xx } from "../../config/styles";
import LogoView from "../../components/logoView";
import Header from "../../components/header";
import { Ionicons } from '@expo/vector-icons'
import { COUNTRY, workflow_1 } from "../../config/staticdata";

const width = Dimensions.get('window').width

export default class Flow24 extends React.Component {

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

            <Header />

            <Text style={[xx.green, { marginTop: width / 10 }]}>hoehereowrue o eiorewo e ewrjeorje</Text>
            <TextInput
              style={xx.input}
              placeholder={'First Name'}
              onChangeText={(text1) => this.setState({ text1 })}
              value={this.state.text1}
            />

            <Text style={xx.green}>hoehereowrue o eiorewo e ewrjeorje</Text>
            <TextInput
              style={xx.input}
              placeholder={'First Name'}
              onChangeText={(text1) => this.setState({ text1 })}
              value={this.state.text1}
            />
            <Text style={xx.green}>hoehereowrue o eiorewo e ewrjeorje</Text>
            <TextInput
              style={xx.input}
              placeholder={'First Name'}
              onChangeText={(text1) => this.setState({ text1 })}
              value={this.state.text1}
            />
            <Text style={xx.green}>hoehereowrue o eiorewo e ewrjeorje</Text>
            <TextInput
              style={xx.input}
              placeholder={'First Name'}
              onChangeText={(text1) => this.setState({ text1 })}
              value={this.state.text1}
            />
            <Text style={xx.green}>hoehereowrue o eiorewo e ewrjeorje</Text>
            <TouchableOpacity style={[xx.input, {justifyContent:'center'}]}>
              <Text>Hello</Text>
              <Ionicons size={20} name="md-arrow-dropdown" color={colors.GREY} style={{right:10, position:'absolute'}}/> 
            </TouchableOpacity>

            <Text style={xx.green}>workflow_1</Text>
            <TouchableOpacity 
                 style={[xx.input, {justifyContent:'center'}]}
                 onPress={()=>Actions.list({update:(i)=>{ this.setState({work:i}) }, dataSource:workflow_1})}     
            >
              <Text>{this.state.work}</Text>
              <Ionicons size={20} name="md-arrow-dropdown" color={colors.GREY} style={{right:10, position:'absolute'}}/> 
            </TouchableOpacity>

            <Text style={xx.green}>country</Text>
            <TouchableOpacity 
                style={[xx.input, {justifyContent:'center'}]}
                onPress={()=>Actions.list({update:(i)=>{ this.setState({country:i}) }, dataSource:COUNTRY})}
            >
              <Text>{this.state.country}</Text>
              <Ionicons size={20} name="md-arrow-dropdown" color={colors.GREY} style={{right:10, position:'absolute'}}/> 
            </TouchableOpacity>

          </View>

          <View style={xx.horizontalView}>
            <TouchableOpacity style={xx.btn} onPress={()=>Actions.pop()} >
              <Text style={xx.txt}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={xx.btn} onPress={()=>Actions.flow25()} >
              <Text style={xx.txt}>Next</Text>
            </TouchableOpacity>
          </View>


        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
