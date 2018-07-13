import React from 'react';
import LandingPage from './components/LandingPage';
import Bookshelf from './components/BookShelf';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';

const RootStack = createStackNavigator(
  {
    Home: LandingPage,
    Bookshelf: Bookshelf,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {

  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({

});
