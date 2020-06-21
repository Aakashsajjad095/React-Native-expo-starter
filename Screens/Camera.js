/**
 * Created by Aakash Sajjad on 6/20/2020.
 */
import React, { Component } from 'react';
import { View,StyleSheet,Text,Dimensions,ScrollView,TouchableOpacity,FlatList,Alert,Image} from 'react-native';
// import {background} from '../constants/images'
// import { Block, Button, Text, Utils } from "expo-ui-kit";
import { Container, Header, Left, Body, Right, Button, Icon, Title,Card,Footer,FooterTab,Content } from 'native-base';
import { Ionicons,Entypo,AntDesign,SimpleLineIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { Block, theme } from 'galio-framework';
import {COLOR_APP_BLACK, COLOR_APP_BLUE,APP_COLOR_Background,commonpropcolor,BACKGROUND_CONTENT_COLOR,Top_Tabbar_color,Buttom_tabbar_color,COLOR_APP_WHITE,BORDER_INPUT} from "../constants/Colors";
import {background} from '../constants/images';
import { CardMedia,CardContent } from 'material-bread';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Camera extends Component{

    GoBack = () =>{
         this.props.navigation.goBack(null);
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <Content>
                    <View  style={styles.square}>
<View style={styles.square2}>
    <Entypo style={{marginTop:30,textAlign:'center'}} name="upload" size={60} color="#7B7B7B" />
</View>
                    </View>
                </Content>
                <Footer style={{ backgroundColor: COLOR_APP_BLUE }}>
                    <FooterTab>
                        <Left>
                            <Text style={styles.text_footer}>Camera Roll</Text>
                        </Left>
                        <View
                            style={{
                                borderLeftWidth: 1,
                                borderLeftColor: 'white',
                            }}
                        />
                    <Right>
                        <Text style={styles.text_footerright}>Upload Photo</Text>
                    </Right>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
    renderHeader = () => {
        return(
            <View>
                <Header style={{backgroundColor:COLOR_APP_BLUE}}>
                    <Left>
                        <Button transparent>
                            <AntDesign onPress={this.GoBack} name="arrowleft" size={24} color="white" />
                        </Button>
                    </Left>
                    <Body>
                    <Title style={styles.text_gps}>Upload Photo</Title>
                    </Body>
                <Right/>
                </Header>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_CONTENT_COLOR,
    },
    text_gps: {
        fontSize: 20,
        // color: "#7B7B7B"
        textAlign:'center',
        fontWeight:"bold",
        color:'#fefefe'
    },
    text_footer: {
        fontSize: 18,
        // color: "#7B7B7B"
        //fontWeight:"bold",
        color:'#fefefe',
        marginLeft:10,
        textAlign:'center'
    },
    text_footerright: {
        fontSize: 18,
        // color: "#7B7B7B"
        //fontWeight:"bold",
        color:'#fefefe',
        marginRight:10,
        textAlign:'center'
    },
    text_button: {

        // color: "#7B7B7B"
        marginTop:20,
        width:170,
    },
    text_upload: {

       textAlign:'center',
        justifyContent:'center'
    },
    square: {
        width: 180,
        height: 180,
        // backgroundColor: 'red',
        alignSelf:'center',
        alignContent:'center',
        marginTop:170,
        borderWidth:6,
        borderColor:COLOR_APP_BLUE
    },
    square2: {
        width: 140,
        height: 140,
        alignSelf:'center',
        // backgroundColor: 'red',
        marginTop:13,
        textAlign:'center',
        borderWidth:4,
        borderColor:COLOR_APP_BLUE
    },
    picker_logo: {
       textAlign:'center',
        marginTop:20
    }
});