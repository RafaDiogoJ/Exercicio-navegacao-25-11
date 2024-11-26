import React from "react";
import { View, Text, Button } from "react-native";

export default function DetailsScreen ({navigation}) {
    return (
        <View Style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}