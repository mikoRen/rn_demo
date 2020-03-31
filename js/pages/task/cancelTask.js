import React from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';

export default class CancelTask extends React.Component {
    render() {
        const {navigation} = this.props;
        return(
            <View style={{flex:1,backgroundColor:'#fff',paddingTop:30}}>
                <Text style={styles.text}>cancelTask!!</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'#000'
    }
})