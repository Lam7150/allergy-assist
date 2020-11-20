import React from "react";
import { View, SafeAreaView, FlatList, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../components/Button"
import MealCard from "../components/MealCard"
import { FontAwesome5 } from '@expo/vector-icons';
import { RESTAURANT_IMAGE } from "../utils/utils"

function RestaurantScreen(props) {
    const { route, navigation } = props;
    const { data } = route.params;
    const { name, distance, edible, menu_items, reviews } = data;
    const allergies = ["Dairy"]

    const edible_menu_items = () => {
        let edibles = menu_items.filter(item => !(item.allergens.some(a => allergies.indexOf(a) >= 0)))
        edibles.forEach(item => {
            item.relevant_allergens = []
        })

        return edibles
    }

    const inedible_menu_items = () => {
        let inedibles = menu_items.filter(item => item.allergens.some(a => allergies.indexOf(a) >= 0))
        inedibles.forEach(item => {
            item.relevant_allergens = item.allergens.filter(a => allergies.indexOf(a) >= 0)
        })

        return inedibles
    }

    const renderItem = (item) => {
        return (
            < View style={styles.itemContainer} >
                <MealCard data={item} />
            </View >
        )
    }

    return (<SafeAreaView style={styles.container}>
        <ScrollView>
            <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
                <FontAwesome5 style={{ marginRight: 4, marginTop: 1, marginBottom: 12 }} name="arrow-left" size={18} color="#EF767A" />
                <Text style={styles.backText}>
                    Go Back
            </Text>
            </TouchableOpacity>
            <Image style={styles.image} source={RESTAURANT_IMAGE[name]} resizeMode="cover" style={styles.image} />
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.description}>
                {`${distance} miles away`}
            </Text>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} textStyle={{ fontSize: 14 }} text="GET DIRECTIONS" />
                <View style={styles.buttonDiv} />
                <Button style={styles.button} textStyle={{ fontSize: 14 }} text="CALL RESTAURANT" />
            </View>
            <Text style={styles.menuTitle}>
                Menu items you can eat
            </Text>
            {edible_menu_items().map(item => renderItem(item))}
            <Text style={styles.menuTitle}>
                Menu items you can't eat
            </Text>
            {inedible_menu_items().map(item => renderItem(item))}
        </ScrollView>
    </SafeAreaView>);
}

export default RestaurantScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    backContainer: {
        flex: 0.1,
        flexDirection: "row",
        marginBottom: 10
    },
    backText: {
        fontSize: 16,
        color: "#EF767A"
    },
    image: {
        height: 150,
        width: "100%",
        borderRadius: 2,
        marginTop: -15,
        marginBottom: 5
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
    },
    description: {
        fontSize: 16,
        marginBottom: 5
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 40,
        width: "100%",
        marginBottom: 10
    },
    button: {
        flex: 1,
    },
    buttonDiv: {
        flex: 0.1
    },
    menuTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 10
    },
    itemContainer: {
        flex: 1,
        marginBottom: 8,
        height: 70,
        width: "100%",
    }
});