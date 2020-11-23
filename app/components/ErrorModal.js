import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import CheckBox from "../components/Checkbox"
import Button from "../components/Button"
import { ERRORS } from "../constants/Allergies"

export default function ErrorModal(props) {
    const { onClose, onSubmit } = props;
    const [errors, setErrors] = useState(() => { d = {}; ERRORS.forEach(e => d[e] = false); return d; })

    function handleErrorChange(item) {
        setErrors({
            ...errors,
            [item]: !errors[item]
        });
    }

    return (<View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Report error...</Text>
                <TouchableOpacity style={styles.iconContainer} onPress={() => onClose()}>
                    <AntDesign name="close" size={24} color="#EF767A" />
                </TouchableOpacity>
            </View>
            {ERRORS.map((item, index) => (
                <CheckBox
                    key={index.toString()}
                    value={errors[item]}
                    onPress={() => handleErrorChange(item)}
                    text={item}
                    color="#EF767A"
                />
            ))}
            <TextInput style={styles.errorInput} placeholder={"Report an error here..."} multiline={true} />
            <Button style={styles.button} onPress={() => onSubmit()} textStyle={{ fontSize: 16 }} text="Submit Error" />
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
        marginBottom: 4
    },
    iconContainer: {
        position: "absolute",
        right: 0
    },
    headerText: {
        fontSize: 20,
        fontWeight: "700"
    },
    errorInput: {
        flex: 1,
        flexGrow: 4,
        borderColor: "lightgray",
        borderWidth: 1,
        borderRadius: 2,
        textAlignVertical: "top",
        paddingLeft: 5,
        marginTop: 8,
        marginBottom: 10
    },
    button: {
        flex: 1.5,
    }
});