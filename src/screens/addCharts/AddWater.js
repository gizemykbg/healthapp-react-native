import React, {useState, useEffect, useRef} from 'react';
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
import {Bar} from 'react-native-progress';
import moment from 'moment';

import GoogleFit, {Scopes} from 'react-native-google-fit';

/* const glass = [
  {label: '1 Bardak', value: '1 bardak'},
  {label: '2 Bardak', value: '2 bardak'},
  {label: '3 Bardak', value: '3 bardak'},
  {label: '4 Bardak', value: '4 bardak'},
  {label: '5 Bardak', value: '5 bardak'},
  {label: '6 Bardak', value: '6 bardak'},
  {label: '7 Bardak', value: '7 bardak'},
  {label: '8 Bardak', value: '8 bardak'},
  {label: '9 Bardak', value: '9 bardak'},
];

const values = [{y: 6}, {y: 8}, {y: 10}, {y: 12}, {y: 8}, {y: 6}, {y: 5}];
const valueFormatter = [
  '30.06.2021',
  '01.07.2021',
  '02.07.2021',
  '03.07.2021',
  '04.07.2021',
  '05.07.2021',
  '06.07.2021',
];
const label = '1 Haftalık Su Tüketimi (Bardak)'; */

const AddWater = props => {
  const [destination, setDestination] = useState(true); //false dersem görüntü true dersem kayıt
  const [destinationShow, setDestinationShow] = useState(false);
  const [water, setWater] = useState('');
  const [waterInp, setWaterInp] = useState('');
  const [zIndex, setZIndex] = useState({
    dropdownA: 5000,
    dropdownB: 4000,
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/water.png')}
        style={{width: '100%', height: 235}}
        resizeMode="cover"
      />
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        {destination ? (
          <ChartDestinationButton
            onPress={() => setDestinationShow(!destinationShow)}
            destinationShow={destinationShow}
            buttonTitle="İçeceğiniz Su Miktarını Mililitre Cinsinden Belirlemek için Tıklayınız"
            placeholder="Örnek: 500"
            destination={destination}
            value={waterInp}
            onChangeText={text => setWaterInp(text)}
            onPressDestination={() => {
              if (parseFloat(waterInp)) {
                const hydrationArray = [
                  {
                    date: moment().valueOf(),
                    waterConsumed: parseFloat(waterInp) / 1000,
                  },
                ];
                GoogleFit.saveHydration(hydrationArray, (err, res) => {
                  if (res) {
                    props.navigation.goBack();
                  } else {
                    alert('Bilinmeyen bir hata oluştu.');
                  }
                  if (err) throw 'Cant save data to the Google Fit';
                });
              } else {
                alert('Lütfen geçerli bir değer giriniz.');
              }
            }}
            bgColor={colors.lightBlue}
            borColor={colors.blue}
            buttonColor={colors.pink}
          />
        ) : (
          <>
            <View style={styles.destinationView}>
              <Text
                style={styles.destinationFinishText}
                numberOfLines={2}
                ellipsizeMode="tail">
                Hedefine Kalan Tüketim : {3000 - waterInp} {/* ?? */}
              </Text>
              <Text
                style={styles.destinationText}
                numberOfLines={1}
                ellipsizeMode="tail">
                Hedefin : 3 Litre
              </Text>
            </View>

            {/*     <ChartDestinationButton
              onPress={() => setDestinationShow(!destinationShow)}
              destinationShow={destinationShow}
              buttonTitle="Hedefiniz Olan Su Miktarını Değiştirmek için Tıklayınız"
              placeholder="Hedef su miktarını değiştir"
              destination={destination}
              mainDestination="9 Bardak"
              bgColor={colors.lightBlue}
              borColor={colors.blue}
              buttonColor={colors.pink}
            /> */}

            <View style={{marginTop: 10, zIndex: 1}}>
              <Text
                style={[
                  styles.exerciseTracking,
                  {fontSize: 16, fontWeight: '500'},
                ]}>
                Su Tüketim Takibi
              </Text>
              <Text
                style={[
                  styles.exerciseTracking,
                  {fontSize: 15, fontWeight: '400'},
                ]}>
                Aşağıdan tükettiğiniz su miktarını ölçüsü bardak olacak şekilde
                seçiniz.
              </Text>
              <View style={{zIndex: 1}}>
                {/* dropdown A */}
                <DropDownPicker
                  //zIndex={zIndex.dropdownA}
                  zIndex={5000}
                  items={glass}
                  defaultValue={water}
                  placeholder="Su Tüketimi"
                  onChangeItem={item => setWater(item.value)}
                  arrowSize={24}
                  arrowColor={colors.dark}
                  //arrowStyle={{ marginTop: -8 }}
                  containerStyle={{height: 50, marginBottom: 20}}
                  placeholderStyle={{
                    fontWeight: '400',
                    textAlign: 'left',
                    color: colors.dark,
                    fontSize: 16,
                  }}
                  style={{
                    backgroundColor: colors.lightBlue,
                    borderWidth: 1,
                    borderRadius: 15,
                    borderColor: colors.white,
                  }}
                  itemStyle={{
                    justifyContent: 'flex-start',
                    fontWeight: '400',
                    color: colors.dark,
                    fontSize: 16,
                  }}
                  labelStyle={{
                    justifyContent: 'flex-start',
                    fontWeight: '400',
                    color: colors.dark,
                    fontSize: 16,
                  }}
                  activeLabelStyle={{
                    color: colors.orange,
                    fontWeight: '600',
                    fontSize: 17,
                  }}
                  dropDownStyle={{
                    backgroundColor: colors.lightBlue,
                    borderWidth: 1,
                    borderColor: colors.white,
                    borderRadius: 15,
                  }}
                />
              </View>

              <Button
                title="Kaydet"
                style={{
                  paddingVertical: 10,
                  marginHorizontal: 80,
                  backgroundColor: colors.pink,
                }}
                onPress={() => alert('Kaydedildi')}
              />
            </View>

            <BarCharts
              values={values}
              label={label}
              valueFormatter={valueFormatter}
              color={processColor(colors.Blue)} //dark
              barShadowColor={processColor(colors.light)}
              highlightColor={processColor(colors.light)}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};
export default AddWater;

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
    paddingRight: 5,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.dark,
  },
  destinationFinishText: {
    flex: 1.5,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.pink,
  },
  exerciseTracking: {
    color: colors.dark,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
