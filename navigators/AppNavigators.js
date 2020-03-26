import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View,Image,Text,StyleSheet} from 'react-native';

import TaskPage from '../pages/TaskPage';
import CarPage from '../pages/CarPage';
import HomePage from '../pages/HomePage';

// export const AppStackNavigator = createStackNavigator({
//     Home:{
//         screen:HomePage,
//     },
//     Page1:{
//         screen:Page1,
//     },
//     Page2:{
//         screen:Page2,
//     },
//     Page3:{
//         screen:Page3,
//     }
// }
// );

export const BottomTabNavigator =  createMaterialBottomTabNavigator(
    {
        Home:{
            screen:HomePage,
            navigationOptions: {
                title:"首页",
                tabBarIcon:({tintColor,focused}) => (focused ? <Image source={require('../resource/home-fill.png')} style={styles.tabIconStyle} />  : <Image source={require('../resource/home.png')} style={styles.tabIconStyle} />),
            }
        },
        TaskPage:{
            screen:TaskPage,
            navigationOptions: {
                title:"任务",
                tabBarIcon:({tintColor,focused}) => (focused ? <Image source={require('../resource/task_fill.png')} style={styles.tabIconStyle} />  : <Image source={require('../resource/task.png')} style={styles.tabIconStyle} />)
            }
        },
        CarPage:{
            screen:CarPage,
            navigationOptions: {
                title:"车辆",
                tabBarIcon:({tintColor,focused}) => (focused ? <Image source={require('../resource/car-fill.png')} style={styles.tabIconStyle} />  : <Image source={require('../resource/car.png')} style={styles.tabIconStyle} />)
                
            }
        }
    },
    {
        shifting:false,
        initialRouteName:"Home",
        activeColor:"#61DAF2",
        inactiveColor:"#BDBDBD",
        barStyle: { backgroundColor: '#fff'},
    }
)

const styles = StyleSheet.create({
    tabIconStyle:{
        width:30,
        height:30,
        
    }
})