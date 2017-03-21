import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/index';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCc7gicqo741H_RnKdnI0KssHEA6II4kyI',
      authDomain: 'reactnativelogin.firebaseapp.com',
      databaseURL: 'https://reactnativelogin.firebaseio.com',
      storageBucket: 'reactnativelogin.appspot.com',
      messagingSenderId: '331972565453'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication'/>
        <Text>thats all</Text>
      </View>
    );
  }
}

export default App;
