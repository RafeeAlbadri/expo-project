import React ,{Component} from 'react';
import {View,TextInput} from 'react-native'

export default class SearchBar extends Component {

    render(){
        return <View style={{flex:1 }} >
        
        
        <TextInput style={{height:35,backgroundColor:"#ecf0f1",borderRadius:15,paddingLeft:10,paddingRight:10}} placeholder="Search"></TextInput>
       
        
        
        </View>
    }
}
