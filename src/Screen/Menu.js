import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { Button } from "@rneui/themed";
import { image } from "../utils/Constant";

export const Menu = () => {
    return(
        <>
        <View>
            <View>
                <ImageBackground source={image.Background} style={styles.bg}>
                    <Button 
                    title={'button'} type={"clear"}>
                        <Image source={image.Info1} 
                        style={{
                        width: 100,
                        height: 60
                        }} />
                    </Button>
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
    }
})


const Stack = createNativeStackNavigator();
export default Stack;