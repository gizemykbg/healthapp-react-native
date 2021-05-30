import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../styles'
const TextInputAddT = ({ items, add, remove, onPress, onChangeText1, onChangeText2 }) => {
    return (
        <>
            {
                items.map((val, key) => {
                    return (
                        <View style={{}}>
                            <View style={styles.container} key={val.index}>
                                <View style={{ flex: 2.5, paddingRight: 10 }} >
                                    <Text style={{ fontWeight: "500", fontSize: 15, paddingBottom: 5 }}>Test Adı :</Text>
                                    <TextInput
                                        placeholder={val.placeholder1}
                                        onChangeText={(text) => onChangeText1(key, text, 'value1')}
                                        value={val.value1}
                                        style={{ backgroundColor: colors.white, height: 30, borderRadius: 5, paddingHorizontal: 5 }}
                                    />
                                    {/* onChangeText={(text)=>onChangeText1(key,text)} */}
                                </View>
                                <View style={{ flex: 2, paddingHorizontal: 10 }}>
                                    <Text style={{ fontWeight: "500", fontSize: 15, paddingBottom: 5 }}>Test Sonucu</Text>
                                    <TextInput
                                        placeholder={val.placeholder2}
                                        onChangeText={(text) => onChangeText2(key, text, 'value2')}
                                        value={val.value2}
                                        style={{ backgroundColor: colors.white, height: 30, borderRadius: 5, paddingHorizontal: 5 }}
                                    />
                                </View>
                                {
                                    key !== 0 ?
                                        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 5 }}>
                                            <TouchableOpacity onPress={() => remove(val)} style={{ height: 25, alignItems:'center',justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', borderRadius: 20 }} >
                                                <Text style={{ fontWeight: "500", fontSize: 15, color: colors.white, textAlign: 'center' }}>Sil</Text>
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 5 }}>
                                            <TouchableOpacity onPress={add} style={{height: 25, alignItems:'center', justifyContent: 'center', backgroundColor: colors.green2, borderRadius: 20 }}>
                                                <Text style={{ fontWeight: "500", fontSize: 15, color: colors.dark, textAlign: 'center' }}>Ekle</Text>
                                            </TouchableOpacity>
                                        </View>

                                }
                            </View>
                        </View>
                    )
                })
            }
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15, marginBottom: 5 }} >
                <TouchableOpacity onPress={add} style={{ marginHorizontal: 10, paddingVertical: 10, paddingHorizontal: 15, backgroundColor: colors.green2, borderRadius: 20 }}>
                    <Text style={{ fontWeight: "500", fontSize: 15, color: colors.dark }}>Satır Ekle</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 10, paddingVertical: 10, paddingHorizontal: 15, backgroundColor: colors.orange, borderRadius: 20 }}>
                    <Text style={{ fontWeight: "500", fontSize: 15, color: colors.dark }}>Değeri Kaydet</Text>
                </TouchableOpacity>
            </View >


        </>
    )

}

export default TextInputAddT

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBlue,
        flexDirection: "row",
        marginTop: 10,
        justifyContent: 'space-between'
    }
})
