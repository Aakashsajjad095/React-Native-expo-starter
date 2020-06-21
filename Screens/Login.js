/**
 * Created by Aakash Sajjad on 6/19/2020.
 */
import React, { Component } from 'react';
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Icon} from 'native-base';
// import {background} from '../constants/images'
// import { Block, Button, Text, Utils } from "expo-ui-kit";
import { Ionicons,Entypo,AntDesign } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import {COLOR_APP_BLACK, COLOR_APP_BLUE,APP_COLOR_Background,commonpropcolor,Top_Tabbar_color,Buttom_tabbar_color,COLOR_APP_WHITE} from "../constants/Colors";
export default class Login extends Component{


    openHomeScreen = () =>{
        // this.props.navigation.goBack(null);
        // Alert.alert("Foods & Drinks Screen open")
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text_gps}>SIGN IN</Text>
                <Card style={styles.cardstyle}>
                    <View style={styles.helper_view}>
                    <Text style={styles.text_field}>EMAIL</Text>
                    <Input
                        leftIcon={
                            <Entypo name="mail" size={20} color="black" />
                        }
                    />
                        <Text style={styles.text_field_pass}>Password</Text>
                        <Input
                            secureTextEntry={true}
                            leftIcon={
                                <Ionicons name="ios-lock" size={20} color="black" />
                            }
                        />
                        <Text style={styles.text_field_forgetpass}>Forget password?</Text>
                    </View>
                    <View   style={styles.common_field}>
                        <TouchableOpacity
                            style={styles.button_farword}
                            onPress={this.openHomeScreen}
                        >
                            <AntDesign name="arrowright" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                </Card>
                <Text style={styles.text_dont_account}>Don't have an account? Click here</Text>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_APP_BLUE,
    },
    text_gps: {
        fontSize: 18,
        // color: "#7B7B7B"
        marginTop:40,
        //fontWeight:"bold",
        color:'#fefefe',
        textAlign:'center'
    },
    text_dont_account: {
        fontSize: 16,
        // color: "#7B7B7B"
        marginTop:30,
        color:'#fefefe',
        textAlign:'center'
    },
    text_field: {
        fontSize: 15,
        paddingLeft:10,
        paddingTop:10,
        color:'#333',
    },
    text_field_pass: {
        fontSize: 15,
        paddingLeft:10,
        color:'#333',
    },
    text_field_forgetpass: {
        fontSize: 15,
        color:COLOR_APP_BLUE,
        alignSelf: 'flex-end',
        paddingRight:20
    },
    common_field: {
        alignSelf:'flex-end',
        marginTop:40,
        marginRight:40
    },
    helper_view:{
     marginLeft:15,
        marginRight:15,
        marginTop:25
    },
    text_button: {

        // color: "#7B7B7B"
        marginTop:20,
        width:170,
    },
    cardstyle:{
        marginTop:30,
      width:320,
        height:370,
        alignSelf:'center',
        borderBottomStartRadius:260,
        // borderRadius:50,
        // borderTopLeftRadius:50,
        borderTopStartRadius:40,
        borderTopEndRadius:40,
        borderBottomEndRadius:30

    },
    button_farword:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:60,
        backgroundColor:COLOR_APP_BLUE,
        borderRadius:50,
    }
});