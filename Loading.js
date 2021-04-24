import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";

export default function Loading(){
    return (<View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Sohee's first react-native App</Text>
        </View>);
}

// css
// width / height로 크기를 조절하기 보다 flex 비율로 조절하면 어떤 기기로 봐도 같은 비율의 화면을 볼 수 있다.
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:30,
        paddingVertical:100,
        backgroundColor:"#FDF6AA"
    },
    text:{
        color:"#2c2c2c",
        fontSize:30
    }
})