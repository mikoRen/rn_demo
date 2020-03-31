// import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import {SwitchNavigator} from './navigators/AppNavigators';
// export default createAppContainer(SwitchNavigator);

import React,{Component} from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './navigators/AppNavigators';
import store from './store';

export default class App extends Component {
	render() {
		return <Provider store={store}> 
			<AppNavigator />
		</Provider>
	}
}