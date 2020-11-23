import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Button from "../components/Button"

export default function ReviewModal(props) {
    const { onClose, text } = props;
    return (<View style={styles.container}>
        <View style={styles.innerContainer}>
            <Text style={styles.headerText}>{text}</Text>
            <View style={styles.iconContainer}>
                <FontAwesome name="check" size={70} color="#EF767A" />
            </View>
            <Button style={styles.button} onPress={() => onClose()} textStyle={{ fontSize: 16 }} text="Close" />
        </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        height: '30%',
        marginTop: 'auto',
        backgroundColor: '#fff',
        borderRadius: 20
    },
    innerContainer: {
        flex: 1,
        padding: 16
    },
    iconContainer: {
        flex: 2,
        alignItems: "center",
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "700",
    },
    button: {
        flex: 1
    }
});