import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button(props) {
    const { text, style, textStyle, onPress } = props;

    return (<TouchableOpacity style={[styles.container, style]} onPress={() => { if (onPress) onPress() }}>
        <Text style={[styles.text, textStyle]} >
            {text}
        </Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EF767A",
        borderRadius: 2,
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 }
    },
    text: {
        fontSize: 16,
        fontWeight: "700",
        color: "#fff"
    }
})