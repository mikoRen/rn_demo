import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createSwitchNavigator} from  'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View,Image,Text,StyleSheet} from 'react-native';
import {createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers';
import {connect} from 'react-redux';

import TaskPage from '../pages/TaskPage';
import CarPage from '../pages/CarPage';
import HomePage from '../pages/HomePage';

import ExecutingTask from '../pages/task/executingTask';
import FinishedTask from '../pages/task/finishedTask';
import ErrorTask from '../pages/task/errorTask';
import WaitingTask from '../pages/task/waitingTask';
import CancelTask from '../pages/task/cancelTask';

import UserPage from '../pages/user/UserPage';

import MessagePage from '../pages/home/MessagePage';

import WelcomePage from '../pages/WelcomePage';

import {DrawerActions} from 'react-navigation-drawer';


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

export const rootCom = 'Init';//设置根路由

const drawerNavigator = createDrawerNavigator(
    {
        UserPage:{
            screen:UserPage,
        }
    }
)

const homeStackNavigator = createStackNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            title:'首页',
            headerTitleAlign:'center'
            // header:(navigation) => 
            // <View style={{
            //     backgroundColor:'#fff',
            //     height:64,display:'flex',
            //     flexDirection:'row',
            //     justifyContent:'space-between',
            //     alignItems:'flex-end',
            //     paddingBottom:5,
            //     elevation: 4,
            //     shadowColor:'#000000',
            //     shadowOffset:{
            //         width:1,
            //         height:1
            //     },
            //     shadowOpacity:0.08,
            //     }}>
            //     <Ionicons style={{marginLeft:10}} name={'md-contact'} size={20} onPress={() =>{navigation.dispatch(DrawerActions.openDrawer())}} />
            //     <Text>自定义的header</Text>
            //     <Ionicons style={{marginRight:10}} name={'md-mail'} size={20} />
            // </View>
        }
    },
    MessagePage:{
        screen:MessagePage,
    },
    DrawerNav:{
        screen:drawerNavigator
    }
})

const taskTopTabNavigator = createMaterialTopTabNavigator(
    {
        ExecutingTask:{
            screen:ExecutingTask,
            navigationOptions: {
                title:"执行中",
                tabBarLabel:({focused}) => (<Text style={{width:75,textAlign:'center',color:focused? '#333333' : '#707070',fontSize:focused? 15 : 13,fontWeight:'bold'}}>执行中</Text>),
            }
        },
        WaitingTask:{
            screen:WaitingTask,
            navigationOptions: {
                title:"等待中",
                tabBarLabel:({focused}) => (<Text style={{width:75,textAlign:'center',color:focused? '#333333' : '#707070',fontSize:focused? 15 : 13,fontWeight:'bold'}}>等待中</Text>),
            }
        },
        FinishedTask:{
            screen:FinishedTask,
            navigationOptions: {
                title:"已完成",
                tabBarLabel:({focused}) => (<Text style={{width:75,textAlign:'center',color:focused? '#333333' : '#707070',fontSize:focused? 15 : 13,fontWeight:'bold'}}>已完成</Text>),
            }
        },
        ErrorTask:{
            screen:ErrorTask,
            navigationOptions: {
                title:"异常",
                tabBarLabel:({focused}) => (<Text style={{width:75,textAlign:'center',color:focused? '#333333' : '#707070',fontSize:focused? 15 : 13,fontWeight:'bold'}}>异常</Text>),
            }
        },
        CancelTask:{
            screen:CancelTask,
            navigationOptions: {
                title:"已取消",
                tabBarLabel:({focused}) => (<Text style={{width:75,textAlign:'center',color:focused? '#333333' : '#707070',fontSize:focused? 15 : 13,fontWeight:'bold'}}>已取消</Text>),
            }
        },
        
    },
    {
        initialRouteName:"ExecutingTask",
        initialLayout:{height:50,width:75},
        tabBarOptions:{
            // scrollEnabled:true,
            style: { backgroundColor: '#fff'},
            indicatorStyle:{
                height:4,
                backgroundColor:'#61DAF2'
            },
            labelStyle:{
                fontSize:15,
                color:'#333333'
            }
        },
    }
)

const BottomTabNavigator =  createMaterialBottomTabNavigator(
    {
        HomeNav:{
            screen:homeStackNavigator,
            navigationOptions: {
                title:"首页",
                tabBarLabel:"首页",
                tabBarIcon:({tintColor,focused}) => (focused ? <Image source={require('../resource/home-fill.png')} style={styles.tabIconStyle} />  : <Image source={require('../resource/home.png')} style={styles.tabIconStyle} />),
            }
        },
        TaskPage:{
            screen:taskTopTabNavigator,
            navigationOptions: {
                title:"任务",
                tabBarLabel:"任务",
                tabBarIcon:({tintColor,focused}) => (focused ? <Image source={require('../resource/task_fill.png')} style={styles.tabIconStyle} />  : <Image source={require('../resource/task.png')} style={styles.tabIconStyle} />)
            }
        },
        CarPage:{
            screen:CarPage,
            navigationOptions: {
                title:"车辆",
                tabBarLabel:"车辆",
                tabBarIcon:({tintColor,focused}) => (focused ? <Image source={require('../resource/car-fill.png')} style={styles.tabIconStyle} />  : <Image source={require('../resource/car.png')} style={styles.tabIconStyle} />)
                
            }
        }
    },
    {
        shifting:false,
        initialRouteName:"HomeNav",
        activeColor:"#61DAF2",
        inactiveColor:"#BDBDBD",
        barStyle: { backgroundColor: '#fff'},
    }
)

const initStackNavigator = createStackNavigator({
    WelcomePage:{
        screen:WelcomePage
    }
})

export const SwitchNavigator = createSwitchNavigator({
     init:{
         screen:initStackNavigator
     },
     Main:{
         screen:BottomTabNavigator
     }
 })

 /**
 * 1.初始化react-navigation与redux的中间件，
 * 该方法的一个很大的作用就是为reduxifyNavigator的key设置actionSubscribers(行为订阅者)
 * 设置订阅者@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L29
 * 检测订阅者是否存在@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L97
 * @type {Middleware}
 */
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root',
);

/**
 * 2.将根导航器组件传递给 reduxifyNavigator 函数, 新版中已经改为createReduxContainer
 * 并返回一个将navigation state 和 dispatch 函数作为 props的新组件；
 * 注意：要在createReactNavigationReduxMiddleware之后执行
 */
const AppWithNavigationState = createReduxContainer(SwitchNavigator, 'root');

/**
 * State到Props的映射关系
 * @param state
 */
const mapStateToProps = state => ({
    state: state.nav,//v2
});
/**
 * 3.连接 React 组件与 Redux store
 */
export default connect(mapStateToProps)(AppWithNavigationState);


const styles = StyleSheet.create({
    tabIconStyle:{
        width:30,
        height:30,
        marginTop:-6
    },
    headerStyle:{
        
    }
})