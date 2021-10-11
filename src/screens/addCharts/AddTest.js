import React, {useState, useEffect, useRef} from 'react';
import {observer} from 'mobx-react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  processColor,
} from 'react-native';
import {colors} from '../../styles';
import {ChartDestinationButton, Button, BarCharts} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import Store from '../../store/store';
import {Bar} from 'react-native-progress';

import TextInputAddT from '../../components/textInputTest';

const AddTest = () => {
  const [destination, setDestination] = useState(true);
  const [showTest, setShowTest] = useState(false);
  const [test, setTest] = useState([
    {
      index: Math.random(),
      value1: '',
      value2: '',
      placeholder1: 'Test adını giriniz',
      placeholder2: 'Test sonucu giriniz',
    },
  ]);

  //test
  const handleChange = (i, text, valueName) => {
    //testhandlechange
    const Newtest = [...test];
    Newtest[i] = {...Newtest[i], [valueName]: text};
    setTest(Newtest);
  };

  const testAddTextInput = () => {
    setTest([
      ...test,
      {
        index: Math.random(),
        value1: '',
        value2: '',
        placeholder1: 'test adını giriniz',
        placeholder2: 'test sonucu giriniz',
      },
    ]);
  };
  const testRemoveRow = index => {
    const filteredItems = test.filter(filteredItem => index !== filteredItem);
    setTest([...filteredItems]);
    Store.removeBreakfast(index); ///
  };
  const testButton = () => {
    let newtest = [];
    test.map((val, index) => {
      newtest.push({
        testName: val.value1,
        testValue: val.value2,
        id: val.index,
      });
    });
    //console.log(breakfast)
    Store.addTest(newtest);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/diet.png')}
        style={{width: '100%', height: 270}}
        resizeMode="cover"
      />
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 17,
            textAlign: 'auto',
            paddingBottom: 40,
            color: colors.dark,
          }}>
          Değer takibi için değerleri aşağıdaki alana yazınız.
        </Text>
        <TouchableOpacity
          onPress={() => setShowTest(!showTest)}
          style={{
            height: 40,
            backgroundColor: colors.lightBlue,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            marginBottom: 10,
          }}>
          <Text
            style={{fontSize: 16, fontWeight: '600', color: colors.darkBlue}}>
            Test Girmek için Tıklayınız
          </Text>
        </TouchableOpacity>
        {showTest && (
          <View
            style={{
              backgroundColor: colors.lightBlue,
              borderRadius: 8,
              padding: 10,
            }}>
            <View style={{marginBottom: 20}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: 18,
                  color: colors.dark,
                }}>
                Test Sonucu
              </Text>
              {Store.test.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      borderBottomWidth: 2,
                      padding: 5,
                      borderBottomColor: colors.white,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        borderRightWidth: 2,
                        borderRightColor: colors.white,
                      }}>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 14,
                          color: colors.dark,
                        }}>
                        {item.foodName}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingLeft: 5,
                      }}>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 14,
                          color: colors.dark,
                        }}>
                        {item.testValue}
                      </Text>
                    </View>
                  </View>
                );
              })}
              <TextInputAddT
                items={test}
                add={testAddTextInput}
                remove={testRemoveRow}
                onChangeText1={handleChange} //??
                onChangeText2={handleChange} //??
                onPress={testButton}
                onChangeText1={(i, text) => handleChange(i, text, 'value1')} //??
                onChangeText2={(i, text) => handleChange(i, text, 'value2')} //??
              />
            </View>
          </View>
        )}
        {destination ? null : (
          <BarCharts
            values={values}
            label={label}
            valueFormatter={valueFormatter}
            color={processColor(colors.green2)}
            barShadowColor={processColor(colors.green)}
            highlightColor={processColor(colors.green)}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default observer(AddTest);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  main: {
    flex: 1,
    marginHorizontal: 23,
    marginTop: 20,
  },
  destinationView: {
    flex: 1,
    marginBottom: 15,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  destinationText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.pink,
  },
  destinationFinishText: {
    flex: 1.5,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.orange,
  },
  exerciseTracking: {
    color: colors.dark,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
// const handleFoodChange = (text,index)  => {
//     const newFoodValue = food.map((value, item) => {
//         if (index !== item) return newFoodValue;
//         return { ...newFoodValue, ...text };
//     });

//     setFood(newFoodValue)
// } const [food, setFood] = useState([
//     {
//         //id:Math.random(),
//         foodName: '',
//         foodQuantity: ''
//     }
// ])
