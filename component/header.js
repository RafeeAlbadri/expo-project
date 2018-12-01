import React ,{Component} from 'react';
import {View,Text,Image} from 'react-native';

export default class Header extends Component {

    render(){
        return(

         <View  style={{height:60,flexDirection:"row", backgroundColor:"red"}} >
        <Image style={{height:60,width:60}} resizeMode="cover" source={require("../assets/logo.jpg")}/>
        <Text>News Application</Text>
        </View>
        )
    }
}
