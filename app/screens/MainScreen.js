import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

function MainScreen() {
    return (<View style={styles.container}>
        <Text> Home </Text>
    </View>);
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});