import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";

export const MainApp = () => {
    return(
        <>
        <View>
            <View>
                <Text>bruh</Text>
            </View>
        </View>
        </>
    );
}


const Stack = createNativeStackNavigator();
export default Stack;