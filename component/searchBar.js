import React ,{Component} from 'react';
import {View,TextInput} from 'react-native'

export default class SearchBar extends Component {

    render(){
        return <View style={{flex:1 ,backgroundColor:"green"}} >
        
        
        <TextInput style={{borderWidth:2,borderColor:'black',height:30}}></TextInput>
        
        </View>
    }
}
