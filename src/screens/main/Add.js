import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList,TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Emoji from 'react-native-emoji'
import { colors, dimensionsHeight } from '../../styles'
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-native-modal';


const DATA = [
    {
        id: 1,
        name: "sweat_drops",
        title: "Su Ekle",
        color: "#F5FCFF",
        navigationName: "AddWater"
    },
    {
        id: 2,
        name: "sleeping",
        title: "Uyku zamanı Ekle",
        color: colors.lightPurple,
        navigationName: "AddSleep"
    },
    {
        id: 3,
        name: "avocado",
        title: "Öğün Ekle",
        color: colors.lightGreen,
        navigationName: "AddNutrition"
    },
    {
        id: 4,
        name: "weight_lifter",
        title: "Egzersiz Ekle",
        color: colors.lightYellow,
        navigationName: "AddExercise"
    },
    {
        id: 5,
        name: "mag_right",
        title: "Test Ekle",
        color: colors.lightPurple,
        navigationName: "AddTest"
    }, 
];


const Add = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    
   

    const renderItem = ({item }) => {
        return (
            <TouchableOpacity
                key={item.id}
                style={[styles.chartStyle, { backgroundColor: item.color }]}
                onPress={() => { navigation.navigate('Charts', {screen: item.navigationName}) }} //??
            >
                <Emoji name={item.name} style={{ fontSize: 30,paddingBottom:10 }} />
                <Text>{item.title}</Text>
            </TouchableOpacity>
 
        );
    };

    return (
        <>
            <TouchableOpacity onPress={() => setModalVisible(true) } style={[styles.buttonStyle, { backgroundColor: modalVisible ? colors.orange : colors.purple }]}>
                <FontAwesomeIcon icon={ faPlus } style={styles.icon}/>
            </TouchableOpacity>

            <View style={styles.container}>
                <Modal
                    backdropOpacity={0.5}
                    isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    style={styles.contentView}
                >
                    <View style={styles.content}>
                        <TouchableWithoutFeedback  onPress={() => { setModalVisible(false) }}>
                            <View style={{alignItems:'flex-end', justifyContent:'center',paddingRight:10}}>
                                <Icon name="close-circle-outline" size={30} color="red"/>
                            </View>
                        </TouchableWithoutFeedback>
                        <Text style={styles.contentTitle}>Yeni Kullanım Ekle</Text>
                        <View style={{ alignItems: 'center' }}>
                            <FlatList
                                data={DATA}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                extraData={selectedId}
                                horizontal={false}
                                numColumns={2}
                                style={styles.flatList}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );

}

export default Add
export const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        padding: 10,
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
    },
    contentTitle: {
        paddingBottom:5,
        fontSize: 22,
        fontWeight: "500",
        textAlign: 'center',
        color:colors.dark
    },
    contentView: {
        justifyContent: 'flex-end',
        marginBottom: 105,
    },
    buttonStyle: {
        height: 50,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8
    },
    chartStyle: {
        height: 100,
        width: 100,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    flatList: {
        marginVertical: 10,
    },
    icon: {
        color: 'white',
        fontSize: 28,
    }
})
