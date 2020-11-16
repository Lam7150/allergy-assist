import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InitialIcon(props) {
    const { initials, size } = props;

    return (<View style={[styles.container, { height: size, width: size }]}>
        <Text style={styles.text}>
            {initials}
        </Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        borderColor: "#D6D6D6",
        borderWidth: 1,
        paddingLeft: 1,
    },
    text: {
        fontSize: 15,
    }
});