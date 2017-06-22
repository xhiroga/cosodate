import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { SearchBar } from './common';

import { Actions } from 'react-native-router-flux';

const Home = (props) => {

  return(
    <View>
      <SearchBar />
      <TouchableOpacity onPress={()=>{Actions.list();}}>
        <Text>リスト</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
