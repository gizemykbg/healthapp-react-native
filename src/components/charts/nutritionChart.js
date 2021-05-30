import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    TouchableOpacity
} from 'react-native';

import { observer } from 'mobx-react'
import Store from '../../store/store';
import { colors } from '../../styles'
import Emoji from 'react-native-emoji';
import Icon from 'react-native-vector-icons/Ionicons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'


const NutritionChart = ({onPress}) => {
    const [rate, setRate] = useState()
    const a = '1200 ml'
    var size = [];

    useEffect(() => {
        rateChange()
        setRate(Store.rate)
    }, [Store.rate])

    const rateChange = () => {
        for (let index = 0; index < 5; index++) {
            let iconName;
            size.push(
         <Icon name={rate > index ? 'star' : 'star-outline'} size={25} color={colors.green}/>
            )
        }
        return size;
    }
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={styles.container}>
            <View>
                <View style={styles.titleMain}>
                    <View>
                        <Text style={styles.text}>Beslenme Puanı</Text>
                        <Text>Today 13.25</Text>
                    </View>
                    <Emoji name="avocado" style={{ fontSize: 30 }} />
                </View>
            </View>
            <View style={styles.circleMain}>
                {rateChange()}
            </View>
        </TouchableOpacity>
    )
}

export default observer(NutritionChart);
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
    container: {
        height: 160,
        //width: Platform.Android === 'android' ? 150 :160, 
        backgroundColor: colors.lightGreen,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 25,
        elevation: 10,
        justifyContent: 'space-between',
        marginHorizontal:20,
        marginBottom:20,
        marginTop:-50
    },
    circleMain: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    titleMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
        paddingHorizontal: 5
    },
    text: {
        fontWeight: "600",
        fontSize: 16,
        color: colors.dark
    },
    timeText: {
        fontWeight: "400",
        fontSize: 14,
        color: colors.dark
    }

})
