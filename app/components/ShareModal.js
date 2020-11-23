import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import CheckBox from "../components/Checkbox";
import Button from "../components/Button";
import ProfileButton from "../components/ProfileButton";

const PROFILES = [["DAVID", "DF"], ["SABRINA", "SL"], ["LAM", "LT"], ["ALEX", "AL"]]

export default function ShareModal(props) {
    const { onClose, onSubmit } = props;
    const [anonymous, setAnonymous] = useState(false)

    return (<View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Share with...</Text>
                <TouchableOpacity style={styles.iconContainer} onPress={() => onClose()}>
                    <AntDesign name="close" size={24} color="#EF767A" />
                </TouchableOpacity>
            </View>
            <View style={styles.profilesContainer}>
                {PROFILES.map((item, index) => (
                    <View style={styles.profile} key={index.toString()}>
                        <ProfileButton
                            size={70}
                            initials={item[1]}
                        />
                        <Text style={styles.profileText}>{item[0]}</Text>
                    </View>
                ))}
            </View>
            <CheckBox
                style={styles.checkbox}
                value={anonymous}
                onPress={() => setAnonymous(!anonymous)}
                text={"Share Anonymously?"}
                color="#EF767A"
            />
            <Button style={styles.button} onPress={() => onClose()} textStyle={{ fontSize: 16 }} text="Copy Link" />
        </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        height: '40%',
        marginTop: 'auto',
        backgroundColor: '#fff',
        borderRadius: 20
    },
    innerContainer: {
        flex: 1,
        padding: 16
    },
    headerContainer: {
        flex: 0.3,
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
    profilesContainer: {
        flex: 1,
        flexDirection: "row"
    },
    profile: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    profileText: {

    },
    checkbox: {
        marginTop: 8,
        marginBottom: 8
    },
    button: {
        flex: 0.45,
    }
});