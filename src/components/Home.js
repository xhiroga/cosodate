import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Image
 } from 'react-native';
import { Card } from './common';
import SearchBar from './common/SearchBar';

import { Actions } from 'react-native-router-flux';

class Home extends Component {

  renderStageItems(){
    const stages = {
      "ninsini":require("../img/btn_ninshini_on.gif"),
      "zerosai":require("../img/btn_zerosai_on.gif"),
      "ichisai":require("../img/btn_ichisai_on.gif"),
      "nisai":require("../img/btn_nisai_on.gif"),
      "sansai":require("../img/btn_sansai_on.gif"),
      "yonsai":require("../img/btn_yonsai_on.gif"),
      "gosai":require("../img/btn_gosai_on.gif"),
      "syougakusei":require("../img/btn_syougakusei_on.gif"),
    }
    const stageKeys = [
      "ninsini","zerosai","ichisai","nisai","sansai","yonsai","gosai","syougakusei"
    ]
    return stageKeys.map( key =>
      <TouchableHighlight underlayColor="white" style={{paddingLeft:5,paddingRight:5}}>
        <Image source={stages[key]} />
      </TouchableHighlight>
    );
  }

  renderPurposeItems(){
    const purpose = {
      "premama":require("../img/bg_premama.gif"),
      "fukushi":require("../img/bg_fukushi.gif"),
      "seikatu":require("../img/bg_seikatu.gif"),
      "hokyo":require("../img/bg_hokyo.gif")
    }
    const purposeKeys = [
      "premama","fukushi","seikatu","hokyo"
    ]
    return purposeKeys.map( key =>
      <TouchableHighlight underlayColor="white" style={{paddingLeft:5,paddingRight:5}}>
        <Image source={purpose[key]} />
      </TouchableHighlight>
    );
  }

  render (){
  const { containerStyle } = styles

    return(
      <View>
        <SearchBar />
        <TouchableOpacity onPress={()=>{Actions.list();}}>
          <Text>テスト用リンク</Text>
        </TouchableOpacity>

        <View style={{paddingTop:5,paddingBottom:5}}>
          <View style={{borderColor:"#C43B30", borderTopWidth:1, borderBottomWidth:1}}>
            <Text style={{fontSize:18, padding:5}}>
              ステージ別で見る
            </Text>
          </View>
          <ScrollView horizontal={true} style={{paddingTop:5,paddingBottom:5}}>
            <View style={{paddingLeft:5}}></View>
            {this.renderStageItems()}
         </ScrollView>
        </View>

        <View style={{paddingTop:5,paddingBottom:5}}>
          <View style={{borderColor:"#C43B30", borderTopWidth:1, borderBottomWidth:1}}>
            <Text style={{fontSize:18, padding:5}}>
              目的別で見る
            </Text>
          </View>
          <ScrollView horizontal={true} style={{paddingTop:5,paddingBottom:5}}>
            <View style={{paddingLeft:5}}></View>
            {this.renderPurposeItems()}
         </ScrollView>
        </View>

      </View>
    );
  }
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
