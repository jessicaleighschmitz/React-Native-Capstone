import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BookShelfItem from './components/BookShelfItem';

function BookShelf (){
  return(
    <View>
      <Text>Bookshelf works.</Text>
      <BookShelfItem />
    </View>
  );
}

export default BookShelf;
