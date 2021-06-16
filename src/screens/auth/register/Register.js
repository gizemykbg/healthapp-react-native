import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  Text,
  AsyncStorage,
} from 'react-native';
import firebase from '../../../../database/firebase';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
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

  registerUser = () => {
    console.log(this.state.displayName);
    if (
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.displayName === ''
    ) {
      Alert.alert('detayları giriniz!');
    } else {
      this.setState({
        isLoading: true,
      });
      this.setState({
        isLoading: false,
        displayName: '',
        email: '',
        password: '',
      });
      const name = this.state.displayName;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
          user.user.updateProfile({
            displayName: name,
          });
          AsyncStorage.setItem('displayName', name);
          this.props.navigation.navigate('Main', {
            screen: 'Tabs',
            params: {screen: 'Home'},
          });
        })
        .catch(error => {
          Alert.alert('Bilinmeyen bir hata oluştu!');
          console.log(error);
          this.setState({errorMessage: error.message});
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
          placeholder="Name"
          value={this.state.displayName}
          placeholderTextColor="rgba(0,0,0,0.3)"
          onChangeText={val => this.updateInputVal(val, 'displayName')}
        />
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
          value={this.state.password}
          placeholderTextColor="rgba(0,0,0,0.3)"
          onChangeText={val => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <Button
          color="#3740FE"
          title="Kayıt Ol"
          onPress={() => this.registerUser()}
        />
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
    color: '#000',
    borderBottomWidth: 1,
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
import firebase from '../../../../database/firebase';

const Register = ({navigation}) => {
    const [registerData, setRegisterData] = useState({
        displayName: '',
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

 */

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
