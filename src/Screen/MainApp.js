import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import Sound from "react-native-sound";
import { sfx } from "../utils/Constant";
import { image } from "../utils/Constant";



export const MainApp = () => {
    const PlaySound = async (FileName) => {
        const sound = new Sound(FileName, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log(error)
            }

            const toSecond = 1000;

            const totalTime = sound.getDuration() * toSecond;
            sound.play((success) => {
                if (!success) return;

                setTimeout(() => {
                    sound.release();
                }, totalTime)
            })
        })
    }

    return(
        <>
        <ImageBackground source={image.Bg_mainapp} style={styles.bg}>
            <View >
                <View style={styles.button_container}>
                    <TouchableOpacity onPress={() => PlaySound(sfx._do)} style={styles.Button}/>
                    <TouchableOpacity onPress={() => PlaySound(sfx.re)} style={styles.Button}/>
                    <TouchableOpacity onPress={() => PlaySound(sfx.mi)} style={styles.Button}/>
                    <TouchableOpacity onPress={() => PlaySound(sfx.fa)} style={styles.Button}/>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity onPress={() => PlaySound(sfx.sol)} style={styles.Button}/>
                    <TouchableOpacity onPress={() => PlaySound(sfx.la)} style={styles.Button}/>
                    <TouchableOpacity onPress={() => PlaySound(sfx.si)} style={styles.Button}/>
                    <TouchableOpacity onPress={() => PlaySound(sfx.do1)} style={styles.Button}/>
                
                </View>
            </View>
        </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create ({
    bg:{
        width: null,
        height: 387,
        backgroundColor: 'green',
    },

    Button : {
        width: 100, 
        height: 100,
        backgroundColor: 'blue',
        borderColor: 'black', 
        marginHorizontal: 5,
        marginVertical: 30,
        paddingVertical: 40,
    },

    button_container: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
    }
})




const Stack = createNativeStackNavigator();
export default Stack;