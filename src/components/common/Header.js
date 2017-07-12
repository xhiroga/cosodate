// Import libraries for making a component
import React from 'react';
import { View, Text } from 'react-native';

// Make a component
const Header = (props) => {

  return (
    <View style={props.style, styles.containerStyle}>
      <Text style={styles.textStyle}>
        {props.topText}
      </Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    position: 'relative',
    shadowColor: '#000',
  },
  textStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 23,
  }
}


// Make the component available to other parts of the app
export { Header };
