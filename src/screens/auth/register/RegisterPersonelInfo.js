import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native'
import { colors } from '../../../styles'
//components
import { BackButton, Input, Button, Dropdown } from '../../../components'

const RegisterPersonelInfo = ({navigation}) => {
    const genderItem = [
        { label: 'Kadın', value: 'kadin' },
        { label: 'Erkek', value: 'erkek' },
        { label: 'Diğer', value: 'diger' }
    ]
    const [personelInfo, setPersonelInfo] = useState({
        gender: '',
        age: '',
        height: '',
        weight: '',
    });

    var length = 0;
    const setValue = valueObj => {
        setPersonelInfo(personelInfo => ({ ...personelInfo, ...valueObj }));
    };
    const handleButton = () => {
        for (const data in personelInfo) {
            if (personelInfo[data] !== '') {
                length = length + 1;
            }
            else length
        }
        if (length >= 3) {
            navigation.navigate('Main', {screen:'Tabs', params:{screen:'Home'}})
        }
        else alert('Bilgileri doldurunuz')
    }


    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <BackButton onPress={() => navigation.goBack()} />
                <ScrollView style={styles.imageMain} showsVerticalScrollIndicator={false}>
                    <View style={styles.imageMain}>
                        <Image
                            source={require('../../../assets/personelInfo.png')}
                            style={{ width: '100%', height: 300 }}
                            resizeMode="contain"
                        />
                        <View style={styles.inputMain}>
                            <Text style={styles.text}>Kişisel Bilgiler</Text>
                            <Text style={styles.text2}>Lütfen doğru bir şekilde bilgilerinizi giriniz.</Text>
                            {/* <Input
                                placeholder="Cinsiyet"
                                onChangeText={val => setValue({ gender: val })}
                                value={personelInfo.gender}
                            /> */}

                            <Dropdown
                                data={genderItem}
                                value={personelInfo.gender}
                                onValueChange={val => setValue({ gender: val.value })}
                                placeholder="Cinsiyet Seçiniz"
                            />
                            <Input
                                placeholder="Yaşınızı Giriniz"
                                onChangeText={val => setValue({ age: val })}
                                value={personelInfo.age}
                            />
                            <Input
                                placeholder="Boyunuzu Giriniz"
                                onChangeText={val => setValue({ size: val })}
                                value={personelInfo.size}
                            />
                            <Input
                                placeholder="Kilonuzu Giriniz"
                                onChangeText={val => setValue({ weight: val })}
                                value={personelInfo.weight}
                            />
                            <Button
                                title="Kayıt Ol"
                                onPress={handleButton}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default RegisterPersonelInfo;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    main: {
        flex: 1,
        marginHorizontal: 23,
        marginTop: 20
    },
    imageMain: {
        flex: 2
    },
    inputMain: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        paddingVertical: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "600",
        color: colors.dark,
    },
    text2: {
        paddingBottom: 20,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "300",
        color: colors.dark,
    }
})
