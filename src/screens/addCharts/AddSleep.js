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
/* const sleep = [
  {label: '1 Saat', value: '1 saat'},
  {label: '2 Saat', value: '2 saat'},
  {label: '3 Saat', value: '3 saat'},
  {label: '4 Saat', value: '4 saat'},
  {label: '5 Saat', value: '5 saat'},
  {label: '6 Saat', value: '6 saat'},
  {label: '7 Saat', value: '7 saat'},
  {label: '8 Saat', value: '8 saat'},
  {label: '9 Saat', value: '9 saat'},
]; */

const label = '1 Haftalık Uyku Süreleri';

const AddSleep = props => {
  const [destination, setDestination] = useState(false); //False
  const [destinationShow, setDestinationShow] = useState(true);
  const [sleepTime, setSleepTime] = useState(' ');
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState(true);
  const [zIndex, setZIndex] = useState({
    dropdownA: 5000,
    dropdownB: 4000,
  });

  useEffect(() => {
    let values = [];
    const opt1 = {
      startDate: moment().subtract(1, 'days').toDate(), //1
      endDate: moment().add(1, 'days').toDate(),
    };
    GoogleFit.getSleepSamples(opt1).then(res => {
      let sleep = 0;
      res.forEach(item => {
        const endDate = moment(item.endDate);
        const startDate = moment(item.startDate);
        var duration = moment.duration(endDate.diff(startDate));
        var hours = duration.asHours();
        sleep += hours;
      });
      values[6] = {y: Math.round(sleep * 10) / 10};
      console.log(sleep);
    });
    const opt2 = {
      startDate: moment().subtract(2, 'days').toDate(),
      endDate: moment().subtract(1, 'days').toDate(),
    };
    GoogleFit.getSleepSamples(opt2).then(res => {
      let sleep = 0;
      res.forEach(item => {
        const endDate = moment(item.endDate);
        const startDate = moment(item.startDate);
        var duration = moment.duration(endDate.diff(startDate));
        var hours = duration.asHours();
        sleep += hours;
      });
      values[5] = {y: Math.round(sleep * 10) / 10};
      console.log(sleep);
    });
    const opt3 = {
      startDate: moment().subtract(3, 'days').toDate(),
      endDate: moment().subtract(2, 'days').toDate(),
    };
    GoogleFit.getSleepSamples(opt3).then(res => {
      let sleep = 0;
      res.forEach(item => {
        const endDate = moment(item.endDate);
        const startDate = moment(item.startDate);
        var duration = moment.duration(endDate.diff(startDate));
        var hours = duration.asHours();
        sleep += hours;
      });
      values[4] = {y: Math.round(sleep * 10) / 10};
      console.log(sleep);
    });
    const opt4 = {
      startDate: moment().subtract(4, 'days').toDate(),
      endDate: moment().subtract(3, 'days').toDate(),
    };
    GoogleFit.getSleepSamples(opt4).then(res => {
      let sleep = 0;
      res.forEach(item => {
        const endDate = moment(item.endDate);
        const startDate = moment(item.startDate);
        var duration = moment.duration(endDate.diff(startDate));
        var hours = duration.asHours();
        sleep += hours;
      });
      values[3] = {y: Math.round(sleep * 10) / 10};
      console.log(sleep);
    });
    const opt5 = {
      startDate: moment().subtract(5, 'days').toDate(),
      endDate: moment().subtract(4, 'days').toDate(),
    };
    GoogleFit.getSleepSamples(opt5).then(res => {
      let sleep = 0;
      res.forEach(item => {
        const endDate = moment(item.endDate);
        const startDate = moment(item.startDate);
        var duration = moment.duration(endDate.diff(startDate));
        var hours = duration.asHours();
        sleep += hours;
      });
      values[2] = {y: Math.round(sleep * 10) / 10};
      console.log(sleep);
    });
    const opt6 = {
      startDate: moment().subtract(6, 'days').toDate(),
      endDate: moment().subtract(5, 'days').toDate(),
    };
    GoogleFit.getSleepSamples(opt6).then(res => {
      let sleep = 0;
      res.forEach(item => {
        const endDate = moment(item.endDate);
        const startDate = moment(item.startDate);
        var duration = moment.duration(endDate.diff(startDate));
        var hours = duration.asHours();
        sleep += hours;
      });
      values[1] = {y: Math.round(sleep * 10) / 10};
      console.log(sleep);
    });
    const opt7 = {
      startDate: moment().subtract(7, 'days').toDate(),
      endDate: moment().subtract(6, 'days').toDate(),
    };
    GoogleFit.getSleepSamples(opt7).then(res => {
      let sleep = 0;
      res.forEach(item => {
        const endDate = moment(item.endDate);
        const startDate = moment(item.startDate);
        var duration = moment.duration(endDate.diff(startDate));
        var hours = duration.asHours();
        sleep += hours;
      });

      values[0] = {y: Math.round(sleep * 10) / 10};
      console.log(sleep);

      setTimeout(() => {
        setLoading(false);
        setValues(values);
      }, 1000);
    });
  }, []);
  const valueFormatter = [
    moment().subtract(6, 'days').format('DD[/]MM'),
    moment().subtract(5, 'days').format('DD[/]MM'),
    moment().subtract(4, 'days').format('DD[/]MM'),
    moment().subtract(3, 'days').format('DD[/]MM'),
    moment().subtract(2, 'days').format('DD[/]MM'),
    moment().subtract(1, 'days').format('DD[/]MM'),
    moment().format('DD[/]MM'),
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/sleep.png')}
        style={{width: '100%', height: 200}}
        resizeMode="cover"
      />
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        {destination ? (
          <ChartDestinationButton
            onPress={() => setDestinationShow(!destinationShow)}
            destinationShow={destinationShow}
            buttonTitle="Uyku Süreni Belirlemek için Tıklayınız"
            placeholder="Örnek: 9 Saat"
            destination={destination}
            onPressDestination={() => alert('Kaydedildi')}
            bgColor={colors.lightLilac}
            borColor={colors.lilac}
            buttonColor={colors.light}
          />
        ) : (
          <>
            <View style={styles.destinationView}>
              <Text style={styles.destinationFinishText}>
                Hedefine Kalan Süre :
                {8 - (values[values.length] ? values[values.length] : 0)} Saat
                {/* {8 - (values[values.length] ? values[values.length] : 0)} Saat */}
              </Text>
              <Text
                style={styles.destinationText}
                numberOfLines={1}
                ellipsizeMode="tail">
                Hedefin : 8 Saat
              </Text>
            </View>
            {/*   <ChartDestinationButton  
              onPress={() => setDestinationShow(!destinationShow)}
              destinationShow={destinationShow}
              buttonTitle="Uyku Süreni Değiştirmek için Tıklayınız"
              placeholder="Uyku süreni değiştir"
              destination={destination}
              mainDestination="9 saat"
              bgColor={colors.lightLilac}
              borColor={colors.lilac}
              buttonColor={colors.light}
            />
              <View style={{marginTop: 10, zIndex: 1}}>
               <Text
                style={[
                  styles.exerciseTracking,
                  {fontSize: 16, fontWeight: '500'},
                ]}>
                Uyku Takibi
              </Text>
              <Text
                style={[
                  styles.exerciseTracking,
                  {fontSize: 15, fontWeight: '400'},
                ]}>
                Aşağıdan uyku süresini seçiniz.
              </Text> 
              <View style={{zIndex: 1}}>
                
                <DropDownPicker
                  zIndex={zIndex.dropdownA}
                  items={sleep}
                  defaultValue={sleepTime}
                  placeholder="Uyku Süresi"
                  onChangeItem={item => setSleepTime(item.value)}
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
                    backgroundColor: colors.lightPurple,
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
                    color: colors.yellow,
                    fontWeight: '600',
                    fontSize: 17,
                  }}
                  dropDownStyle={{
                    backgroundColor: colors.lightPurple,
                    borderWidth: 1,
                    borderColor: colors.white,
                    borderRadius: 15,
                  }}
                />
              </View>
              <Button
                title="Kaydet"
                style={{paddingVertical: 10, marginHorizontal: 80}}
                onPress={() => alert('Kaydedildi')}
              />
                </View> */}

            {!loading && values.length > 0 && (
              <>
                <BarCharts
                  values={values}
                  label={label}
                  valueFormatter={valueFormatter}
                  color={processColor(colors.lilac)}
                  barShadowColor={processColor(colors.white)}
                  highlightColor={processColor(colors.white)}
                />
                {console.log(values)}
              </>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AddSleep;

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
