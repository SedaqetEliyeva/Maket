import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Background1 from "./Background1";

function App1(){
    return(
        <SafeAreaView style={styles.background}>
            <View style={styles.texts1}>
                <Text style={styles.Text1}>Welcome to</Text>
            </View>
            <Background1/>
        </SafeAreaView>
    )
}
export default App1

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#152B79",
        //width:375,
        height:814
    },
    texts1:{
        width:167,
        height:53,
        top:75,
        left:26
    },
    Text1:{
        weight:700,
        fontSize:37,
        //lineHeight:47.88,
        color:"#FFFFFF"
    }
})