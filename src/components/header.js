import React from "react"
import { Text, View, Dimensions } from "react-native"
import { colors } from "../config/colors";
import { xx } from "../config/styles";

const width = Dimensions.get('window').width

export default class Header extends React.Component {

    render() {
        return (
            <View style={{ width: '100%', }}>

                <Text style={[xx.green, { color: colors.GREY }]}>{this.props.title}</Text>
                <View style={{ backgroundColor: colors.GREY, width: '89%', height: 1, marginHorizontal: width / 20 }}></View>


            </View>

        )
    }
}
