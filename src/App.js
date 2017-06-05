import React from 'react';
import { Text, View } from 'react-native';
import Header from './components/Header';
import NewsList from './components/NewsList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header />
    <NewsList />
  </View>
);



export default App;
