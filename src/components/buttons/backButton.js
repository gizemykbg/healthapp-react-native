import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../styles';
import Icon from 'react-native-vector-icons/Feather'

const BackButton = ({ title, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button}>
                <Icon name="arrow-left-circle" size={24} color={colors.dark} />
                <Text style={styles.text}>Geri Dön</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default BackButton;

export const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        paddingHorizontal: 10,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: "400",
        color: colors.dark
    }
})