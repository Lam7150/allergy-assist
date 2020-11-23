import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import chickenSandwich from "../../assets/meals/chicken-sandwich.png"

export default function MealCard(props) {
    const navigation = useNavigation();
    const { data } = props;
    const { name, price, ingredients, allergens, relevant_allergens } = data;

    return (<TouchableOpacity style={styles.container} onPress={() => navigation.navigate("MealScreen", { data: data })}>
        <Image source={chickenSandwich} resizeMode="contain" style={styles.image} />
        <View style={styles.infoContainer}>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.otherText}>
                {`$${price}`}
            </Text>
            <Text style={styles.otherText}>
                {(relevant_allergens.length > 0) ? `! Has ${relevant_allergens}` : "No Allergens"}
            </Text>
        </View>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 2,
        backgroundColor: "#fff",
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 }
    },
    image: {
        backgroundColor: "#fafafa",
        flex: 0.18,
        height: 60,
        width: 60,
        borderRadius: 30
    },
    infoContainer: {
        flex: 0.82,
        flexDirection: "column",
        marginLeft: 5
    },
    name: {
        flex: 1,
        fontWeight: "bold",
    },
    otherText: {
        flex: 1
    }
});