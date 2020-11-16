import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { RESTAURANT_IMAGE } from "../utils/utils"

export default function Card(props) {
    const { data } = props;
    const { name, distance, edible } = data;

    return (<TouchableOpacity style={styles.container}>
        <Image source={RESTAURANT_IMAGE[name]} resizeMode="cover" style={styles.image} />
        <Text style={styles.name}>
            {name}
        </Text>
        <Text>
            {`${distance} miles away`}
        </Text>
        <Text>
            {`${edible} items you can eat`}
        </Text>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        borderRadius: 2,
        backgroundColor: "#fff",
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 }
    },
    image: {
        height: "60%",
        width: "100%",
        borderRadius: 2,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold",
    }
});