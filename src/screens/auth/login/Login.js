import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import firebase from '../../../../database/firebase';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('üye olamak için bilgileri giriniz!');
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
          this.setState({
            isLoading: false,
            email: '',
            password: '',
          });
          AsyncStorage.setItem('displayName', res.user.displayName);
          this.props.navigation.navigate('Main', {
            screen: 'Tabs',
            params: {screen: 'Home'},
          });
        })
        .catch(error => {
          console.log(error);
          Alert.alert('Hatalı kullanıcı adı veya şifre');
          this.setState({errorMessage: error.message, isLoading: false});
        });
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          placeholderTextColor="rgba(0,0,0,0.3)"
          onChangeText={val => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor="rgba(0,0,0,0.3)"
          value={this.state.password}
          onChangeText={val => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <Button color="#3740FE" title="Signin" onPress={this.userLogin} />

        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Register')}>
          Hesabınız yok mu? Hemen Üye olun :)
        </Text>

        <Text
          onPress={() => this.props.navigation.navigate('ForgotPassword')}
          style={styles.text}>
          Şifremi Unuttum
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    color: '#000',
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

/* import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native'
import { colors } from '../../../styles'
//components
import { BackButton, Input, Button } from '../../../components'






const Login = ({ navigation }) => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const setValue = valueObj => {
        setLoginData(loginData => ({ ...loginData, ...valueObj }));
    };
    const handleButton = () => {

        if (loginData.username && loginData.password !== '') {
           navigation.navigate('Main',{screen:'Tabs', params:{screen:'Home'}})//tabs
        }
        else alert('Lütfen Boş Bırakmayınız')
    }
    



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

 */

/*axios.defaults.baseURL = 'http://88.241.35.219/32/Login' */

/*async ({ username, password }, bag) => {
         try {
			await axios.post(`http://88.241.35.219:3000/login`, { username,password });
			
			this.props.AuthStore.saveToken(data.token);
		}catch (e) {
			console.log(Error);
		} */

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
