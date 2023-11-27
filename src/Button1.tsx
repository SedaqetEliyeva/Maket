import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

function Button1(){
    return(
        <SafeAreaView style={styles.buttonStart}>
            <View style={styles.b3}>
                <Image source={require("./assets/images/Vector.png")}/>
                <View style={styles.buttonS}>
                    <Text style={styles.text3}>Start Now</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Button1

const styles = StyleSheet.create({
    buttonStart:{
        flex:1
    },
    b3:{
        width:174.45,
        height:42,
        top:290,
        left:26
    },
    buttonS:{
        width:83,
        height:20,
        top:301,
        left:71
    },
    text3:{
        color:"#FFFFFF",
        weight:600,
        fontSize:16,
        lineHeight:19.5
    }
})