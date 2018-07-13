import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ReadingNowPreviewItem from './ReadingNowPreviewItem';


function ReadingNowPreview (){
  return(
    <View>
      <Text> rn Preview works.</Text>
      <ReadingNowPreviewItem />
    </View>
  );
}

export default ReadingNowPreview;
