import React, { Component } from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { wordChanged, inputEnd } from '../actions';

class SearchBar extends Component {

  onWordChange(word){
    this.props.wordChanged(word);
  };

  onInputEnd(word){
    this.props.inputEnd(word);
  };

  render(){
    const {containerStyle, shironukiStyle, pictStyle, inputStyle} = styles
    return (
      <View style={[containerStyle, this.props.style]}>
        <View style={shironukiStyle}>
          <Image
            source ={require('./img/magnifier.png')}
            resizeMode = "contain"
            style={pictStyle}
          />
          <TextInput
            placeholder="なにかお困りですか？"
            autoCorrect={false}
            onChangeText={this.onWordChange.bind(this)}
            onEndEditing={this.onInputEnd.bind(this)}
            value={this.props.inputtingWord}
            style={inputStyle}
          />
        </View>
      </View>
    );
  }
};




const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#efeff2',
    justifyContent: 'flex-start',
    // borderColor: '#ddd',
    // borderWidth: 0,
    position: 'relative'
  },
  shironukiStyle:{
    flexDirection: 'row',
    borderRadius:5,
    backgroundColor: '#fff',
    height: 30,
  },
  pictStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    height:23, width:23,
    alignSelf:"center",
    flex: 0,
  },
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  }
};

const mapStateToProps = ({ search }) => {
  const { inputtingWord } = search;
  return { inputtingWord };
};

export default connect(mapStateToProps,{
  wordChanged, inputEnd
})(SearchBar);
