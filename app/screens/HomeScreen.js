import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/SearchBar"
import SlideSection from "../components/SlideSection"
import * as data from "../data/restaurants.json"
const { recommended_restaurants, restaurants_near_you, top_rated } = data

function HomeScreen() {
    const renderItem = ({ item, index }) => (
        < View style={styles.itemContainer} >
            <SlideSection title={item.title} data={item.data} />
        </View >
    )

    return (<View style={styles.container}>
        <View style={styles.searchContainer}>
            <SearchBar />
        </View>
        <FlatList
            style={styles.listContainer}
            data={sections}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
        />
    </View>);
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchContainer: {
        height: 60,
        padding: 10,
    },
    listContainer: {
        flex: 1
    },
    itemContainer: {
        height: 350,
        padding: 10,
        marginBottom: -120 // too lazy to fix, this is bad code LOL
    }
});

const sections = [{
    title: "Recommended Restaurants",
    data: recommended_restaurants
},
{
    title: "Restaurants Near You",
    data: restaurants_near_you
},
{
    title: "Top Rated",
    data: top_rated
}]