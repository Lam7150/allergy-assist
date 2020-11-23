import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar"

function SearchScreen() {
    return (<SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
            <SearchBar />
        </View>
    </SafeAreaView>);
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchContainer: {
        height: 60,
        padding: 10,
    },
});