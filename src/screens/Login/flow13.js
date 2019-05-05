import React from "react"
import LogoView from "../../components/logoView";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from "react-native"
import { colors } from "../../config/colors";
import { ACCOUNT_TYPE } from "../../config/staticdata";
import { Ionicons } from '@expo/vector-icons'
import { Actions } from "react-native-router-flux";
import { xx } from "../../config/styles";

const width = Dimensions.get('window').width

export default class Flow13 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isWaiting: false,
      type:''
    }
  }


  render() {

    const { type, title } = this.state

    return (
      <KeyboardAvoidingView style={xx.container} behavior={"padding"} enabled>

        <LogoView />

        <ScrollView style={{ width: '100%' }}>

          <TouchableOpacity
            style={[styles.input, { justifyContent: 'center' }]}
            onPress={() => Actions.list({ update: (i) => { this.setState({ type: i }) }, dataSource: ACCOUNT_TYPE })}
          >
            <Text style={{color: title ? colors.DARK : colors.GREY}}>{type ? type : 'Account Type'}</Text>
            <Ionicons size={20} name="md-arrow-dropdown" color={colors.GREY} style={{ right: 10, position: 'absolute' }} />
          </TouchableOpacity>


          <View style={{ width: '100%', margin: 'auto', marginTop: 12 }}>


            <Text style={xx.green}>Company</Text>
            <TextInput
              style={xx.input}
              placeholder={'First Name'}
              onChangeText={(text1) => this.setState({ text1 })}
              value={this.state.text1}
            />
            <Text style={xx.green}>Nature</Text>
            <TextInput
              style={xx.input}
              placeholder={'First Name'}
              onChangeText={(text1) => this.setState({ text1 })}
              value={this.state.text1}
            />
            <Text style={xx.green}>Organization</Text>
            <TextInput
              style={xx.input}
              placeholder={'First Name'}
              onChangeText={(text1) => this.setState({ text1 })}
              value={this.state.text1}
            />

          </View>

          <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop:width/10 }}>
            <TouchableOpacity style={styles.btn} onPress={()=>Actions.flow14()}>
              <Text style={styles.txt}>Confirm</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontWeight: 'bold', color: colors.GREY, marginTop: width / 3 }}>Risk Advasory</Text>
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
    borderBottomColor: colors.GREY,
    borderBottomWidth: 1,
    padding: 1,
    height: width / 11,
    marginHorizontal: 20,
    marginVertical: 2,
    paddingLeft: 12
  },
  picker: {
    borderBottomColor: colors.GREY,
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  view: {
    backgroundColor: colors.GREEN,
    width: '100%',
    padding: 8,
    marginTop: 12
  }

})