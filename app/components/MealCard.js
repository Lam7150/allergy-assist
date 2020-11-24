import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import chickenSandwich from "../../assets/meals/chicken-sandwich.png"

function MealCard(props) {
    const navigation = useNavigation();
    const { data, restrictions } = props;
    const { name, price, ingredients, allergens, relevant_allergens } = data;

    function getAffectedProfiles(str) {
        let affected = new Set();
        relevant_allergens.forEach(a =>
            restrictions[a].forEach(p => affected.add(p))
        );
        let affectedNames = []
        Array.from(affected).forEach(name => affectedNames.push(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()))
        return affectedNames;
    }

    function getAllergenText() {
        if (relevant_allergens.length > 0) {
            let affectedProfiles = getAffectedProfiles();
            if (affectedProfiles.length == 1 && affectedProfiles[0] == "Me")
                return `Contains ${relevant_allergens.join(", ")}`
            else
                return `Contains ${relevant_allergens.join(", ")}. Affects ${getAffectedProfiles().join(", ")}`
        }
        else
            return "No Allergens";
    }

    return (<TouchableOpacity style={styles.container} onPress={() => navigation.navigate("MealScreen", { data: data })}>
        <Image source={chickenSandwich} resizeMode="contain" style={styles.image} />
        <View style={styles.infoContainer}>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.price}>
                {`$${price}`}
            </Text>
            <Text style={(relevant_allergens.length > 0) ? styles.allergens : styles.noAllergens}>
                {getAllergenText()}
            </Text>
        </View>
    </TouchableOpacity>);
}

const mapStateToProps = (state) => ({
    restrictions: state.restrictions
})

export default connect(mapStateToProps)(MealCard);

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
    price: {
        flex: 1,
    },
    allergens: {
        flex: 1,
        color: "#ff6666"
    },
    noAllergens: {
        flex: 1
    }
});