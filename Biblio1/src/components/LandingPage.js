import React from 'react';
import { StyleSheet, TouchableHighlight, Button, Text, Image, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class LandingPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Landing Page</Text>
        <Button
          title="Go to Bookshelf"
          onPress={() => this.props.navigation.navigate('Bookshelf')}
        />
      </View>
    );
  }
}
export default LandingPage;
