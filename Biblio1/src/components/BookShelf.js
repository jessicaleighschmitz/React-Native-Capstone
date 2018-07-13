import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Button, Text, Image, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Footer from './Footer';

class BookShelf extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bookshelf Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Footer />
      </View>
    );
  }
}

export default BookShelf;
