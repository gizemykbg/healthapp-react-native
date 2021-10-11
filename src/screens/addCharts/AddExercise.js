import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  processColor,
} from 'react-native';
import {colors} from '../../styles';
import {ChartDestinationButton, Button, BarCharts} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import {Bar} from 'react-native-progress';
import moment from 'moment';

import GoogleFit, {Scopes} from 'react-native-google-fit';

const label = '1 Günlük Adım Sayıları';

const AddExercise = () => {
  const [destination, setDestination] = useState(false); // hedef için
  const [destinationShow, setDestinationShow] = useState(true); //false

  const [loading, setLoading] = useState(true);

  const [dailyStep, setDailyStep] = useState(0);
  const [values, setValues] = useState([]);
  const [valueFormatter, setValueFormatter] = useState([]);
  const [activity, setActivity] = useState({
    activityName: '',
    activityTime: '',
  });

  useEffect(() => {
    setLoading(true);
    GoogleFit.getWeeklySteps(moment().toDate(), 0) //hafta başını ayarladığımız ksım
      .then(res => {
        res.forEach(item => {
          if (item?.steps?.length > 0) {
            //  setDailyStep(item?.steps[0].value);

            setDailyStep(item.steps[item.steps.length - 1].value);
            setValues([
              {y: item.steps[0]?.value ? item.steps[0]?.value : 0},
              {y: item.steps[1]?.value ? item.steps[1]?.value : 0},
              {y: item.steps[2]?.value ? item.steps[2]?.value : 0},
              {y: item.steps[3]?.value ? item.steps[3]?.value : 0},
              {y: item.steps[4]?.value ? item.steps[4]?.value : 0},
              {y: item.steps[5]?.value ? item.steps[5]?.value : 0},
              {y: item.steps[6]?.value ? item.steps[6]?.value : 0},
            ]);
            console.log(
              moment(item.steps[0]?.date).add(1, 'days').format('MM[-]DD'), //2
            );

            setValueFormatter([
              moment(item.steps[0]?.date).format('MM[-]DD'),
              moment(item.steps[0]?.date).add(1, 'days').format('MM[-]DD'),
              moment(item.steps[0]?.date).add(2, 'days').format('MM[-]DD'),
              moment(item.steps[0]?.date).add(3, 'days').format('MM[-]DD'),
              moment(item.steps[0]?.date).add(4, 'days').format('MM[-]DD'),
              moment(item.steps[0]?.date).add(5, 'days').format('MM[-]DD'),
              moment(item.steps[0]?.date).add(6, 'days').format('MM[-]DD'),
            ]);

            /*  item.steps[0]?.date
              ? moment(item.steps[0]?.date).format('MM[-]DD')
              : 0,
            item.steps[1]?.date
              ? moment(item.steps[1]?.date).format('MM[-]DD')
              : moment(item.steps[0]?.date).add(1, 'days').format('MM[-]DD'),
            item.steps[2]?.date
              ? moment(item.steps[2]?.date).format('MM[-]DD')?.date
              : moment(item.steps[0]?.date).add(2, 'days').format('MM[-]DD'),
            item.steps[3]?.date
              ? moment(item.steps[3]?.date).format('MM[-]DD')?.date
              : moment(item.steps[0]?.date).add(3, 'days').format('MM[-]DD'),
            item.steps[4]?.date
              ? moment(item.steps[4]?.date).format('MM[-]DD')
              : moment(item.steps[0]?.date).add(4, 'days').format('MM[-]DD'),
            item.steps[5]?.date
              ? moment(item.steps[5]?.date).format(']MM[-]DD')
              : moment(item.steps[0]?.date).add(5, 'days').format('MM[-]DD'),
            item.steps[6]?.date
              ? moment(item.steps[6]?.date).format('MM[-]DD')
              : moment(item.steps[0]?.date).add(6, 'days').format('MM[-]DD'), */
          }
        });
      })
      .catch(err => {
        console.log(err);
      });

    // Belirli bir milisaniye sonra bir fonksiyonu sadece 1 kez çağırmaya yarar.
    setTimeout(() => {
      setLoading(false);

      console.log(values);
      console.log(valueFormatter);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/exercise.png')}
        style={{width: '100%', height: 200}}
        resizeMode="cover"
      />
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        {destination ? (
          <ChartDestinationButton
            onPress={() => setDestinationShow(!destinationShow)}
            destinationShow={destinationShow}
            buttonTitle="Egzersiz Hedefi Belirlemek için Tıklayınız"
            placeholder="Örnek: 2 Saat"
            destination={destination}
            onPressDestination={() => alert('tebrikler')}
            bgColor={colors.lightYellow}
            borColor={colors.yellow}
            buttonColor={colors.orange}
          />
        ) : (
          <>
            <View style={styles.destinationView}>
              <Text style={styles.destinationFinishText}>
                Hedefine Kalan Adım: {10000 - dailyStep}
              </Text>
              <Text
                style={styles.destinationText}
                numberOfLines={1}
                ellipsizeMode="tail">
                Hedefin: 10000 Adım
              </Text>
            </View>
            {!loading && values.length > 0 && (
              <BarCharts
                values={values}
                label={label}
                valueFormatter={valueFormatter}
                color={processColor(colors.yellow)}
                barShadowColor={processColor(colors.yellow)}
                highlightColor={processColor(colors.orange)}
              />
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AddExercise;

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
    flex: 1.5,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.purple,
  },
  destinationFinishText: {
    flex: 1.5,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.darkBlue,
  },
  exerciseTracking: {
    color: colors.dark,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
