import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native'
import { colors } from '../../../styles'
//components
import { BackButton, Input, Button } from '../../../components'
import axios from 'axios'

const Register = ({navigation}) => {
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });
    var length = 0;
    const setValue = valueObj => {
        setRegisterData(registerData => ({ ...registerData, ...valueObj }));
    };
    const handleButton = () => {
        for (const data in registerData) {
            if(registerData[data] !== ''){
                length = length + 1;
            }
            else length
        }
        if(length >= 5) {
            navigation.navigate('RegisterPersonelInfo')
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
                            source={require('../../../assets/register.png')}
                            style={{ width: '100%', height: 300 }}
                            resizeMode="contain"
                        />
                        <View style={styles.inputMain}>
                            <Input
                                placeholder="isim"
                                onChangeText={val => setValue({firstName:val})}
                                value={registerData.firstName}
                            />
                            <Input
                                placeholder="soyisim"
                                onChangeText={val => setValue({lastName:val})}
                                value={registerData.lastName}
                            />
                            <Input
                                placeholder="Kullanıcı Adı"
                                onChangeText={val => setValue({username:val})}
                                value={registerData.username}
                            />
                            <Input
                                placeholder="E-mail Adresi"
                                onChangeText={val => setValue({email:val})}
                                value={registerData.email}
                            />
                            <Input
                                placeholder="Telefon numarası"
                                onChangeText={val => setValue({phoneNumber:val})}
                                value={registerData.phoneNumber}
                            />
                            <Input
                                placeholder="Şifre"
                                onChangeText={val => setValue({password:val})}
                                value={registerData.password}
                            />
                            <Button
                                title="Devam Et"
                                onPress={handleButton}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Register;

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
        flex: 1
    },
    inputMain: {
        flex: 1
    },
    text: {
        paddingVertical: 10,
        textAlign: 'right',
        fontSize: 17,
        fontWeight: "500",
        color: colors.dark,
        textDecorationLine: "underline",
        textDecorationColor: colors.dark
    }
})




 /*   const registerData= async (props)=>{
        fetch("http://88.241.35.219:3000/Register",{
          method:"POST",
          headers: {
           'Content-Type': 'application/json'
         },
         body:JSON.stringify({
           "email":email,
           "password":password,
            "username": username,
            "email": email,
            "password": password
         })
        })
        .then(res=>res.json())
        .then(async (data)=>{
               try {
                 await AsyncStorage.setItem('token',data.token)
                 props.navigation.replace("Login")
               } catch (e) {
                 console.log("error hai",e)
               }
        })
     }
 */