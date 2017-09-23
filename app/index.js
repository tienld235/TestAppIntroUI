import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Register from './Register/';
import Login from './Login'

export default class App extends Component{
    render(){
        return(
          <Register/>  
        )
    }
}