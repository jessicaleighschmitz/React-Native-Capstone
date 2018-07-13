import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './components/LandingPage';
// import BookShelf from './components/BookShelf';
import {createStackNavigator, } from 'react-navigation';


export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const styles = StyleSheet.create({

});

const RootStack = createStackNavigator({
  Landing: LandingPage,
  BookShelf: BookShelf,
 },
 {
   initialRouteName: 'LandingPage',
 }
);


export default App;
