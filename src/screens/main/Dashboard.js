import React, {useState, useEffect, Fragment} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Flatlist,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import {observer} from 'mobx-react';
import Store from '../../store/store';
import {colors} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Emoji from 'react-native-emoji';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import Fitness from '@ovalmoney/react-native-fitness';
import GoogleFit, {Scopes} from 'react-native-google-fit';
import {
  WaterChart,
  SleepChart,
  ExerciseChart,
  NutritionChart,
  TestChart,
} from '../../components';
import {useIsFocused} from '@react-navigation/native';

const Dashboard = ({navigation}) => {
  const [date, setDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [sleepHours, setSleepHours] = useState(0);
  const [water, setWater] = useState(0);
  const [calories, setCalories] = useState(0);
  const [dailyStep, setDailyStep] = useState(0);
  const [displayName, setDisplayName] = useState('');

  const isFocused = useIsFocused();
  useEffect(() => {
    /* axios.get('http://localhost:3000/api/getDays/60845d2edaa04436085c435f')
            .then(response => {
                console.log(response.data());
            })
            .catch(error => {
                console.log(error);
            }); */

    var date = moment().format(''); //a
    var currentdate = moment().format('LL'); //may 1, 2021
    setDate(date);
    setCurrentDate(currentdate);
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const value = await AsyncStorage.getItem('displayName');
      if (value !== null) {
        setDisplayName(value);
      }
    };
    return getUser();
  }, [isFocused]);

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
        const today = moment();
        console.log(today.toDate());
        if (authResult.success) {
          const opt = {
            startDate: moment().subtract(2, 'days').toDate(),
            endDate: moment().add(1, 'days').toDate(),
          };
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
          GoogleFit.getHydrationSamples(opt).then(res => {
            let waterConsumed = 0;
            res.forEach(item => {
              waterConsumed += parseFloat(item.waterConsumed);
            });
            setWater(waterConsumed);
          });
          GoogleFit.getDailySteps(moment().toDate()).then(res => {
            res.forEach(item => {
              if (item?.steps?.length > 0) {
                setDailyStep(item?.steps[0].value);
              }
            });
          });
        } else {
          console.log('AUTH_DENIED', authResult.message);
        }
        const optCalory = {
          startDate: moment().subtract(2, 'days').toDate(),
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
          console.log(calorie);
        });
      })
      .catch(err => {
        console.log(err);
        console.log('AUTH_ERROR');
      });
  }, [isFocused]);
  const title = date === 'am' ? 'Mutlu Sabahlar,' : 'Mutlu Akşamlar,';
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.headerMain}>
          <View style={styles.profil}>
            <Image
              source={require('../../assets/profile.png')}
              resizeMode="contain"
              style={{width: 53, height: 53}}
            />
          </View>

          <View style={styles.dateMain}>
            <Text style={styles.dateText}>{currentDate}</Text>
            <Emoji name="newspaper" size={27} color={colors.light} />
          </View>
        </View>

        <View style={styles.textMain}>
          <Text style={styles.text}>{`${title} ${displayName} `}</Text>
          <Emoji
            name={date === 'am' ? 'sunrise' : 'moon'}
            style={{fontSize: 30}}
          />
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.chartsMain}>
          <WaterChart
            water={water ? water : 0}
            onPress={() => navigation.navigate('Charts', {screen: 'AddWater'})}
          />
          <SleepChart
            hour={sleepHours ? Math.round(sleepHours * 10) / 10 : 0}
            onPress={() => navigation.navigate('Charts', {screen: 'AddSleep'})}
          />
        </View>
        <View style={styles.chartsMain}>
          <NutritionChart
            calorie={calories ? Math.round(calories * 10) / 10 : 0}
            onPress={() =>
              navigation.navigate('Charts', {screen: 'AddNutrition'})
            }
          />
          <ExerciseChart
            dailyStep={dailyStep ? dailyStep : 0}
            onPress={() =>
              navigation.navigate('Charts', {screen: 'AddExercise'})
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default observer(Dashboard);
const height = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  main: {
    marginHorizontal: 23,
  },
  header: {
    backgroundColor: colors.light,
    height: 180,
  },
  chartsMain: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: 23,
    marginTop: 20,
  },
  profil: {
    height: 70,
    width: 70,
    borderRadius: 35,
    // borderWidth: 3,
    // borderColor: colors.orange,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateMain: {
    backgroundColor: colors.lilac,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    color: colors.light,
    fontWeight: '500',
    paddingRight: 10,
  },
  textMain: {
    marginLeft: 23,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 22,
    paddingHorizontal: 10,
    fontWeight: '500',
  },
});

//import ParallaxScrollView from 'react-native-parallax-scroll-view';
{
  /* <View style={styles.container}>
            
            <View style={styles.headerMain}>
                
                <View style={styles.profil}>
                    <Image
                        source={require('../../assets/profile.png')}
                        resizeMode="contain"
                        style={{ width: 53, height: 53 }}
                    />
                </View>
                <View style={styles.text}>
                    <Text >İyi Günler Beyza</Text>
                </View>
            </View>
            <View style={styles.main}>

            </View>
        </View> 
    *
      <ParallaxScrollView
            backgroundColor={colors.light}
            contentBackgroundColor={colors.white}
            parallaxHeaderHeight={200}
            renderForeground={() => (
                <Fragment>
                    <View style={styles.headerMain}>
                       
                        <View style={styles.profil}>
                            <Image
                                source={require('../../assets/profile.png')}
                                resizeMode="contain"
                                style={{ width: 53, height: 53 }}
                            />
                        </View>
                        
                        <View style={styles.dateMain}>
                            <Text style={styles.dateText} >{currentDate}</Text>
                            <Icon name="calendar" size={24} color={colors.light} />
                        </View>
                    </View>
                    
                    <View style={styles.textMain}>
                        <Text style={styles.text} >{`${title} Gizem`}</Text>
                        <Icon name={date === 'am' ? 'sunny' : 'moon'} size={24} color={date === 'am' ? colors.yellow : colors.dark} />
                    </View>


                </Fragment>
            )}>
            <View >
                <Text>Scroll me</Text>
            </View>
        </ParallaxScrollView>
    
    
    
    
            */
}
