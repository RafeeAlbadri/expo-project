import React ,{Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';


export default class Header extends Component {

    render(){
        return(

         <View  style={{height:60,flexDirection:"row", backgroundColor:"white",justifyContent:"center"}} >
        <Image style={{height:60,width:60,alignItems:"center",}} resizeMode="cover" source={require("../assets/nbc_news_logo.png")}/>
     
        </View>
        )
    }
}


