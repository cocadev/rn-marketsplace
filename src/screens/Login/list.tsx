import React from "react"
import { TouchableOpacity, Text, View, FlatList, Dimensions,  } from "react-native"
import { Actions } from "react-native-router-flux";
import { images } from "../../config/images";
import { colors } from "../../config/colors";
import Cache from "../../cache"
import api from "../../api";
import { xx } from "../../config/styles";
import LogoView from "../../components/logoView";
import Header from "../../components/header";
import { Ionicons } from '@expo/vector-icons'
import { workflow_1 } from "../../config/staticdata";

const width = Dimensions.get('window').width

export default class List extends React.Component {

  _renderItem = ({item}) => (
    <TouchableOpacity 
       onPress={()=>{
        if ( this.props.update ) {
          this.props.update(item.title)
          Actions.pop()
        }
       }} 
       style={{marginHorizontal:12, marginVertical:3, borderColor:colors.GREY, borderWidth:1, width:width-24, padding:4}}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  )

  render() {

    return (
      <View style={[xx.container, {alignItems:'flex-start'}]} >

        <LogoView />

        <FlatList
            style={{marginTop:20}}
            data={this.props.dataSource}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderItem}
        />
      
      </View>
    )
  }
}
