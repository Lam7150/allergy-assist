import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { AirbnbRating } from "react-native-ratings"
import Button from "../components/Button"

export default function ReviewModal(props) {
    const { onClose, onSubmit } = props;
    return (<View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Write a review...</Text>
                <TouchableOpacity style={styles.iconContainer} onPress={() => onClose()}>
                    <AntDesign name="close" size={24} color="#EF767A" />
                </TouchableOpacity>
            </View>
            <Text style={styles.ratingText}>Select a rating</Text>
            <View style={styles.ratingContainer}>
                <AirbnbRating
                    defaultRating={0}
                    showRating={false}
                    selectedColor='#EF767A'
                />
            </View>
            <TextInput style={styles.reviewInput} placeholder={"Write a review here..."} multiline={true} />
            <Button style={styles.button} onPress={() => onSubmit()} textStyle={{ fontSize: 16 }} text="Submit Review" />
        </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        height: '60%',
        marginTop: 'auto',
        backgroundColor: '#fff',
        borderRadius: 20
    },
    innerContainer: {
        flex: 1,
        padding: 16
    },
    headerContainer: {
        flex: 0.8,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    iconContainer: {
        position: "absolute",
        right: 0
    },
    headerText: {
        fontSize: 20,
        fontWeight: "700"
    },
    ratingText: {
        flex: 0.45,
        fontSize: 16
    },
    ratingContainer: {
        flex: 1,
        alignItems: "flex-start",
    },
    reviewInput: {
        flex: 1,
        flexGrow: 4,
        borderColor: "lightgray",
        borderWidth: 1,
        borderRadius: 2,
        textAlignVertical: "top",
        paddingLeft: 5,
        marginBottom: 10
    },
    button: {
        flex: 1,
    }
});