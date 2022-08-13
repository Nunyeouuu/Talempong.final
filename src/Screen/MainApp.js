import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import Sound from "react-native-sound";
import { sfx } from "../utils/Constant";


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
        <View>
            <View>
                <TouchableOpacity onPress={() => PlaySound(sfx._do)} style={{width: 100, height: 50, backgroundColor:'red'}}/>
                <TouchableOpacity onPress={() => PlaySound(sfx.re)} style={{width: 100, height: 50, backgroundColor:'red'}}/>
                <TouchableOpacity onPress={() => PlaySound(sfx.mi)} style={{width: 100, height: 50, backgroundColor:'red'}}/>
                <TouchableOpacity onPress={() => PlaySound(sfx.fa)} style={{width: 100, height: 50, backgroundColor:'red'}}/>
            </View>
        </View>
        </>
    );
};




const Stack = createNativeStackNavigator();
export default Stack;