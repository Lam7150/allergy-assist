import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import InitialIcon from "./InitialIcon";

export default function ProfileButton(props) {
    const navigation = useNavigation()
    const { size, initials } = props;

    return (<View style={styles.container}>
        {/* <TouchableOpacity onPress={() => navigation.openDrawer()}> Deprecated for now */}
        <TouchableOpacity>
            <InitialIcon size={size} initials={initials} />
        </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
    }
});