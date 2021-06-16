import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {colors} from '../styles';

const Input = ({placeholder, onChangeText, value, keyboardType}) => {
  return (
    <TextInput
      style={styles.textinput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor={colors.dark}
      keyboardType={keyboardType}
    />
  );
};
export default Input;

export const styles = StyleSheet.create({
  textinput: {
    height: 50,
    backgroundColor: colors.light,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.purple,
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: colors.dark,
    fontWeight: '300',
    marginBottom: 20,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.45,
    elevation: 8,
  },
});
