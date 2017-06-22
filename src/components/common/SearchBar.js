import React from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Input } from './'

const SearchBar = (props) => {

  const {containerStyle, pictStyle, inputStyle} = styles

  return (
    <View style={[containerStyle, props.style]}>
      <Image
        source ={require('./img/magnifier.png')}
        resizeMode = "contain"
        style={pictStyle}
      />
      <TextInput
        placeholder="何かお困りですか？"
        autoCorrect={false}
        value={props.inputtingWord}
        style={inputStyle}
      />
    </View>
  );
};




const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  pictStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 0,
    height:23, width:23,
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

const mapStateToProps = ({ search }) => {
  const { inputtingWord } = search;

  return { inputtingWord };
};

export default connect(mapStateToProps)(SearchBar);
