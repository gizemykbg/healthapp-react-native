import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import * as Progress from 'react-native-progress';
import { observer } from 'mobx-react'
import Store from '../../store/store';
import { colors } from '../../styles'
import Emoji from 'react-native-emoji';
const WaterChart = ({onPress}) => {
    const a = '1200 ml'
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <View>
                <View style={styles.titleMain}>
                    <View>
                        <Text style={styles.text}>Su Kullanımı</Text>
                        <Text>Today 13.25</Text>
                    </View>
                    <Emoji name="sweat_drops" style={{fontSize:30}} />
                </View>
            </View>
            <View style={styles.circleMain}>
                <Progress.Circle
                    animated={true}
                    progress={0.6}
                    size={120}
                    thickness={5}
                    color={colors.darkBlue}
                    borderWidth={3}
                    borderColor={colors.lightBlue}
                    unfilledColor={colors.lightBlue}
                    showsText={true}
                    formatText={() => a}
                    strokeCap="round"
                    textStyle={{ color: colors.dark, fontWeight: "500", fontSize: 19 }}
                />
            </View>
        </TouchableOpacity>
    )
}

export default observer(WaterChart);
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 150,
        backgroundColor: '#F5FCFF',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 25,
        elevation: 10,
        justifyContent: 'space-between',
        marginHorizontal:20,
        marginBottom:20,
        marginTop:-30

    },
    circleMain: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleMain:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:15,
        paddingHorizontal:5
    },
    text: {
        fontWeight:"600",
        fontSize:16,
        color:colors.dark
    },
    timeText:{
        fontWeight:"400",
        fontSize:14,
        color:colors.dark
    }

})
