import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileCard(props) {
    const { text, style, textStyle, onClose, pending, onAccept } = props;

    return (<View style={[styles.container, style]}>
        <Text style={[styles.text, textStyle]} >
            {text}
        </Text>
        <TouchableOpacity style={styles.close} onPress={() => onClose()}>
            <FontAwesome name="remove" size={24} color="#fff" />
        </TouchableOpacity>
        { pending ? (<TouchableOpacity style={styles.check}>
            <FontAwesome name="check" size={24} color="#fff" onPress={() => onAccept()} />
        </TouchableOpacity>) : null
        }
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        paddingLeft: 10,
        backgroundColor: "#EF767A",
        borderRadius: 2,
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 }
    },
    text: {
        fontSize: 16,
        fontWeight: "700",
        color: "#fff"
    },
    check: {
        position: "absolute",
        right: 32
    },
    close: {
        position: "absolute",
        right: 6
    }
})