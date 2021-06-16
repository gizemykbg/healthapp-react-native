import React, {Component, Fragment, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors} from '../styles';

const Dropdown = ({placeholder, data, setValue, value, open, setOpen}) => {
  console.log(open);
  return (
    <DropDownPicker
      items={data}
      defaultValue={value}
      placeholder={placeholder}
      value={value}
      setValue={setValue}
      open={open}
      onPress={() => setOpen(!open)}
      arrowSize={24}
      arrowColor={colors.dark}
      containerStyle={{
        height: 50,
        marginBottom: 20,
      }}
      placeholderStyle={{
        fontWeight: '300',
        textAlign: 'left',
        color: colors.dark,
        fontSize: 18,
      }}
      style={{
        backgroundColor: colors.light,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: colors.purple,
      }}
      itemStyle={{
        justifyContent: 'flex-start',
        fontWeight: '300',
        color: colors.dark,
        fontSize: 18,
      }}
      labelStyle={{
        justifyContent: 'flex-start',
        fontWeight: '300',
        color: colors.dark,
        fontSize: 18,
      }}
      dropDownContainerStyle={{
        zIndex: 999,
        elevation: 999,
      }}
      activeLabelStyle={{color: colors.orange, fontWeight: '600', fontSize: 19}}
      dropDownStyle={{
        backgroundColor: colors.light,
        borderWidth: 2,
        borderColor: colors.purple,
        borderRadius: 8,
      }}
    />
  );
};

export default Dropdown;
