import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {colors} from '../../styles'
const Button = ({title, style,textStyle, onPress}) => {
    return (
        <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
            <Text style={[styles.text,textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.purple,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical:18,
        marginVertical:10,
        shadowColor:colors.dark,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 13,
    },
    text: {
        fontSize: 20,
        textAlign:'center',
        fontWeight: "700",
        color: colors.light
    }
})