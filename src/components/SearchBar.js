import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Image,
  Text,
  TextInput
 } from 'react-native';
import { connect } from 'react-redux';
import { wordChanged, saveSearchResult } from '../actions';
import { Actions } from 'react-native-router-flux';

class SearchBar extends Component {

  state = {
    "searchHistory":[]
  }

  componentDidMount(){
    AsyncStorage.getItem('searchHistory') //当該のキーがなければ(catchされるのではなく)nullが返る
      .then(req => {
        JSON.parse(req) //req初期値はnull
        // console.log("req",req)
        this.setState({"searchHistory":
          ( req === null ? [] : JSON.parse(req) )
        })
        // console.log(this.state)
      })
      .catch(error => console.log('error!'));
  }

  onWordChange(word){
    console.log("onWordChange(word){")
    console.log("word", word)
    this.props.wordChanged(word);
  };

  onEndEditing() { //onSubmitEditingはthisにtextを持たない。onWordChangeの入力結果をもらう必要がある。

    const timestamp = String(Date.now())
    const json = {}
    json[timestamp] = this.props.inputtingWord
    console.log("json",json)
    console.log("this.state",this.state)
    this.state["searchHistory"].push(json)
    AsyncStorage.setItem('searchHistory',JSON.stringify(this.state["searchHistory"]));
    console.log("AsyncStorage.getItem(searchHistory)",AsyncStorage.getItem("searchHistory"))

    searchResult = this.searchInfo( this.props.inputtingWord )
    console.log("this is searchResult,", searchResult)

    this.props.saveSearchResult(searchResult)
    Actions.list();
  };

  searchInfo(word){
    console.log("searching ",word)

    searchResult = []

      localData = this.props.localData
      rg = word.trim().replace(/\s+/g, '|')
      console.log("this is localdata,",localData)
      console.log("this is localdata.keys(),",localData.keys())
      console.log("this is word and  rg",word,rg)
      console.log("localDataKeys",localDataKeys)

      localDataKeys.map( key => {
        console.log("in localData.map( category => {")
        localData[key]["data"].map( record => {
            console.log('category["data"].map( record => {')

          if ( record["text"].search(rg) != -1 ){
            console.log("true!!!!")
            searchResult.push(record);
            return true; //mapだとこれで擬似breakできない,someだとできた
          }
        })
      })

    return searchResult
  }




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
            onSubmitEditing={() => this.onEndEditing()}
            value={this.props.inputtingWord}
            style={inputStyle}
          />
        </View>
      </View>
    );
  }
};


const localDataKeys = [ "facilities-info", "health", "subsidy", "welfare", "facility", "news"]

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

const mapStateToProps = ( state ) => {
  console.log("state",state)
  const { inputtingWord } = state.Search;
  const { localData } = state.Init;
  return { inputtingWord, localData };
};

export default connect(mapStateToProps,{
  wordChanged, saveSearchResult
})(SearchBar);
