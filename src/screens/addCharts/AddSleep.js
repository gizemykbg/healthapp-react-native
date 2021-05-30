import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, Dimensions, processColor } from 'react-native'
import { colors } from '../../styles'
import { ChartDestinationButton, Button, BarCharts } from '../../components'
import DropDownPicker from 'react-native-dropdown-picker';
import { Bar } from 'react-native-progress';

const sleep = [
    { label: '1 Saat', value: '1 saat' },
    { label: '2 Saat', value: '2 saat' },
    { label: '3 Saat', value: '3 saat' },
    { label: '4 Saat', value: '4 saat' },
    { label: '5 Saat', value: '5 saat' },
    { label: '6 Saat', value: '6 saat' },
    { label: '7 Saat', value: '7 saat' },
    { label: '8 Saat', value: '8 saat' },
    { label: '9 Saat', value: '9 saat' },
]

const values = [{ y: 6 }, { y: 8 }, { y: 10 }, { y: 12 }, { y: 8 }, { y: 6 }, { y: 5 }]
const valueFormatter = ['01.04.2021', '02.04.2021', '03.04.2021', '04.04.2021', '05.04.2021', '06.04.2021', '07.04.2021']
const label = '1 Haftalık Uyku Süreleri'


const AddSleep = () => {
    const [destination, setDestination] = useState(false);
    const [destinationShow, setDestinationShow] = useState(false)
    const [sleepTime, setSleepTime] = useState(' ')
    const [zIndex, setZIndex] = useState({
        dropdownA: 5000,
        dropdownB: 4000,
    })


    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/sleep.png')}
                style={{ width: '100%', height: 200 }}
                resizeMode="cover"
            />
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                {
                    destination ?
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
                        :
                        <>
                            <View style={styles.destinationView}>
                                <Text style={styles.destinationFinishText}>Hedefine Kalan Süre : 2 Saat</Text>
                                <Text style={styles.destinationText} numberOfLines={1} ellipsizeMode="tail">Hedefin : 9 Saat</Text>
                            </View>
                            <ChartDestinationButton
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
                            <View style={{ marginTop: 10, zIndex: 1 }}>
                                <Text style={[styles.exerciseTracking, { fontSize: 16, fontWeight: "500" }]}>Uyku Takibi</Text>
                                <Text style={[styles.exerciseTracking, { fontSize: 15, fontWeight: "400" }]}>Aşağıdan uyku süresini seçiniz.</Text>
                                <View style={{ zIndex: 1, }}>
                                    {/* dropdown A */}
                                    <DropDownPicker
                                        zIndex={zIndex.dropdownA}
                                        items={sleep}
                                        defaultValue={sleepTime}
                                        placeholder="Uyku Süresi"
                                        onChangeItem={item => setSleepTime(item.value)}
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
                                        style={{ backgroundColor: colors.lightPurple, borderWidth: 1, borderRadius: 15, borderColor: colors.white }}
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
                                        dropDownStyle={{ backgroundColor: colors.lightPurple, borderWidth: 1, borderColor: colors.white, borderRadius: 15 }}
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
                                color={processColor(colors.lilac)}
                                barShadowColor={processColor(colors.white)}
                                highlightColor={processColor(colors.white)}
                            />
                        </>


                }
            </ScrollView>
        </View>
    )
}

export default AddSleep

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
        color: colors.pink
    },
    destinationFinishText: {
        flex: 1.5,
        fontSize: 16,
        fontWeight: "600",
        textAlign: 'center',
        color: colors.orange,
    },
    exerciseTracking: {
        color: colors.dark,
        textAlign: 'center',
        paddingVertical: 10
    }
})
