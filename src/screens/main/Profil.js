import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, AsyncStorage} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../styles';
import Emoji from 'react-native-emoji';
import GoogleFit, {Scopes} from 'react-native-google-fit';

import moment from 'moment';
import {useIsFocused} from '@react-navigation/native';

const Profil = () => {
  const isFocused = useIsFocused();
  const [water, setWater] = useState(0);
  const [calories, setCalories] = useState(0);
  const [dailyStep, setDailyStep] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);

  const [displayName, setDisplayName] = useState('');
  const [weight, setWeight] = useState(0);

  const [height, setHeight] = useState(0);
  useEffect(() => {
    const options = {
      scopes: [
        Scopes.FITNESS_ACTIVITY_READ,
        Scopes.FITNESS_ACTIVITY_WRITE,
        Scopes.FITNESS_BODY_READ,
        Scopes.FITNESS_BODY_WRITE,
        Scopes.FITNESS_SLEEP_READ,
        Scopes.FITNESS_NUTRITION_WRITE,
        Scopes.FITNESS_NUTRITION_READ,
      ],
    };
    GoogleFit.authorize(options)
      .then(authResult => {
        if (authResult.success) {
          const opt = {
            startDate: moment().subtract(1, 'days').toDate(),
            endDate: moment().add(1, 'days').toDate(),
          };
          GoogleFit.getHydrationSamples(opt).then(res => {
            let waterConsumed = 0;
            res.forEach(item => {
              waterConsumed += parseFloat(item.waterConsumed);
            });
            setWater(waterConsumed);
          });
          const optCalory = {
            startDate: moment().subtract(1, 'days').toDate(),
            endDate: moment().add(1, 'days').toDate(),
            basalCalculation: false, // optional, to calculate or not basalAVG over the week
            bucketUnit: 'DAY', // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
            bucketInterval: 1, // optional - default 1.
          };

          GoogleFit.getDailyCalorieSamples(optCalory).then(res => {
            let calorie = 0;
            res.forEach(item => {
              calorie += parseFloat(item.calorie);
            });
            setCalories(calorie);
          });
          GoogleFit.getDailySteps(moment().toDate()).then(res => {
            res.forEach(item => {
              if (item?.steps?.length > 0) {
                setDailyStep(item?.steps[0].value);
              }
            });
          });
          GoogleFit.getSleepSamples(opt).then(res => {
            let sleep = 0;
            res.forEach(item => {
              const endDate = moment(item.endDate);
              const startDate = moment(item.startDate);
              var duration = moment.duration(endDate.diff(startDate));
              var hours = duration.asHours();
              sleep += hours;
            });
            setSleepHours(sleep);
          });
          const optWeight = {
            startDate: moment().subtract(1, 'years').toDate(),
            endDate: moment().add(1, 'days').toDate(),
          };
          GoogleFit.getWeightSamples(optWeight).then(res => {
            if (res.length > 0) {
              setWeight(res[res.length - 1].value);
            }
          });
          GoogleFit.getHeightSamples(optWeight).then(res => {
            console.log(res);
            if (res.length > 0) {
              console.log(res);
              setHeight(res[res.length - 1].value);
            }
          });
        }
      })
      .catch(err => {
        console.log(err);
        console.log('AUTH_ERROR');
      });
  }, [isFocused]);
  useEffect(() => {
    const getUser = async () => {
      const value = await AsyncStorage.getItem('displayName');
      if (value !== null) {
        setDisplayName(value);
      }
    };
    return getUser();
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              borderWidth: 5,
              marginBottom: 20,
              height: 90,
              width: 90,
              borderRadius: 45,
              borderColor: colors.blue,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.light,
            }}>
            <Image
              source={require('../../assets/profile.png')}
              resizeMode="contain"
              style={{width: 60, height: 60}}
            />
          </View>
          <Text
            style={{fontWeight: '500', fontSize: 18, color: colors.darkBlue}}>
            {displayName}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View
            style={{
              backgroundColor: colors.lightLilac,
              padding: 20,
              borderRadius: 20,
            }}>
            <Text style={{fontWeight: '500', fontSize: 15, color: colors.dark}}>
              Boy: {Math.round(height * 100) / 100}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: colors.green2,
              padding: 20,
              borderRadius: 20,
            }}>
            <Text style={{fontWeight: '500', fontSize: 15, color: colors.dark}}>
              Kilo: {weight}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView style={{marginTop: 60, marginHorizontal: 23}}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.lightBlue,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}>
          <Text style={{flex: 3, fontWeight: '500', fontSize: 16}}>
            Su (Litre)
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '500', fontSize: 16}}>
              {Math.round(water)}
            </Text>
            <Emoji name="sweat_drops" style={{fontSize: 30}} />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: colors.lightGreen,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}>
          <Text style={{flex: 3, fontWeight: '500', fontSize: 16}}>
            Alınan Kalori (cal)
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '500', fontSize: 16}}>
              {Math.round(calories)}
            </Text>
            <Emoji name="avocado" style={{fontSize: 30}} />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: colors.lightYellow,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}>
          <Text style={{flex: 3, fontWeight: '500', fontSize: 16}}>
            Günlük Adım
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '500', fontSize: 16}}>{dailyStep}</Text>
            <Emoji name="weight_lifter" style={{fontSize: 30}} />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: colors.lightLilac,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}>
          <Text style={{flex: 3, fontWeight: '500', fontSize: 16}}>
            Uyku (Süre)
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '500', fontSize: 16}}>
              {Math.round(sleepHours * 10) / 10}
            </Text>
            <Emoji name="sleeping" style={{fontSize: 30}} />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: colors.light,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}>
          <Text style={{flex: 3, fontWeight: '500', fontSize: 16}}>
            Hastalık Testler
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '500', fontSize: 16}}>Girilmedi</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.light,
    paddingTop: 20,
    justifyContent: 'flex-start',
    height: 200,
  },
});
