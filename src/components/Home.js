import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Card } from './common';
import SearchBar from './common/SearchBar';

import { Actions } from 'react-native-router-flux';

const Home = (props) => {

  const { containerStyle } = styles

  return(
    <View>
      <SearchBar />
      <TouchableOpacity onPress={()=>{Actions.list();}}>
        <Text>テスト用リンク</Text>
      </TouchableOpacity>
    </View>

  );
};

// <View style={containerStyle}>
//   <Card>
//   </Card>
// </View>


const styles ={
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    flex:1
  }
}

export default Home;
