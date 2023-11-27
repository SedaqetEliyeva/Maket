import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

function App2(){
    return(
        <SafeAreaView style={styles.area}>
            <View style={styles.header}>
                <Image source={require("./assets/icons/menu.png")}/>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image style={{marginRight:25}} source={require("./assets/icons/search.png")}/>
                    <Image source={require("./assets/icons/profile.png")}/>
                </View>
            </View>
            <View style={styles.menu}>
                <Text style={styles.menuText1}>Hello,</Text>
                <Text style={styles.menuText2}>Lucas Arthur</Text>
            </View>
            <View style={styles.kateqoria}>
                <Text style={styles.kateqoria1}>New</Text>
                <Text style={styles.kateqoria2}>Trendy</Text>
                <Text style={styles.kateqoria3}>Best Rated</Text>
            </View>
            <View style={styles.picture}>
                <Image source={require("./assets/images/illustration.png")}/>
            </View>
            <View style={styles.course}>
                <Text style={styles.courses}>Last Seen Courses</Text>
            </View>
            <View style={styles.cards}>
                <Image source={require("./assets/elave/card1.png")}/>
                <Image source={require("./assets/elave/card2.png")}/>
            </View>
        </SafeAreaView>
    )
}
export default App2

const styles = StyleSheet.create({
    area: {
        flex:1
    },
    header: {
        flexDirection:"row",
        marginHorizontal:25,
        marginTop:29,
        alignItems:"center",
        justifyContent:"space-between"
    },
    menu: {
        marginTop:40,
        marginHorizontal:25
    },
    menuText1:{
        color:"black"
    },
    menuText2: {
        fontSize:25,
        color:"black",
        fontWeight:"900"
    },
    kateqoria: {
        marginTop:25,
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:25,
        marginRight:60
    },
    kateqoria1: {
        color:"red"
    },
    kateqoria2: {

    },
    kateqoria3: {

    },
    picture: {
        marginTop:10,
        marginHorizontal:28
    },
    course: {
        marginTop:5,
        marginHorizontal:29
    },
    courses: {
        fontSize:15,
        fontWeight:"700",
        color:"black"
    },
    cards:{
        marginTop:5,
        marginHorizontal:45,
        flexDirection:"row",
        justifyContent:"space-between"
    }
})