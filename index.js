/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './js/App.js';
// import WelcomePage from './js/pages/WelcomePage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
