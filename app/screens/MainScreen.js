import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/SearchBar"

function MainScreen() {
    return (<View style={styles.container}>
        <View style={styles.searchContainer}>
            <SearchBar />
        </View>
    </View>);
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchContainer: {
        height: 60,
        padding: 10,
    }
});