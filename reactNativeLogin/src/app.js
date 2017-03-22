import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common/index';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCc7gicqo741H_RnKdnI0KssHEA6II4kyI',
      authDomain: 'reactnativelogin.firebaseapp.com',
      databaseURL: 'https://reactnativelogin.firebaseio.com',
      storageBucket: 'reactnativelogin.appspot.com',
      messagingSenderId: '331972565453'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );

      case false:
        return <LoginForm />;

      default:
        return (
          <CardSection style={styles.spinnerStyle}>
            <Spinner size='large' />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication'/>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;
