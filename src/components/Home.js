import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  Picker
 } from 'react-native';
import { connect } from 'react-redux'

import SearchBar from './SearchBar';
import {
  fetchAndStoreData,
  move2List,
} from '../actions'
import { TEXTS } from '../Texts'
import s from './styles';

class Home extends Component {

  // データが表示されるまで... 1.fetch 2.localでまとめる 3.検索条件などに合わせて生成
  // ここでは1.と2.をやる。
  componentWillMount() {
    // 将来的にはここで所属自治体リストと第一言語を渡してからaxiosで取得する

    this.props.fetchAndStoreData(); //jsonをリストに格納して渡す
  }

  renderImageButton(key,source,onPress){
    return(
      <TouchableOpacity
        key={key}
        onPress={onPress}
        style={{paddingLeft:5,paddingRight:5,}}
      >
        <Image source={source} />
      </TouchableOpacity>
    )
  }

  onNaviPress(key) {
    return () => {
      curatedData = this.curateInfo( key )
      this.props.move2List(key, curatedData);
    }
  }

  curateInfo( block ) {
    curatedData = []

    localData = this.props.localData
    subBlocks = conveter[block]
    localDataKeys.map( key => {
      console.log("key",key)
      console.log("this.props.localData",this.props.localData)

      console.log('localData[key]["category"]',localData[key]["category"])
      if ( -1 != ["facilities-info","health","subsidy","welfare"].indexOf(localData[key]["category"]) ){
        console.log("loop!")
        localData[key]["data"].map( record => {
          subBlocks.some ( subBlock => {
            if ( record[subBlock] == "true"){
              console.log("true!!!!")
              curatedData.push(record);
              return true; //mapだとこれで擬似breakできない,someだとできた
            }
          })
        })
      }
    })

    return curatedData
  }

  renderStageItems(){
    const stages = {
      "tummy":require("../img/btn_ninshini_on.gif"),
      "age0":require("../img/btn_zerosai_on.gif"),
      "age1":require("../img/btn_ichisai_on.gif"),
      "age2":require("../img/btn_nisai_on.gif"),
      "age3":require("../img/btn_sansai_on.gif"),
      "age4":require("../img/btn_yonsai_on.gif"),
      "age5":require("../img/btn_gosai_on.gif"),
      "over6":require("../img/btn_syougakusei_on.gif"),
    }
    const stageKeys = [
      "tummy","age0","age1","age2","age3","age4","age5","over6"
    ]
    return stageKeys.map( key =>
      this.renderImageButton(key,stages[key],this.onNaviPress(key))
    );
  }

  renderPurposeItems(){
    const purpose = {
      "pre_mom":require("../img/bg_premama.gif"),
      "welfare":require("../img/bg_fukushi.gif"),
      "life":require("../img/bg_seikatu.gif"),
      "childcare_education":require("../img/bg_hokyo.gif")
    }
    return (
      <View style={{  }}>
        <View style={{ flexDirection:'row', height:120 }}>
          {this.renderImageButton("pre_mom", purpose["pre_mom"], this.onNaviPress("pre_mom") )}
          {this.renderImageButton("welfare", purpose["welfare"], this.onNaviPress("welfare") )}
        </View>
        <View style={{ flexDirection:'row', height:120 }}>
          {this.renderImageButton("life", purpose["life"], this.onNaviPress("life") )}
          {this.renderImageButton("childcare_education", purpose["childcare_education"], this.onNaviPress("childcare_education") )}
        </View>
      </View>
    )
  }
// this.onHoge()すると、ロード時に即効呼んでしまう。this.onHoge.bind()が必要
// 要するに、関数が格納された変数を渡せよ、ということだろう。bind.this()は関数を返すと推察。

  render (){
    return(
      <ScrollView style={s.wallStyle}>
        <SearchBar />

        <View style={{paddingBottom:5}}>
          <View style={{borderColor:"#C43B30", borderTopWidth:1, borderBottomWidth:1}}>
            <Text style={{fontSize:18, padding:5}}>
              {TEXTS["findByStage"][this.props.lang]}
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
              {TEXTS["findByPurpose"][this.props.lang]}
            </Text>
          </View>
          <View style={{paddingTop:5,paddingBottom:5}}>
            {this.renderPurposeItems()}
         </View>
        </View>

        <View style={{paddingTop:5,paddingBottom:5}}>
          <View style={{borderColor:"#C43B30", borderTopWidth:1, borderBottomWidth:1}}>
            <Text style={{fontSize:18, padding:5}}>
              {TEXTS["setting"][this.props.lang]}
            </Text>
          </View>
          <View style={{paddingTop:5,paddingBottom:5,flexDirection:"row"}}>
            <Text style={{ flex:1 }}>言語設定</Text>
          </View>
        </View>

      </ScrollView>
    );
  }
};
// TODO: テキストの呼び出し方に改良の余地ないか？特にlang

const localDataKeys = [ "facilities-info", "health", "subsidy", "welfare", "facility", "news"]

// 目的別の大目的を小目的に読み替え表
const conveter = {
  "tummy" :["tummy"],
  "age0" :["age0"],
  "age1" :["age1"],
  "age2"   :["age2"],
  "age3"  :["age3"],
  "age4"  :["age4"],
  "age5"   :["age5"],
  "over6":["over6"],
  "pre_mom":["pregnant","birth"],
  "welfare":["economic","disabilities"],
  "life":["move_in","sick"],
  "childcare_education":  ["nursery","kindergarten","school"]
}

const mapStateToProps = ( state ) => {
  const { regions, lang, localData } = state.Init // Initに紐付くreducerのdefaultが返ってくる。
  return { regions, lang, localData }
}

export default connect(mapStateToProps, {
  fetchAndStoreData,
  move2List,
})(Home);
