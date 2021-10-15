/* import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../../styles';
//components
import {BackButton, Input, Button, Dropdown} from '../../../components';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

const RegisterPersonelInfo = ({navigation, route}) => {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState(undefined);
  const genderItem = [
    {label: 'Kadın', value: 'kadin'},
    {label: 'Erkek', value: 'erkek'},
    {label: 'Diğer', value: 'diger'},
  ];
  const [personelInfo, setPersonelInfo] = useState({
    gender: '',
    age: '',
    height: '',
    weight: '',
  });

  var length = 0;
  const setValue = valueObj => {
    console.log(valueObj);
    setPersonelInfo(personelInfo => ({...personelInfo, ...valueObj}));
  };

  const handleButton = async () => {
    firebase
      .firestore()
      .collection('users')
      .doc('sad')
      .get(res => {
        console.log('User data: ', res.data());
      });

    //  navigation.navigate('Main', {screen: 'Auts', params: {screen: 'Login'}}); //??Home
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
              source={require('../../../assets/personelInfo.png')}
              style={{width: '100%', height: 300}}
              resizeMode="contain"
            />
            <View style={styles.inputMain}>
              <Text style={styles.text}>Kişisel Bilgiler</Text>
              <Text style={styles.text2}>
                Lütfen doğru bir şekilde bilgilerinizi giriniz.
              </Text>

              <Dropdown
                data={genderItem}
                value={gender}
                setValue={setGender}
                placeholder="Cinsiyet Seçiniz"
                open={open}
                setOpen={setOpen}
              />
              <Input
                placeholder="Yaşınızı Giriniz"
                onChangeText={val => setValue({age: val})}
                value={personelInfo.age}
                keyboardType="number-pad"
              />

              <Button title="Kayıt Ol" onPress={handleButton} />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default RegisterPersonelInfo;

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
 */
