import React from "react"
import { Image, Text, View, Dimensions, StyleSheet } from "react-native"
import { colors } from "../config/colors";
import { images } from "../config/images";

const width = Dimensions.get('window').width

export default class LogoView extends React.Component {

    render() {
        return (
            <View style={{width:'100%', alignItems:'center', justifyContent: 'center',}}>

                <Image source={images.logo} style={styles.logo} />

                <View style={styles.view}>
                    <Text style={[styles.bold, { color: '#fff' }]}>Personal Place</Text>
                </View>

            </View>

        )
    }
}


const styles = StyleSheet.create({

    bold: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.GREY,
        fontSize: 17
    },

    logo: {
        width: width / 2,
        height: width / 12,
        marginTop: width / 8
    },

    view: {
        backgroundColor: colors.GREEN,
        width: '100%',
        padding: 5,
        marginTop: width/20
    }


})