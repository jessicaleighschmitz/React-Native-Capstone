import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SearchItem from './SearchItem';

function Search (){
  return(
    <View>
      <Text>Search works.</Text>
      <SearchItem />
    </View>
  );
}

export default Search;
