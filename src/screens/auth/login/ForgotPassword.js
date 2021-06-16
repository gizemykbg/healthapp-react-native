import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Image, Text} from 'react-native';
import {colors} from '../../../styles';

import firebase from '../../../../database/firebase';

//components
import {BackButton, Input, Button} from '../../../components';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const reset = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      alert('Parola Sıfırlama Maili Gönderilmiştir');
    } catch (e) {
      alert('Mail Adresi Bulunamadı.');
    }
  };
  const handleButton = () => {
    if (email !== '') {
      reset();
    } else alert('Lütfen Boş Bırakmayınız');
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <BackButton onPress={() => navigation.goBack()} />
        <ScrollView
          style={styles.imageMain}
          showsVerticalScrollIndicator={false}>
          <View style={styles.imageMain}>
            <Image
              source={require('../../../assets/forgotPassword.png')}
              style={{width: '100%', height: 300}}
              resizeMode="contain"
            />
            <View style={styles.inputMain}>
              <Text style={styles.text}>Şifre Yenileme</Text>
              <Text style={styles.text2}>
                Şifrenizi yenilemek için mail adresinizi giriniz.
              </Text>
              <Input
                placeholder="E-mail Adresi"
                onChangeText={val => setEmail(val)}
                value={email}
              />
              <Button title="Mail Gönder" onPress={handleButton} />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ForgotPassword;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  main: {
    flex: 1,
    marginHorizontal: 23,
    marginTop: 20,
  },
  imageMain: {
    flex: 2,
  },
  inputMain: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    paddingVertical: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: colors.dark,
  },
  text2: {
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '300',
    color: colors.dark,
  },
});
