import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Button from "../components/Button";
import { FontAwesome } from '@expo/vector-icons';

export default function SearchBar() {
    const [location, setLocation] = useState()

    return (<View style={styles.container}>
        <View style={styles.searchContainer}>
            <FontAwesome style={{ marginTop: -2 }} name="location-arrow" size={24} color="#EF767A" />
            <TextInput placeholder="Using your current location..." style={styles.textInput} onChangeText={text => setLocation(text)} />
        </View>
        <Button style={styles.button} text="GO" />
    </View>);
}

// Header container styles specified in the parent component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#DADADA",
    },
    searchContainer: {
        flex: 0.85,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 8
    },
    textInput: {
        height: "100%",
        width: "90%",
        marginLeft: 10,
        fontSize: 16
    },
    button: {
        flex: 0.15,
    },
});