import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import RestaurantCard from "./RestaurantCard"

export default function SlideSection(props) {
    const { title, data } = props

    const renderItem = ({ item, index }) => (
        < View style={styles.itemContainer} >
            <RestaurantCard data={item} />
        </View >
    )

    return (<View style={styles.container}>
        <Text style={styles.title}>
            {title.toUpperCase()}
        </Text>
        <FlatList
            horizontal
            style={styles.listContainer}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
        />
        <TouchableOpacity style={styles.footerContainer}>
            <Text style={styles.footer}>
                {`See all ${title.toLowerCase()}`}
            </Text>
            <FontAwesome5 style={{ marginLeft: 4, marginTop: 1 }} name="arrow-right" size={18} color="#EF767A" />
        </TouchableOpacity>
    </View>);
}

// Header container styles specified in the parent component
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        marginTop: 8,
        marginBottom: 8,
        overflow: "visible"
    },
    itemContainer: {
        flex: 1,
        marginRight: 10,
        width: 200
    },
    footerContainer: {
        flex: 1,
        flexDirection: "row"
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
    },
    footer: {
        fontSize: 16,
        color: "#EF767A"
    }
});