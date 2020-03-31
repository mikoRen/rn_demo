import React from 'react';
import {Button,View,Text,StyleSheet,ScrollView,StatusBar} from 'react-native';
import { MapView } from "react-native-amap3d";
import {Ionicon} from 'react-native-vector-icons/Ionicons';

export default class HomePage extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle:() => <View style={{backgroundColor:'pink'}}><Button title="奶牛按钮" color="#841584" /></View>,
            // headerLeft:<Ionicon name="md-home" size={30} />
        }
    }

    render() {
        const {navigation} = this.props;
        return(
            <View style={{flex:1,backgroundColor:'#fff',paddingTop:30}}>
                <StatusBar
                translucent
                backgroundColor="rgba(0, 0, 0, 0)"
                barStyle="dark-content"
                />
                <ScrollView style={{width:'100%',height:300}}>
                {/* <View style={{width:'100%',height:500}}>
                </View>
                    <Text style={styles.text}>欢迎来到Home</Text> */}
                </ScrollView>
                <MapView
                    style={StyleSheet.absoluteFill}
                    coordinate={{
                    latitude: 39.91095,
                    longitude: 116.37296
                }}
                />
                <View style={styles.addTaskContainer} ></View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'black'
    },
    addTaskContainer:{
        width:'100%',
        height:215,
        backgroundColor:'#fff',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        elevation: 8,
        shadowColor:'#000000',
        shadowOffset:{
            width:4,
            height:4
        },
        shadowOpacity:0.08,
        shadowRadius: 10
    }
})