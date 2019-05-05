import React from "react"
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, AsyncStorage } from "react-native"
import { MapView } from 'expo';
import { colors } from "../../config/colors";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const width = Dimensions.get('window').width

export default class Map extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
      location: { lat: 19.076090, lng: 72.877426, },
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>You are success !</Text>

      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: width / 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
})