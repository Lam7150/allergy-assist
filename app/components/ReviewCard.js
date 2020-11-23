import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AirbnbRating } from "react-native-ratings"

export default function ReviewCard(props) {
    const { data } = props;
    const { name, rating, review } = data;

    return (<View style={styles.container}>
        <Text style={styles.name}>
            {name}
        </Text>
        <View style={styles.reviewContainer}>
            <Text style={styles.reviewText} numberOfLines={2}>
                {(review.length > 0) ? `${review}` : "No comments added"}
            </Text>
            <View style={styles.ratingContainer}>
                <AirbnbRating
                    defaultRating={rating}
                    showRating={false}
                    selectedColor='#EF767A'
                    isDisabled={true}
                    size={16}
                />
                <Text style={styles.ratingText}>
                    {`${rating}/5 Stars`}
                </Text>
            </View>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    reviewContainer: {
        flex: 0.7,
        justifyContent: "center",
        padding: 5,
        borderRadius: 2,
        backgroundColor: "#fff",
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
    },
    name: {
        flex: 0.3,
        fontWeight: "bold",
    },
    reviewText: {
        flex: 0.7,
        flexShrink: 1,
        flexWrap: "wrap"
    },
    ratingContainer: {
        flex: 0.3,
        flexDirection: "row"
    },
    ratingText: {
        fontWeight: "bold",
        marginLeft: 2
    }
});