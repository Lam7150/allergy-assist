import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileButton from "./ProfileButton";

export default function HeaderTitle() {
    return (<View style={styles.container}>
        <Text style={styles.title}>Allergy Assist</Text>
        <View style={styles.iconContainer}>
            <ProfileButton size={32} initials="EE" />
        </View>
    </View>);
}

// Header container styles specified in the parent component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        alignItems: "flex-start",
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