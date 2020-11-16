import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileButton from "./ProfileButton";

export default function HeaderTitle() {
    return (<View style={styles.container}>
        <Text style={styles.title}>Allergy Assist</Text>
        <View style={styles.iconContainer}>
            <ProfileButton size={40} initials="EE" />
        </View>
    </View>);
}

// Header container styles specified in the parent component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    iconContainer: {
        position: "absolute",
        right: 0
    },
    title: {
        fontSize: 20,
        fontWeight: "700"
    }
});