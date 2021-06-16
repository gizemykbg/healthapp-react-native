import React, {useState, useEffct} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {colors} from '../../styles';

const ChartDestinationButton = ({
  onPress,
  bgColor,
  borColor,
  buttonColor,
  buttonTitle,
  destinationShow = false,
  placeholder,
  destination,
  onChangeText,
  value,
  onPressDestination,
  mainDestination,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: bgColor, borderColor: borColor},
        ]}
        onPress={onPress}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
      {destinationShow ? (
        destination ? (
          <View
            style={[
              styles.destinationTrue,
              {backgroundColor: bgColor, borderColor: borColor},
            ]}>
            <TextInput
              placeholder={placeholder}
              style={styles.input}
              onChangeText={onChangeText}
              value={value}
              placeholderTextColor="rgba(0,0,0,0.5)"
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <TouchableOpacity
                onPress={onPressDestination}
                style={{
                  width: 140,
                  height: 40,
                  backgroundColor: buttonColor,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>Kaydet</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View
            style={[
              styles.destinationFalse,
              {backgroundColor: bgColor, borderColor: borColor},
            ]}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 10,
                marginVertical: 15,
              }}>
              <Text
                style={{
                  flex: 1.2,
                  fontSize: 14,
                  fontWeight: '600',
                  color: colors.dark,
                }}>
                Hedefin : {mainDestination}{' '}
              </Text>
              <TextInput
                placeholder={'placeholder'}
                style={styles.input2}
                onChangeText={onChangeText}
                value={value}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <TouchableOpacity
                onPress={onPressDestination}
                style={{
                  width: 140,
                  height: 40,
                  backgroundColor: buttonColor,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>Kaydet</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      ) : null}
    </>
  );
};

export default ChartDestinationButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 2,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.dark,
    textAlign: 'center',
  },
  destinationTrue: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.yellow,
    backgroundColor: colors.lightYellow,
  },
  input: {
    height: 40,
    margin: 12,
    paddingHorizontal: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    color: colors.black,
  },
  destinationFalse: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.yellow,
    backgroundColor: colors.lightYellow,
  },
  input2: {
    height: 40,
    paddingHorizontal: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    flex: 2,
  },
});
