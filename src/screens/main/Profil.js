import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { colors } from '../../styles'
import Emoji from 'react-native-emoji'


const Profil = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ borderWidth: 5, marginBottom: 20, height: 90, width: 90, borderRadius: 45, borderColor: colors.blue, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.light }}>
                        <Image
                            source={require('../../assets/profile.png')}
                            resizeMode="contain"
                            style={{ width: 60, height: 60 }}
                        />
                    </View>
                    <Text style={{ fontWeight: "500", fontSize:18, color:colors.darkBlue }}>Mergizem</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                    <View style={{ backgroundColor: colors.lightLilac, padding: 20, borderRadius: 20 }}>
                        <Text style={{fontWeight:"500", fontSize:15, color:colors.dark}}>Boy:170</Text>
                    </View>
                    <View style={{ backgroundColor: colors.green2, padding: 20, borderRadius: 20 }}>
                        <Text style={{fontWeight:"500", fontSize:15, color:colors.dark}}>Kilo:55</Text>
                    </View>
                    <View style={{ backgroundColor: colors.lightBlue, padding: 20, borderRadius: 20 }}>
                        <Text style={{fontWeight:"500", fontSize:15, color:colors.dark}}>Yaş:23</Text>
                    </View>
                </View>
                
            </View>

            <ScrollView style={{marginTop:60,marginHorizontal:23}}>


                <View style={{flex:1,backgroundColor:colors.lightBlue,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,paddingVertical:15,borderRadius:10,marginBottom:20}}>
                    <Text style={{flex:3,fontWeight:"500", fontSize:16}}>Su (Bardak)</Text>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontWeight:"500", fontSize:16}}>6</Text>
                        <Emoji name="sweat_drops" style={{ fontSize: 30 }} />
                    </View>
                </View>
            
                <View style={{flex:1,backgroundColor:colors.lightGreen,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,paddingVertical:15,borderRadius:10,marginBottom:20}}>
                    <Text style={{flex:3,fontWeight:"500", fontSize:16}}>Beslenme (Puan)</Text>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontWeight:"500", fontSize:16}}>3</Text>
                        <Emoji name="avocado" style={{ fontSize: 30 }} />
                    </View>
                </View>

                <View style={{flex:1,backgroundColor:colors.lightYellow,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,paddingVertical:15,borderRadius:10,marginBottom:20}}>
                    <Text style={{flex:3,fontWeight:"500", fontSize:16}}>Egzersiz (Süre)</Text>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontWeight:"500", fontSize:16}}>2</Text>
                        <Emoji name="weight_lifter" style={{ fontSize: 30 }} />
                    </View>
                </View>

                <View style={{flex:1,backgroundColor:colors.lightLilac,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,paddingVertical:15,borderRadius:10,marginBottom:20}}>
                    <Text style={{flex:3,fontWeight:"500", fontSize:16}}>Uyku (Süre)</Text>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontWeight:"500", fontSize:16}}>7</Text>
                        <Emoji name="sleeping" style={{ fontSize: 30 }} />
                    </View>
                </View>

                <View style={{flex:1,backgroundColor:colors.light,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,paddingVertical:15,borderRadius:10,marginBottom:20}}>
                    <Text style={{flex:3,fontWeight:"500", fontSize:16}}>Hastalık Testler</Text>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontWeight:"500", fontSize:16}}>Girilmedi</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default Profil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
        backgroundColor: colors.light,
        paddingTop: 20,
        justifyContent: 'flex-start',
        height: 200
    }
})
