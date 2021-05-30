import React from 'react';
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
//styles
import { colors } from '../styles';
//navigations
import Dashboard from '../screens/main/Dashboard';
import Add from '../screens/main/Add';
import Profil from '../screens/main/Profil'



const Tab = createBottomTabNavigator();

const MyModalBackgroundScreen = () => {
    return null;
  };

const TabNavigation = () => {
    
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ isFocus }) => {
                    let iconName;
                    let color = isFocus ? colors.orange : colors.purple;
                    if (route.name === 'Home') {
                        iconName = isFocus ? faHome : faHome;
                    } else if (route.name === 'Add') {
                        iconName = isFocus ? faPlus : faPlus;
                    } else if (route.name === 'Profil') {
                        iconName = isFocus ? faUser : faUser;
                    }
                    return (
                            <FontAwesomeIcon icon={ iconName } style={styles.icon}/>
                    )
                },
            })}
            tabBarOptions={{
                showLabel: false,
                tabStyle: {
                    backgroundColor: colors.white,
                },
                style: { borderTopWidth: 0, elevation: 0, height: 70 },
            }}

        >
            <Tab.Screen name="Home" component={Dashboard} />
            <Tab.Screen name="Add" component={MyModalBackgroundScreen} 
                options={{
                    tabBarIcon: (props) => (
                        <FontAwesomeIcon icon={ faPlus } style={styles.icon}/>
                      ),
                    tabBarButton: () => {
                        return <Add />
                    }
                }}
            />
            <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
    );
};

export default TabNavigation;

export const styles = StyleSheet.create({
                tabbar: {
                width: 45,
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
                width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 14,
    },
    icon: {
        color: colors.purple,
        fontSize: 32,
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})