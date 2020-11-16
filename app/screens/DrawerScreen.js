import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import InitialIcon from "../components/InitialIcon"

function DrawerScreen(props) {
    const { state, navigation, descriptors, progress } = props;

    return (<View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Account</Text>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
                <InitialIcon size={32} initials={"EE"} />
            </TouchableOpacity>
        </View>
    </View>);
}

export default DrawerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: 20
    },
    headerContainer: {
        height: 40,
        flexDirection: "row",
        paddingLeft: 10,
        alignItems: "center"
    },
    iconContainer: {
        position: "absolute",
        right: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "700"
    }
});