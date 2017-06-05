import React from 'react';
import { View,Image } from 'react-native';

const Header = () => {
  const {viewStyle} = styles

  return(
    <View style={viewStyle}>
      <Image source ={require('../img/logo.gif')} resizeMode = "contain" style={{height:50}} />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {witdh:0, height:2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};


export default Header;
