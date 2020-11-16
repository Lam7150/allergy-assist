import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function SettingsScreen() {
    return (<View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/allergy-assist.png')}></Image>
        <Text style={styles.caption}>
            Settings Screen
        </Text>
    </View>);
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
    },
    logo: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
        margin: 10
    },
    caption: {
        fontSize: 20,
        fontWeight: "bold"
    }
});