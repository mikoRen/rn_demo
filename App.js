import React from 'react';
// import {AppStackNavigator} from './navigators/AppNavigators';
import { createAppContainer } from 'react-navigation';
import {BottomTabNavigator} from './navigators/AppNavigators';
export default createAppContainer(BottomTabNavigator);