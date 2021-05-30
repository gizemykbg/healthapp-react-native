import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput ,processColor} from 'react-native'
import { colors } from '../../styles'
import { ChartDestinationButton, Button, BarCharts } from '../../components'
import DropDownPicker from 'react-native-dropdown-picker';
import { Bar } from 'react-native-progress';
import axios from 'axios'


const exercise = [
    { label: 'Plank', value: 'Plank' },
    { label: 'Yüzme', value: 'Yüzme' },
    { label: 'Koşu', value: 'Koşu' },
    { label: 'Bisiklet Sürme', value: 'Bisiklet Sürme' },
    { label: 'Şınav', value: 'Şınav' },
    { label: 'Lunge', value: 'Lunge' },
    { label: 'Squat', value: 'Squat' },
    { label: 'Mekik', value: 'Mekik' },
    { label: 'Isınma', value: 'Isınma' },
    { label: 'İp Atlama', value: 'İp Atlama' },
]

const exerciseTime = [
    { label: '5 Dakika', value: '5 Dakika' },
    { label: '10 Dakika', value: '10 Dakika' },
    { label: '15 Dakika', value: '15 Dakika' },
    { label: '20 Dakika', value: '2O Dakika' },
    { label: '25 Dakika', value: '25 Dakika' },
    { label: '30 Dakika', value: '30 Dakika' },
    { label: '35 Dakika', value: '35 Dakika' },
    { label: '40 Dakika', value: '40 Dakika' },
    { label: '45 Dakika', value: '45 Dakika' },
    { label: '50 Dakika', value: '50 Dakika' },
    { label: '55 Dakika', value: '55 Dakika' },
    { label: '1 Saat', value: '1 Saat' },
]

const values = [{ y: 50 }, { y: 45 }, { y: 45 }, { y: 40 }, { y: 55 }, { y: 55 }, { y: 45 }]
const valueFormatter = ['01.04.2021', '02.04.2021', '03.04.2021', '04.04.2021', '05.04.2021', '06.04.2021', '07.04.2021']
const label = '1 Haftalık Egzersiz Süreleri'


