import React from "react"
import { Text, View, Dimensions, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native"
import { Actions } from "react-native-router-flux";
import { colors } from "../../config/colors";

import { xx } from "../../config/styles";
import LogoView from "../../components/logoView";
import Header from "../../components/header";
import { Ionicons } from '@expo/vector-icons'
import { EMPLOYEMENT_TYPE } from "../../config/staticdata";

const width = Dimensions.get('window').width

export default class Flow26 extends React.Component {

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
            <TouchableOpacity
              style={[xx.input, { justifyContent: 'center' }]}
              onPress={() => Actions.list({ update: (i) => { this.setState({ type: i }) }, dataSource: EMPLOYEMENT_TYPE })}
            >
              <Text>{this.state.type}</Text>
              <Ionicons size={20} name="md-arrow-dropdown" color={colors.GREY} style={{ right: 10, position: 'absolute' }} />
            </TouchableOpacity>

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

            <Text style={xx.green}>Organization</Text>
            <TouchableOpacity
              style={[xx.input, { justifyContent: 'center' }]}
              onPress={() => Actions.list({ update: (i) => { this.setState({ type: i }) }, dataSource: EMPLOYEMENT_TYPE })}
            >
              <Text>{this.state.type}</Text>
              <Ionicons size={20} name="md-arrow-dropdown" color={colors.GREY} style={{ right: 10, position: 'absolute' }} />
            </TouchableOpacity>

            <Text style={xx.green}>Company Address 1</Text>
            <TouchableOpacity
              style={[xx.input, { justifyContent: 'center' }]}
              onPress={() => Actions.list({ update: (i) => { this.setState({ type: i }) }, dataSource: EMPLOYEMENT_TYPE })}
            >
              <Text>{this.state.type}</Text>
              <Ionicons size={20} name="md-arrow-dropdown" color={colors.GREY} style={{ right: 10, position: 'absolute' }} />
            </TouchableOpacity>


            <Text style={xx.green}>Company Address 2</Text>
            <TouchableOpacity
              style={[xx.input, { justifyContent: 'center' }]}
              onPress={() => Actions.list({ update: (i) => { this.setState({ type: i }) }, dataSource: EMPLOYEMENT_TYPE })}
            >
              <Text>{this.state.type}</Text>
              <Ionicons size={20} name="md-arrow-dropdown" color={colors.GREY} style={{ right: 10, position: 'absolute' }} />
            </TouchableOpacity>

            <Text style={xx.green}>Company Address 2</Text>
            <TouchableOpacity
              style={[xx.input, { justifyContent: 'center' }]}
              onPress={() => Actions.list({ update: (i) => { this.setState({ type: i }) }, dataSource: EMPLOYEMENT_TYPE })}
            >
              <Text>{this.state.type}</Text>
              <Ionicons size={20} name="md-arrow-dropdown" color={colors.GREY} style={{ right: 10, position: 'absolute' }} />
            </TouchableOpacity>



          </View>

          <View style={xx.horizontalView}>
            <TouchableOpacity style={xx.btn} onPress={()=>Actions.pop()} >
              <Text style={xx.txt}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={xx.btn} onPress={()=>Actions.flow27()} >
              <Text style={xx.txt}>Next</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
