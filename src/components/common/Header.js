// Import libraries for making a component
import React from 'react';
import { Text, ScrollView } from 'react-native';

// Make a component
const Header = (props) => {
  
  return (
    <ScrollView style={styles.containerStyle}>
      <Text style={styles.textStyle}>
        {props.topText}
      </Text>
    </ScrollView>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    padding: 5,
    borderColor: '#C43B30',
    borderBottomWidth: 1,
    position: 'relative',
    shadowColor: '#000',
    flex:1,
  },
  textStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 23,
    flex: 1,
  }
}


// Make the component available to other parts of the app
export { Header };
