import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../styles'
//components
import { Button } from '../../components'


const Entrance = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.imageMain}>
                    <Image
                        source={require('../../assets/welcome.png')}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.text}>HealthStory'e Hoşgeldiniz</Text>
                <View style={styles.buttonMain}>
                    <Button
                        title="Giriş Yap"
                        onPress={() => navigation.navigate('Login')}
                    />
                    <Button
                        title="Kayıt Ol"
                        style={styles.style}
                        textStyle={styles.textStyle}
                        onPress={() => navigation.navigate('Register')}
                    />
                </View>
            </View>
        </View>
    )
}

export default Entrance;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    main: {
        flex: 1,
        marginHorizontal: 23,
        justifyContent:'center',
    },
    imageMain: {
        flex: 3,
    },
    text:{
        flex:1,
        textAlign:'center',
        fontSize:24,
        fontWeight:"700",
        color: colors.black
    },
    buttonMain: {
        flex: 2
    },
    style: {
        backgroundColor: colors.lightLilac,
    },
    textStyle: {
        color: colors.lilac
    }
})