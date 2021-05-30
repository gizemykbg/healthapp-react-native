import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native'
import { colors } from '../../../styles'
//components
import { BackButton, Input, Button } from '../../../components'
import {Formik} from "formik";

 import axios from 'axios';
/*axios.defaults.baseURL = 'http://88.241.35.219/32/Login' */


const Login = ({ navigation }) => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const setValue = valueObj => {
        setLoginData(loginData => ({ ...loginData, ...valueObj }));
    };
    const handleButton = () => {
    /*async ({ username, password }, bag) => {
         try {
			await axios.post(`http://88.241.35.219:3000/login`, { username,password });
			
			this.props.AuthStore.saveToken(data.token);
		}catch (e) {
			console.log(Error);
		} */
        if (loginData.username && loginData.password !== '') {
           navigation.navigate('Main',{screen:'Tabs', params:{screen:'Home'}})//tabs
        }
        else alert('Lütfen Boş Bırakmayınız')
    }
    
/*     const _handleSubmit = async ({ username, password }, bag) => {
		try {
			const { loginData } = await axios.post(`http://88.241.35.219:3000/Register`, { username, password });
			bag.setSubmitting(false);

			if (loginData.hasOwnProperty('errors')) {
			  bag.setErrors(loginData.errors);
			  return false;
			}

			this.props.navigation.navigate('Login')
		}catch (e) {
			bag.setSubmitting(false);
			bag.setErrors(e)
		}
	}; */


    return (
        
        <View style={styles.container}>
            <View style={styles.main}>
                <BackButton onPress={() => navigation.goBack()} />
                <ScrollView style={styles.imageMain} showsVerticalScrollIndicator={false}>
                    <View style={styles.imageMain}>
                        <Image
                            source={require('../../../assets/login.png')}
                            style={{ width: '100%', height: 300 }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.inputMain}>
                        <Input
                            placeholder="Kullanıcı Adı"
                            onChangeText={val => setValue({ username: val })}
                            value={loginData.name}
                        />
                        <Input
                            placeholder="Şifre"
                            onChangeText={val => setValue({ password: val })}
                            value={loginData.password}
                        />
                        <Button
                            title="Giriş Yap"
                            onPress={handleButton}
                        />
                        <Text
                            onPress={() => navigation.navigate('ForgotPassword')}
                            style={styles.text}
                        >
                            Şifremi Unuttum
                        </Text>
                    </View>

                </ScrollView>
            </View>
        </View>
    )
}


export default Login;




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
