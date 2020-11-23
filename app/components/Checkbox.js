import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

function CheckBox({ value, onPress, style, textStyle, size = 30, color = '#211f30', text = '', ...props }) {
    return (
        <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
            <MaterialIcons name={value ? 'check-box' : 'check-box-outline-blank'} size={size} color={color} />
            <Text style={textStyle}> {text} </Text>
        </TouchableOpacity>
    )
}

export default CheckBox

const styles = StyleSheet.create({
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})