const AddExercise = () => {
  
    const [destination, setDestination] = useState(false);
    const [destinationShow, setDestinationShow] = useState(false)
    const [activity, setActivity] = useState({
        activityName: '',
        activityTime: ''
    })
    const [zIndex, setZIndex] = useState({
        dropdownA :5000,
        dropdownB:4000,
    })
    const setValue = valueObj => {
        setActivity(activity => ({ ...activity, ...valueObj }));
    };


    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/exercise.png')}
                style={{ width: '100%', height: 200 }}
                resizeMode="cover"
            />
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                {
                    destination ?
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
                        :
                        <>
                            <View style={styles.destinationView}>
                                <Text style={styles.destinationFinishText}>Hedefine Kalan Süre : 1 Saat</Text>
                                <Text style={styles.destinationText} numberOfLines={1} ellipsizeMode="tail">Hedefin : 5 Saat</Text>
                            </View>
                            <ChartDestinationButton
                                onPress={() => setDestinationShow(!destinationShow)}
                                destinationShow={destinationShow}
                                buttonTitle="Egzersiz Hedefini Değiştirmek için Tıklayınız"
                                placeholder="Egzersiz hedefini değiştir"
                                destination={destination}
                                mainDestination="5 saat"
                                bgColor={colors.lightYellow}
                                borColor={colors.yellow}
                                buttonColor={colors.orange}
                            />
                            <View style={{ marginTop: 10, zIndex: 1 }}>
                                <Text style={[styles.exerciseTracking, { fontSize: 16, fontWeight: "500" }]}>Egzersiz Takibi</Text>
                                <Text style={[styles.exerciseTracking, { fontSize: 15, fontWeight: "400" }]}>Aşağıdan bir aktivite ve aktivetin süresini seçiniz.</Text>
                                <View style={{ zIndex: 1, }}>
                                    {/* dropdown A */}
                                    <DropDownPicker
                                        zIndex={zIndex.dropdownA}
                                        items={exercise}
                                        defaultValue={activity.activityName}
                                        placeholder="Activite Seçin"
                                        onChangeItem={item => setValue({ activityName: item.value })}
                                        arrowSize={24}
                                        arrowColor={colors.dark}
                                        //arrowStyle={{ marginTop: -8 }}
                                        containerStyle={{ height: 50, marginBottom: 20, }}
                                        placeholderStyle={{
                                            fontWeight: "400",
                                            textAlign: 'left',
                                            color: colors.dark,
                                            fontSize: 16,
                                        }}
                                        style={{ backgroundColor: colors.orange, borderWidth: 1, borderRadius: 15, borderColor: colors.white }}
                                        itemStyle={{
                                            justifyContent: 'flex-start',
                                            fontWeight: "400",
                                            color: colors.dark,
                                            fontSize: 16,
                                        }}
                                        labelStyle={{
                                            justifyContent: 'flex-start',
                                            fontWeight: "400",
                                            color: colors.dark,
                                            fontSize: 16,

                                        }}
                                        activeLabelStyle={{ color: colors.yellow, fontWeight: "600", fontSize: 17 }}
                                        dropDownStyle={{ backgroundColor: colors.orange, borderWidth: 1, borderColor: colors.white, borderRadius: 15 }}
                                    />
                                    {/* dropdown B */}
                                    <DropDownPicker
                                        onOpen={() => setZIndex({dropdownA:4000, dropdownB:5000})}
                                        onClose={() => setZIndex({dropdownB:4000, dropdownA:5000})}
                                        zIndex={zIndex.dropdownB}
                                        items={exerciseTime}
                                        defaultValue={activity.activityTime}
                                        placeholder="Süre Seçin"
                                        onChangeItem={item => setValue({ activityTime: item.value })}
                                        arrowSize={24}
                                        arrowColor={colors.dark}
                                        //arrowStyle={{ marginTop: -8 }}
                                        containerStyle={{ height: 50, marginBottom: 10 }}
                                        placeholderStyle={{
                                            fontWeight: "400",
                                            textAlign: 'left',
                                            color: colors.dark,
                                            fontSize: 16,
                                        }}
                                        style={{ backgroundColor: colors.lightGreen, borderWidth: 1, borderRadius: 15, borderColor: colors.white }}
                                        itemStyle={{
                                            justifyContent: 'flex-start',
                                            fontWeight: "400",
                                            color: colors.dark,
                                            fontSize: 16,
                                        }}
                                        labelStyle={{
                                            justifyContent: 'flex-start',
                                            fontWeight: "400",
                                            color: colors.dark,
                                            fontSize: 16,

                                        }}
                                        activeLabelStyle={{ color: colors.green, fontWeight: "600", fontSize: 17 }}
                                        dropDownStyle={{ backgroundColor: colors.lightGreen, borderWidth: 1, borderColor: colors.white, borderRadius: 15 }}
                                    />
                                </View>
                                <Button
                                    title="Kaydet"
                                    style={{ paddingVertical: 10, marginHorizontal: 80 }}
                                    onPress={() => alert('Kaydedildi')}
                                />

                            </View>
                            <BarCharts 
                                values={values} 
                                label={label} 
                                valueFormatter={valueFormatter} 
                                color={processColor(colors.yellow)}
                                barShadowColor={processColor(colors.yellow)}
                                highlightColor={processColor(colors.orange)}
                            />
                        </>


                }
            </ScrollView>
        </View>
    )
}

export default AddExercise

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    main: {
        flex: 1,
        marginHorizontal: 23,
        marginTop: 20
    },
    destinationView: {
        flex: 1,
        marginBottom: 15,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    destinationText: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        textAlign: 'center',
        color: colors.purple
    },
    destinationFinishText: {
        flex: 1.5,
        fontSize: 16,
        fontWeight: "600",
        textAlign: 'center',
        color: colors.darkBlue,
    },
    exerciseTracking: {
        color: colors.dark,
        textAlign: 'center',
        paddingVertical: 10
    }
})
