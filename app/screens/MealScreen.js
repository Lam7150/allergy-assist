import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Modal, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import ErrorModal from "../components/ErrorModal";
import ConfirmationModal from "../components/ConfirmationModal";
import Button from "../components/Button";
import chickenSandwich from "../../assets/meals/chicken-sandwich.png"

function MealScreen(props) {
    const { route, navigation, restrictions } = props;
    const { data } = route.params;
    const { name, price, ingredients, allergens, relevant_allergens } = data;
    const [eModalVisible, seteModalVisible] = useState(false);
    const [cModalVisible, setcModalVisible] = useState(false);

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

    return (<SafeAreaView style={styles.container}>
        <ScrollView>
            <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
                <FontAwesome5 style={{ marginRight: 4, marginTop: 1, marginBottom: 12 }} name="arrow-left" size={18} color="#EF767A" />
                <Text style={styles.backText}>
                    Go Back
            </Text>
            </TouchableOpacity>
            <View style={styles.mealContainer}>
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
            </View>
            <Text style={styles.title}>
                INGREDIENTS
            </Text>
            {ingredients.map((item, index) => (
                <View style={styles.ingredient} key={index.toString()}>
                    <Entypo name="check" size={24} color="#EF767A" />
                    <Text> {item} </Text>
                </View>
            ))}
            <Button style={styles.button} onPress={() => seteModalVisible(true)} text="Report error with item" />
            <Modal
                animationType="slide"
                transparent={true}
                visible={eModalVisible}
            >
                <ErrorModal onClose={() => seteModalVisible(false)} onSubmit={() => { seteModalVisible(false); setcModalVisible(true) }} />
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={cModalVisible}
            >
                <ConfirmationModal onClose={() => setcModalVisible(false)} text="Thank you for reporting an error!" />
            </Modal>
        </ScrollView>
    </SafeAreaView>);
}

const mapStateToProps = (state) => ({
    restrictions: state.restrictions
})

export default connect(mapStateToProps)(MealScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    backContainer: {
        flex: 0.1,
        flexDirection: "row",
    },
    backText: {
        fontSize: 16,
        color: "#EF767A"
    },
    mealContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 8
    },
    image: {
        backgroundColor: "#fafafa",
        flex: 0.30,
        height: 100,
        width: 100,
        borderRadius: 50,
        marginRight: 15
    },
    infoContainer: {
        flex: 0.7,
        flexDirection: "column",
    },
    name: {
        flex: 1,
        fontSize: 18,
        fontWeight: "bold",
    },
    price: {
        flex: 1,
        fontSize: 16
    },
    allergens: {
        flex: 1,
        color: "#ff6666",
        fontSize: 16
    },
    noAllergens: {
        flex: 1,
        fontSize: 16
    },
    button: {
        height: 40,
        alignSelf: "center",
        width: "70%",
        marginTop: 20,
    },
    ingredient: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});