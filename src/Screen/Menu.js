import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Button, Image } from "@rneui/themed";
import { image } from "../utils/Constant";

export const Menu = () => {
    return(
        <>
        <View>
            <View style={{flex:1,}}>
                <ImageBackground source={image.Background} style={styles.bg}>
                    <View style={{ justifyContent:"space-around", flexDirection:"row",
                    width: 650, height: 100, alignSelf: 'center', marginVertical: 175 }}> 
                        <View>
                            <Image 
                            source={image.Info1}
                            style={styles.button}
                            onPress={() => console.log(`help`)}/>
                        </View>
                        <View>
                            <Image 
                            source={image.Info1}
                            style={styles.button}
                            onPress={() => console.log(`help`)}/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create ({
    bg: {
        widht: 200, 
        height: 400,
    },
    button: {
        height: 140,
        width: 210,
        alignContent: 'center',

    } 
})


const Stack = createNativeStackNavigator();
export default Stack;