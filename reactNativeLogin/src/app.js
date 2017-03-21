import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/index';
import LoginForm from './components/LoginForm';

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
        <LoginForm />
      </View>
    );
  }
}

export default App;
