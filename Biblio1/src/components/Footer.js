import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Button, Text, Image, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class Footer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Footer</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="BookShelf"
          onPress={() => this.props.navigation.navigate('BookShelf')}
        />
        <Button
          title="Lineup"
          onPress={() => this.props.navigation.navigate('Lineup')}
        />
      </View>
    );
  }
}
export default Footer;
