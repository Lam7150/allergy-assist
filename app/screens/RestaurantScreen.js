import React, { useState } from "react";
import { View, SafeAreaView, FlatList, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Modal } from "react-native";
import Button from "../components/Button"
import MealCard from "../components/MealCard"
import ReviewCard from "../components/ReviewCard"
import ReviewModal from "../components/ReviewModal"
import ConfirmationModal from "../components/ConfirmationModal"
import { AirbnbRating } from "react-native-ratings"
import { FontAwesome5 } from '@expo/vector-icons';
import { RESTAURANT_IMAGE } from "../utils/utils"

function RestaurantScreen(props) {
    const { route, navigation } = props;
    const { data } = route.params;
    const { name, distance, edible, menu_items, reviews } = data;
    const allergies = ["Dairy"]
    const [rModalVisible, setrModalVisible] = useState(false);
    const [cModalVisible, setcModalVisible] = useState(false);

    const average_rating = () => {
        let sum = 0;
        for (let review of reviews)
            sum += review.rating
        return (sum / reviews.length);
    }

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

    const renderMeal = (item, index) => {
        return (
            <View key={index.toString()} style={styles.mealContainer} >
                <MealCard data={item} />
            </View >
        )
    }

    const renderReview = ({ item, index }) => {
        return (
            <View key={index.toString()} style={styles.reviewContainer} >
                <ReviewCard data={item} />
            </View >
        )
    }

    return (<SafeAreaView style={styles.container}>
        <FlatList
            ListHeaderComponent={
                <>
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
                    {edible_menu_items().map((item, index) => renderMeal(item, index))}
                    <Text style={styles.menuTitle}>
                        Menu items you can't eat
                    </Text>
                    {inedible_menu_items().map((item, index) => renderMeal(item, index))}
                    <Text style={{ ...styles.menuTitle, fontSize: 18 }}>
                        Reviews
                    </Text>
                    <View style={styles.ratingContainer}>
                        <AirbnbRating
                            defaultRating={4.5}
                            showRating={false}
                            selectedColor='#EF767A'
                            isDisabled={true}
                        />
                    </View>
                    <Text style={styles.menuTitle}>
                        {`${average_rating()} Stars Overall`}
                    </Text>
                </>
            }
            style={styles.listContainer}
            data={reviews}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderReview}
            ListFooterComponent={
                <>
                    <Button style={styles.button} onPress={() => setrModalVisible(true)} textStyle={{ fontSize: 14 }} text="Leave a review" />
                </>
            }
        />
        <Modal
            animationType="slide"
            transparent={true}
            visible={rModalVisible}>
            <ReviewModal onClose={() => setrModalVisible(false)} onSubmit={() => { setrModalVisible(false); setcModalVisible(true) }} />
        </Modal>
        <Modal
            animationType="slide"
            transparent={true}
            visible={cModalVisible}>
            <ConfirmationModal onClose={() => setcModalVisible(false)} text="Thank you for leaving a review!" />
        </Modal>
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
        height: 40
    },
    buttonDiv: {
        flex: 0.1
    },
    menuTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 10
    },
    mealContainer: {
        flex: 1,
        marginBottom: 8,
        height: 70,
        width: "100%",
    },
    ratingContainer: {
        alignItems: "flex-start"
    },
    reviewContainer: {
        flex: 1,
        marginBottom: 8,
        height: 90,
        width: "100%",
    }
});