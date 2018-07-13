import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ReadingNowItem from './ReadingNowItem';

function ReadingNow (){
  return(
    <View>
      <Text>ReadingNow works.</Text>
      <ReadingNowItem />
    </View>
  );
}

export default ReadingNow;
