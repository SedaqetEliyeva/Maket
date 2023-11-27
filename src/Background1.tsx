import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button1 from "./Button1";

function Background1(){
    return(
        <SafeAreaView style={styles.background2}>
            <View style={styles.b2}>
                <Image source={require("./assets/images/illustration (1).png")}/>
                <View style={styles.texts2}>
                    <Text style={styles.text1}>MUSIFY</Text>
                    <Text style={styles.text2}>An interactive music app designed to really provide a fully-formed experience to better your instrument playing.</Text>
                </View>
            </View>
            <Button1/>
        </SafeAreaView>
    )
}

export default Background1

const styles = StyleSheet.create({
    background2:{
        flex:1,
        borderColor:"#F6DB9A"
    },
    b2:{
        width:774.84,
        height:818.94,
        top:128.31,
        left:-155.42,
        border:1
    },
    texts2:{
        width:173,
        height:46,
        top:135,
        left:26,
        weight:400
    },
    text1:{
        color:"#FFA300",
        fontSize:37,
        lineHeight:46.25,
        letter:"10%"
    },
    text2:{
        fontSize:13,
        color:"#FFFFFF",
        lineHeight:24
    }
})