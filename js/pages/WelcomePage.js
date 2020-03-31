import React, {Component} from 'react';
import {StyleSheet, Text,View} from 'react-native';
import NavigationUtil from '../navigators/NavigationUtil';

export default class WelcomePage extends Component {
	componentDidMount() {
		this.timer = setTimeout(() => {
			//go to homepage
			NavigationUtil.resetToHomePage(this.props);
			console.log(this.props.navigation)
		}, 1000)
	}
	componentWillMount() {
		//页面销毁时，清空计时器
		this.timer && clearTimeout(this.timer);
	}

	render() {
		console.log('=====',this.props.navigation)
		return (
			<View style={styles.container}>
				<Text>
					WelcomePage!!
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	}
})