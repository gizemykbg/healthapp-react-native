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
import {BarCharts} from '../../components';
import Store from '../../store/store';
import {TextInputAdd} from '../../components';

const values = [{y: 1200}, {y: 1500}, {y: 2100}, {y: 2800}, {y: 0}, {y: 0}, {y: 0}];
const valueFormatter = [
  '30.06.2021',
  '01.07.2021',
  '02.07.2021',
  '03.07.2021',
  '04.07.2021',
  '05.07.2021',
  '06.07.2021',
];
const label = '1 Haftalık Kalori Takibi';

const AddNutrition = props => {
  const [call, setCall] = useState();
  const [full, setFull] = useState([]);
  const [destination, setDestination] = useState(false);///
  const [showFood, setShowFood] = useState(true);
  const [flag, setFlag] = useState(false);
  const [list, setList] = useState([]);
 


  const [breakfast, setBreakfast] = useState([
    {
      index: Math.random(),
      value1: '',
      value2: '',
      placeholder1: 'Yemek adını giriniz',
      placeholder2: 'Yemek miktarı giriniz',
    },
  ]);
  const [lunch, setLunch] = useState([
    {
      index: Math.random(),
      value1: '',
      value2: '',
      placeholder1: 'Yemek adını giriniz',
      placeholder2: 'Yemek miktarı giriniz',
    },
  ]);
  const [snack, setSnack] = useState([
    {
      index: Math.random(),
      value1: '',
      value2: '',
      placeholder1: 'Yemek adını giriniz',
      placeholder2: 'Yemek miktarı giriniz',
    },
  ]);
  const [dinner, setDinner] = useState([
    {
      index: Math.random(),
      value1: '',
      value2: '',
      placeholder1: 'Yemek adını giriniz',
      placeholder2: 'Yemek miktarı giriniz',
    },
  ]);
  //breakfast
  const breakfastHandleChange = (i, text, valueName) => {
    const Newbreakfast = [...breakfast];
    Newbreakfast[i] = {...Newbreakfast[i], [valueName]: text};
    setBreakfast(Newbreakfast);
  };

  const breakfastAddTextInput = () => {
    setBreakfast([
      ...breakfast,
      {
        index: Math.random(),
        value1: '',
        value2: '',
        placeholder1: 'Yemek adını giriniz',
        placeholder2: 'Yemek miktarı giriniz',
      },
    ]);
  };
  const breakfastRemoveRow = index => {
    const filteredItems = breakfast.filter(
      filteredItem => index !== filteredItem,
    );
    setBreakfast([...filteredItems]);
    //Store.removeBreakfast(index)
  };
  const breakfastButton = () => {
    let newbreakfast = [];
    breakfast.map((val, index) => {
      newbreakfast.push({
        foodName: val.value1,
        foodQuantity: val.value2,
        id: val.index,
      });
    });
    //console.log(breakfast)
    Store.addBreakfast(newbreakfast);
  };
  //lunch
  const lunchHandleChange = (i, text, valueName) => {
    const newLunch = [...lunch];
    newLunch[i] = {...newLunch[i], [valueName]: text};
    setLunch(newLunch);
  };

  const lunchAddTextInput = () => {
    setLunch([
      ...lunch,
      {
        index: Math.random(),
        value1: '',
        value2: '',
        placeholder1: 'Yemek adını giriniz',
        placeholder2: 'Yemek miktarı giriniz',
      },
    ]);
  };

  const lunchRemoveRow = index => {
    const filteredItems = lunch.filter(filteredItem => index !== filteredItem);
    setLunch([...filteredItems]);
    //Store.removeBreakfast(index)
  };
  const lunchButton = () => {
    let newlunch = [];
    lunch.map((val, index) => {
      newlunch.push({
        foodName: val.value1,
        foodQuantity: val.value2,
        id: val.index,
      });
    });
    //console.log(breakfast)
    Store.addLunch(newlunch);
  };
  //snack
  const snackHandleChange = (i, text, valueName) => {
    const newSnack = [...snack];
    newSnack[i] = {...newSnack[i], [valueName]: text};
    setSnack(newSnack);
  };

  const snackAddTextInput = () => {
    setSnack([
      ...snack,
      {
        index: Math.random(),
        value1: '',
        value2: '',
        placeholder1: 'Yemek adını giriniz',
        placeholder2: 'Yemek miktarı giriniz',
      },
    ]);
  };
  const snackRemoveRow = index => {
    const filteredItems = snack.filter(filteredItem => index !== filteredItem);
    setSnack([...filteredItems]);
    //Store.removeBreakfast(index)
  };
  const snackButton = () => {
    let newsnack = [];
    snack.map((val, index) => {
      newsnack.push({
        foodName: val.value1,
        foodQuantity: val.value2,
        id: val.index,
      });
    });
    //console.log(breakfast)
    Store.addSnack(newsnack);
  };
  //dinner
  const dinnerHandleChange = (i, text, valueName) => {
    const newDinner = [...dinner];
    newDinner[i] = {...newDinner[i], [valueName]: text};
    setDinner(newDinner);
  };

  const dinnerAddTextInput = () => {
    setDinner([
      ...dinner,
      {
        index: Math.random(),
        value1: '',
        value2: '',
        placeholder1: 'Yemek adını giriniz',
        placeholder2: 'Yemek miktarı giriniz',
      },
    ]);
  };
  const dinnerRemoveRow = index => {
    const filteredItems = dinner.filter(filteredItem => index !== filteredItem);
    setDinner([...filteredItems]);
    Store.removeBreakfast(index)
  };
  const dinnerButton = () => {
    let newdinner = [];
    dinner.map((val, index) => {
      newdinner.push({
        foodName: val.value1,
        foodQuantity: val.value2,
        id: val.index,
      });
    });
    //console.log(breakfast)
    Store.addDinner(newdinner);
  };
  useEffect(() => {
    const getUser = async () => {
      const value = await AsyncStorage.getItem('displayName');
      if (value !== null) {
        setDisplayName(value);
      }
    };
    return getUser();
  },)


  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/breakfast.png')}
        style={{width: '100%', height: 200}}
        resizeMode="cover"
      />

      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <Text
          style={{
            color: colors.blue,
            fontWeight: '500',
            fontSize: 18,
            textAlign: 'center',
            paddingBottom: 10,
          }}>
          Örnek Öğün Listesi
        </Text>
        <View
          style={{
            padding: 10,
            marginBottom: 10,
            borderColor: colors.blue,
            borderWidth: 2,
            borderRadius: 8,
          }}>
          <View
            style={{
              paddingHorizontal: 3,
              paddingBottom: 5,
            }}>
            <Text style={{color: colors.pink, fontWeight: '600', fontSize: 16}}>
              -Kahvaltı-
            </Text>
            <Text style={{color: colors.dark, fontWeight: '400', fontSize: 14}}>
              1 yumurta
            </Text>
            <Text style={{color: colors.dark, fontWeight: '400', fontSize: 14}}>
              1 dilim kepekli ekmek
            </Text>
            <Text style={{color: colors.dark, fontWeight: '400', fontSize: 14}}>
              1 çay bardağı çay
            </Text>
          </View>
          <View style={{paddingHorizontal: 3, paddingBottom: 5}}>
            <Text style={{color: colors.pink, fontWeight: '600', fontSize: 16}}>
              -Öğle Yemeği-
            </Text>
            <Text style={{color: colors.dark, fontWeight: '400', fontSize: 14}}>
              1 kase mercimek çorbası
            </Text>
            <Text style={{color: colors.dark, fontWeight: '400', fontSize: 14}}>
              1 dilim kepekli ekmek
            </Text>
            <Text style={{color: colors.dark, fontWeight: '400', fontSize: 14}}>
              1 kase salata
            </Text>
          </View>
          <View style={{paddingHorizontal: 3, paddingBottom: 5}}>
            <Text style={{color: colors.pink, fontWeight: '600', fontSize: 15}}>
              -Ara Öğün-
            </Text>
            <Text style={{color: colors.dark, fontWeight: '400', fontSize: 14}}>
              1 avuç kuru kayısı
            </Text>
            <Text style={{color: colors.dark, fontWeight: '400', fontSize: 14}}>
              1 fincan türk kahvesi
            </Text>
          </View>
          <View style={{paddingHorizontal: 3, paddingBottom: 5}}>
            <Text style={{color: colors.pink, fontWeight: '600', fontSize: 16}}>
              -Akşam Yemeği-
            </Text>
            <Text style={{color: colors.dark, fontWeight: '400', fontSize: 14}}>
              3 yemek kaşığı pilav
            </Text>
            <Text style={{color: colors.dark, fontWeight: '400', fontSize: 14}}>
              300 gram tavuk pirzola
            </Text>
            <Text style={{color: colors.dark, fontWeight: '400', fontSize: 14}}>
              1 bardak ayran
            </Text>
          </View>
        </View>

      {/*    <Text  ///
          style={{
            fontWeight: '400',
            fontSize: 17,
            textAlign: 'auto',
            paddingBottom: 30,
            color: colors.dark,
          }}>
          Beslenme düzeni oluşturabilmek için öğünlerini aşağıdaki alana
          yazınız.
        </Text> /// 
          <TouchableOpacity onPress={() => setShowFood(!showFood)} style={{ height: 40, backgroundColor: colors.lightBlue, justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600", color: colors.darkBlue }}>Öğün Girmek için Tıklayınız</Text>
    </TouchableOpacity> */}
        {showFood && (
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
                Sabah / Kahvaltı
              </Text>
              {Store.breakfast.map((item, index) => {
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
                        {item.foodQuantity}
                      </Text>
                    </View>
                  </View>
                );
              })}

              <TextInputAdd
                items={breakfast}
                add={breakfastAddTextInput}
                remove={breakfastRemoveRow}
                onChangeText1={breakfastHandleChange}
                onChangeText2={breakfastHandleChange}
                onPress={breakfastButton}
                //onChangeText1={(i, text) => handleChange(i, text, 'value1')}
                //onChangeText2={(i, text) => handleChange(i, text, 'value2')}
              />
            </View>

            <View style={{marginBottom: 20}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: 18,
                  color: colors.dark,
                }}>
                Öğle
              </Text>
              {Store.lunch.map((item, index) => {
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
                        {item.foodQuantity}
                      </Text>
                    </View>
                  </View>
                );
              })}

              <TextInputAdd
                items={lunch}
                add={lunchAddTextInput}
                remove={lunchRemoveRow}
                onChangeText1={lunchHandleChange}
                onChangeText2={lunchHandleChange}
                onPress={lunchButton}
               // onChangeText1={(i, text) => handleChange(i, text, 'value1')}
               // onChangeText2={(i, text) => handleChange(i, text, 'value2')}
              />
            </View>
            <View style={{marginBottom: 20}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: 18,
                  color: colors.dark,
                }}>
                Ara Öğün
              </Text>
              {Store.snack.map((item, index) => {
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
                        {item.foodQuantity}
                      </Text>
                    </View>
                  </View>
                );
              })}
              <TextInputAdd
                items={snack}
                add={snackAddTextInput}
                remove={snackRemoveRow}
                onChangeText1={snackHandleChange}
                onChangeText2={snackHandleChange}
                onPress={snackButton}
              //  onChangeText1={(i, text) => handleChange(i, text, 'value1')}
              //  onChangeText2={(i, text) => handleChange(i, text, 'value2')}
              />
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: 18,
                  color: colors.dark,
                }}>
                Akşam
              </Text>
              {Store.dinner.map((item, index) => {
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
                        {item.foodQuantity}
                      </Text>
                    </View>
                  </View>
                );
              })}
              <TextInputAdd
                items={dinner}
                add={dinnerAddTextInput}
                remove={dinnerRemoveRow}
                onChangeText1={dinnerHandleChange}
                onChangeText2={dinnerHandleChange}
                onPress={dinnerButton}
              //  onChangeText1={(i, text) => handleChange(i, text, 'value1')}
              //  onChangeText2={(i, text) => handleChange(i, text, 'value2')}
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

export default observer(AddNutrition);

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
