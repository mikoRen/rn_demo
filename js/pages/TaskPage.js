import React from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';

export default class TaskPage extends React.Component {
    render() {
        const {navigation} = this.props;
        return(
            <View style={{flex:1,backgroundColor:'#fff',paddingTop:30}}>
                <Text style={styles.text}>欢迎来到TaskPage</Text>
                <Button title={'Go Back'} onPress={() => {
                    navigation.goBack();
                }} />
                <Button
                    title={'Go Back'}
                    onPress={() => {
                        navigation.navigate('CarPage')
                    }}
                />
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