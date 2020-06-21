/**
 * Created by Aakash Sajjad on 6/20/2020.
 */
import React, { Component } from 'react';
import { View,StyleSheet,Text,Dimensions,ScrollView,TouchableOpacity,FlatList,Alert,Image} from 'react-native';
// import {background} from '../constants/images'
// import { Block, Button, Text, Utils } from "expo-ui-kit";
import { Container, Header, Left, Body, Right, Button, Icon, Title,Card, } from 'native-base';
import { Ionicons,Entypo,AntDesign,SimpleLineIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { Block, theme } from 'galio-framework';
import {COLOR_APP_BLACK, COLOR_APP_BLUE,APP_COLOR_Background,commonpropcolor,BACKGROUND_CONTENT_COLOR,Top_Tabbar_color,Buttom_tabbar_color,COLOR_APP_WHITE,BORDER_INPUT} from "../constants/Colors";
import {background} from '../constants/images';
import { CardMedia,CardContent } from 'material-bread';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data1 = [
    {
        imageUrl:background.ginger,
        title: "Ginger",
        rate:60.00,
        tag:1000,
        colorcode:COLOR_APP_BLUE,
    },
    {
        imageUrl:background.ginger,
        title: "Ginger",
        rate:60.00,
        tag:1000,
        colorcode:'black',
    },
    {
        imageUrl: background.ginger,
        title: "Ginger",
        rate:60.00,
        tag:1000,
        colorcode:COLOR_APP_BLUE,
    },
    {
        imageUrl: background.ginger,
        title: "Ginger",
        rate:60.00,
        tag:1000,
        colorcode:'black',
    },
];

export default class Home extends Component{


    openCameraScreen = () =>{
        // this.props.navigation.goBack(null);
        // Alert.alert("Foods & Drinks Screen open")
        this.props.navigation.navigate('Camera')
    }
    onValueChange(value) {
        Alert.alert(value)
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <ScrollView>
                {this.renderheaderCard()}
                <SimpleLineIcons style={{alignSelf:'center'}} name="arrow-down" size={40} color="white" />
                    {this.renderFeatures()}
                    {this.renderNewProduct()}
                </ScrollView>
            </View>
        );
    }

    renderHeader = () => {
        return(
           <View>
               <Header style={{backgroundColor:COLOR_APP_BLUE}}>
                   <Left>
                       <Button transparent>
                           <Icon name='menu' style={{color:COLOR_APP_WHITE}} />
                       </Button>
                   </Left>
                   <Body>
                   <Title style={styles.text_gps}>Store</Title>
                   </Body>
                   <Right>
                       <AntDesign onPress={this.openCameraScreen} name="camera" size={24} color="white" />
                   </Right>
               </Header>
           </View>
        )
    }
    renderheaderCard = () => {
        return(
                <Card  style={styles.cardstyle}>
                    <View>
                    <Text style={styles.text_category}>All Categories</Text>
                        <View  style={{flexDirection:'row'}}>
                        <View   style={styles.common_field}>
                            <TouchableOpacity
                                style={styles.button_farword}
                                onPress={this.openHomeScreen}
                            >
                                <MaterialCommunityIcons name="egg-easter" size={30} color="#FFA500" />
                            </TouchableOpacity>
                            <Text style={styles.common_text}>EGGS</Text>
                        </View>
                            <View   style={styles.common_field}>
                                <TouchableOpacity
                                    style={styles.button_farword}
                                    onPress={this.openHomeScreen}
                                >
                                    <MaterialCommunityIcons name="egg-easter" size={30} color="#FFA500" />
                                </TouchableOpacity>
                                <Text style={styles.common_text}>Meat</Text>
                            </View>
                            <View   style={styles.common_field}>
                                <TouchableOpacity
                                    style={styles.button_farword}
                                    onPress={this.openHomeScreen}
                                >
                                    <MaterialCommunityIcons name="egg-easter" size={30} color="#FFA500" />
                                </TouchableOpacity>
                                <Text style={styles.common_text}>Vegetables</Text>
                            </View>
                            <View   style={styles.common_field}>
                                <TouchableOpacity
                                    style={styles.button_farword}
                                    onPress={this.openHomeScreen}
                                >
                                    <MaterialCommunityIcons name="egg-easter" size={30} color="#FFA500" />
                                </TouchableOpacity>
                                <Text style={styles.common_text}>EGGS</Text>
                            </View>
                        </View>
                    </View>
                </Card>
        )
    }
    renderFeatures = () => {
        return(
            <Block flex>
                <View style={{flexDirection:'row'}}>
                    <Text bold size={16} style={styles.title}>
                        Featured Products
                    </Text>
                    <Right>
                    <Text
                        style={styles.viewall}
                        size={12}
                        color={theme.COLORS.PRIMARY}
                    >View All <Ionicons name="ios-arrow-forward" size={24} color='#939393' /></Text>
                    </Right>

                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data1}
                    renderItem={({ item: rowData }) => {
                        return (
                            <Card style={{width:170,height:180,marginLeft:10,marginTop:10}} onPress={this.onValueChange.bind(this, rowData.title)}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.TagStyle}>{rowData.tag}</Text>
                                    <Right>
                                        <AntDesign style={{marginRight:10,marginTop:10}} name="heart" size={24} color="#000066" />
                                    </Right>
                                </View>
                                <MaterialCommunityIcons style={{alignSelf:'center'}} name="egg-easter" size={60} color="#FFA500" />
                                <CardContent >
                                    <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 16, fontWeight: '600', marginBottom: 6 }}>
                                        {rowData.title}
                                    </Text>
                                    <Text style={{ color: COLOR_APP_BLUE, fontSize: 16,fontWeight:'bold' }}>RS.{rowData.rate}.00</Text>
                                </CardContent>
                            </Card>

                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Block>
        )
    }
    renderNewProduct = () => {
        return(
            <Block flex>
                <View style={{flexDirection:'row'}}>
                    <Text bold size={16} style={styles.title}>
                        New Products
                    </Text>
                    <Right>
                        <Text
                            style={styles.viewall}
                            size={12}
                            color={theme.COLORS.PRIMARY}
                        >View All <Ionicons name="ios-arrow-forward" size={24} color='#939393' /></Text>
                    </Right>

                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data1}
                    renderItem={({ item: rowData }) => {
                        return (
                            <Card style={{width:170,height:180,marginLeft:10,marginTop:10}} onPress={this.onValueChange.bind(this, rowData.title)}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.TagStyle}>{rowData.tag}</Text>
                                    <Right>
                                        <AntDesign style={{marginRight:10,marginTop:10}} name="heart" size={24} color="#000066" />
                                    </Right>
                                </View>
                                <MaterialCommunityIcons style={{alignSelf:'center'}} name="egg-easter" size={60} color="#FFA500" />
                                <CardContent >
                                    <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 16, fontWeight: '600', marginBottom: 6 }}>
                                        {rowData.title}
                                    </Text>
                                    <Text style={{ color: COLOR_APP_BLUE, fontSize: 16,fontWeight:'bold' }}>RS.{rowData.rate}.00</Text>
                                </CardContent>
                            </Card>

                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Block>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: BACKGROUND_CONTENT_COLOR,
       // alignItems: 'center'
    },
    text_gps: {
        fontSize: 20,
        // color: "#7B7B7B"
        fontWeight:"bold",
        color:'#fefefe'
    },
    title:{
        fontSize: 18,
        marginLeft:10,
         color: APP_COLOR_Background,
        fontWeight:"bold",
    },
    viewall:{
        fontSize: 15,
        marginRight:10,
        color: BORDER_INPUT,
    },
    text_category: {
        fontSize: 15,
        // color: "#7B7B7B"
        fontWeight:"bold",
        marginTop:10,
        marginLeft:10,
        color:APP_COLOR_Background
    },
    text_button: {

        // color: "#7B7B7B"
        marginTop:20,
        width:170,
    },
    cardstyle:{
        width:windowWidth,
        height:150,
        borderBottomStartRadius:40,
        borderBottomEndRadius:40,

    },
    common_field: {
        // alignSelf:'flex-end',
        flexDirection:'column',
        marginTop:10,
        marginLeft:10,
        marginRight:10
    },
    common_text:{
        alignSelf:'center',color:BORDER_INPUT,
    },
    button_farword:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        height:70,
        backgroundColor:BACKGROUND_CONTENT_COLOR,
        borderRadius:50,
    },
    TagStyle:
        {
            // borderWidth: 1,
            // borderRadius: 45,
            // borderColor: 'white',
            height:23,
            width:50,
            textAlign:'center',
            color:'white',
            marginLeft:10,
            marginTop:10,
            backgroundColor: COLOR_APP_BLUE

        },
});