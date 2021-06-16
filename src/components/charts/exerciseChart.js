import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import * as Progress from 'react-native-progress';
import {observer} from 'mobx-react';
import Store from '../../store/store';
import {colors} from '../../styles';
import Emoji from 'react-native-emoji';
import moment from 'moment';

const ExerciseChart = ({onPress, dailyStep}) => {
  const a = dailyStep + ' adım';
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <View style={styles.titleMain}>
          <View>
            <Text style={styles.text}>Günlük Adım</Text>
            <Text>{'Today ' + moment().format('MM[.]DD')}</Text>
          </View>
          <Emoji name="weight_lifter" style={{fontSize: 30}} />
        </View>
      </View>
      <View style={styles.circleMain}>
        <Progress.Circle
          animated={true}
          progress={dailyStep / 10000}
          size={120}
          thickness={5}
          color={colors.orange}
          borderWidth={3}
          borderColor={colors.yellow}
          unfilledColor={colors.yellow}
          showsText={true}
          formatText={() => a}
          strokeCap="round"
          textStyle={{color: colors.dark, fontWeight: '500', fontSize: 19}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default observer(ExerciseChart);
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 150,
    backgroundColor: colors.lightYellow,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 25,
    elevation: 10,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 30,
  },
  circleMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    paddingHorizontal: 5,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.dark,
  },
  timeText: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.dark,
  },
});
