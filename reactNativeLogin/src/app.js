import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common/index';

class App extends Component {
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
