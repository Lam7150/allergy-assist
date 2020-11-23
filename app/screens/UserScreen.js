import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import CheckBox from '../components/Checkbox';
import Button from "../components/Button"
import { ALLERGIES, DIETARY_RESTRICTIONS } from "../constants/Allergies";

function UserScreen() {
    const [allergies, setAllergies] = useState(() => { d = {}; ALLERGIES.forEach(a => d[a] = false); return d; })
    const [dietRestrictions, setDietRestrictions] = useState(() => { d = {}; DIETARY_RESTRICTIONS.forEach(a => d[a] = false); return d; })

    function handleAllergyChange(item) {
        setAllergies({
            ...allergies,
            [item]: !allergies[item]
        });
    }

    function handleDietChange(item) {
        setDietRestrictions({
            ...dietRestrictions,
            [item]: !dietRestrictions[item]
        });
    }

    return (<SafeAreaView style={styles.container}>
        <Text style={styles.title}>
            MY ALLERGIES
        </Text>
        {ALLERGIES.map((item, index) => (
            <CheckBox
                key={index.toString()}
                value={allergies[item]}
                onPress={() => handleAllergyChange(item)}
                text={item}
                color="#EF767A"
            />
        ))}
        <Text style={styles.title}>
            DIETARY RESTRICTIONS
        </Text>
        {DIETARY_RESTRICTIONS.map((item, index) => (
            <CheckBox
                key={index.toString()}
                value={dietRestrictions[item]}
                onPress={() => handleDietChange(item)}
                text={item}
                color="#EF767A"
            />
        ))}
        <Button style={styles.button} text="SAVE PROFILE" />
        <Button style={styles.button} text="SHARE PROFILE" />
    </SafeAreaView>);
}

export default UserScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 8
    },
    button: {
        flex: 0.4,
        alignSelf: "center",
        width: "70%",
        marginTop: 20,
    }
});