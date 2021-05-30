import React, { useState, useEffect, Fragment } from 'react'
import { View, Text, ScrollView, StyleSheet, Image, Flatlist, Dimensions } from 'react-native'
import { observer } from 'mobx-react'
import Store from '../../store/store';
import { colors } from '../../styles'
import Icon from 'react-native-vector-icons/Ionicons'
import Emoji from 'react-native-emoji';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'


import { WaterChart, SleepChart, ExerciseChart, NutritionChart, TestChart} from '../../components'

import axios from 'axios'

const Dashboard = ({navigation}) => {
    const [date, setDate] = useState('');
    const [currentDate, setCurrentDate] = useState('');
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


    const title = date === 'am' ? 'Mutlu Sabahlar,' : 'Mutlu Akşamlar,'
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
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
                       <Emoji name="newspaper" size={27} color={colors.light} /> 
                    </View>
                </View>

                <View style={styles.textMain}>
                    <Text style={styles.text} >{`${title} mergizem`}</Text>
                    <Emoji name={date === 'am' ? 'sunrise' : 'moon'} style={{ fontSize: 30 }}  />
                </View>
            </View>

            <View style={styles.main}>
                <View style={styles.chartsMain}>
                    <WaterChart onPress={() => navigation.navigate('Charts',{screen:'AddWater'})}/>
                    <SleepChart onPress={() => navigation.navigate('Charts',{screen:'AddSleep'})} />
                </View>
                <View style={styles.chartsMain}>
                    <NutritionChart onPress={() => navigation.navigate('Charts',{screen:'AddNutrition'})}/>
                    <ExerciseChart onPress={() => navigation.navigate('Charts',{screen:'AddExercise'})}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default observer(Dashboard);
const height = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
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
        justifyContent: 'space-evenly'
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
        alignItems: 'center'
    },
    dateMain: {
        backgroundColor: colors.lilac,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateText: {
        fontSize: 18,
        color: colors.light,
        fontWeight: "500",
        paddingRight: 10
    },
    textMain: {
        marginLeft: 23,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        fontSize: 22,
        paddingHorizontal: 10,
        fontWeight: "500"
    }
})












//import ParallaxScrollView from 'react-native-parallax-scroll-view';
{/* <View style={styles.container}>
            
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
    
    
    
    
            */}