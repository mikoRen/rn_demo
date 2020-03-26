import React from 'react';
import {Button,View,Text,StyleSheet,ScrollView} from 'react-native';
import {MapView} from "react-native-amap3d";

export default class Page1 extends React.Component {
    render() {
        const {navigation} = this.props;
        return(
            <View style={{flex:1,backgroundColor:'#fff',paddingTop:30}}>
                <ScrollView>
                    <Text style={styles.text}>欢迎来到Home</Text>
                    <MapView
                    coordinate={{latitude: 39.91095,longitude: 116.37296}}
                    mapType={"standard"} //五种可选 standard,bus,navigation,night,satellite
                    rotateEnabled={true} //是否启用旋转手势，用于调整方向
                    scrollEnabled={true} //是否启用滑动手势，用于平移
                    showsCampass={false} //是否显示指南针
                    showsLocationButton={true} //是否显示定位按钮 (该功能只支持android)
                    >

                    </MapView>
                    <Button title={'Go Back'} onPress={() => {
                        navigation.goBack();
                    }} />
                    <Button
                        title={'Go Back'}
                        onPress={() => {
                            navigation.navigate('CarPage')
                        }}
                    />
                </ScrollView>
                
                <View style={styles.addTaskContainer} ></View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'white'
    },
    addTaskContainer:{
        width:'100%',
        height:215,
        backgroundColor:'pink',
    }
})