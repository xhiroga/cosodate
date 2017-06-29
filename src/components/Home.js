import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image
 } from 'react-native';
import { connect } from 'react-redux'

import SearchBar from './SearchBar';
import {
  fetchAndStoreData,
  move2List,
} from '../actions'
import { TEXTS } from '../Texts'

class Home extends Component {

  // データが表示されるまで... 1.fetch 2.localでまとめる 3.検索条件などに合わせて生成
  // ここでは1.と2.をやる。
  componentWillMount() {
    // 将来的にはここで所属自治体リストと第一言語を渡してからaxiosで取得する
    console.log('here App. next fetching data and make localStorage and save it');

    console.log(this.props.fetchAndStoreData)
    this.props.fetchAndStoreData(); //jsonをリストに格納して渡す
  }


  renderStageItems(){
    const stages = {
      "ninsin":require("../img/btn_ninshini_on.gif"),
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
      this.renderImageButton(key,stages[key],this.onNaviPress(key))
    );
  }


  renderImageButton(key,source,onPress){
    return(
      <TouchableOpacity
        ket={key}
        onPress={onPress}
        style={{paddingLeft:5,paddingRight:5,}}
      >
        <Image source={source} />
      </TouchableOpacity>
    )
  }


  onNaviPress( block ) {
    //この行に何か書いたらjsxの解釈時に実行される。注意。
    return () => {
      console.log("here in onPurposePress, ", this.props.localData)
      curatedData = this.curateInfo( block )
      this.props.move2List(topTexts[block],curatedData);
    }
  } // 匿名関数を返せばjsxのロード時にonPressが暴発しない


  curateInfo( block ) {
    console.log("here curateInfo,", block)
    curatedData = []

    localDataKeys.map( key => {
      // console.log("key",key)
      // console.log("this.props.localData",this.props.localData)
      localData = this.props.localData
      subBlocks = conveter[block]

      if (localData[key]["category"] == "info"){
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

  searchInfo(){
    console.log("ここではsearchして結果を納めるだけ。非同期的にlistに移動する")
  }

  renderPurposeItems(){
    const purpose = {
      "premama":require("../img/bg_premama.gif"),
      "fukushi":require("../img/bg_fukushi.gif"),
      "seikatu":require("../img/bg_seikatu.gif"),
      "hokyo":require("../img/bg_hokyo.gif")
    }
    return (
      <View style={{  }}>
        <View style={{ flexDirection:'row', height:120 }}>
          {this.renderImageButton("premama", purpose["premama"], this.onNaviPress("premama") )}
          {this.renderImageButton("fukushi", purpose["fukushi"], this.onNaviPress("fukushi") )}
        </View>
        <View style={{ flexDirection:'row', height:120 }}>
          {this.renderImageButton("seikatu", purpose["seikatu"], this.onNaviPress("seikatu") )}
          {this.renderImageButton("hokyo", purpose["hokyo"], this.onNaviPress("hokyo") )}
        </View>
      </View>
    )
  }
// this.onHoge()すると、ロード時に即効呼んでしまう。this.onHoge.bind()が必要
// 要するに、関数が格納された変数を渡せよ、ということだろう。bind.this()は関数を返すと推察。

  generateListByPurpose(purpose) {
    data = this.props.data
  }

  render (){
    return(
      <ScrollView>
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
          <View style={{paddingTop:5,paddingBottom:5}}>

          </View>
        </View>

      </ScrollView>
    );
  }
};
// TODO: テキストの呼び出し方に改良の余地ないか？特にlang

const localDataKeys = [ "Info_Facilities", "Info_Health", "Info_Subsidies", "Info_Welfare", "Facilities", "News"]

// 目的別の大目的を小目的に読み替え表
const conveter = {
  "ninsin" :["tummy"],
  "zerosai" :["age0"],
  "ichisai" :["age1"],
  "nisai"   :["age2"],
  "sansai"  :["age3"],
  "yonsai"  :["age4"],
  "gosai"   :["age5"],
  "syougakusei":["over6"],
  "premama":["pregnant","birth"],
  "fukushi":["economic","disabilities"],
  "seikatu":["move-in","sick"],
  "hokyo":  ["nursery","kindergarten","school"]
}

// ナビ画面のトップの文字...本当は一箇所にまとめてグローバル化しておくべし
const topTexts = {
  "premama" :"プレママ",
  "fukushi" :"福祉",
  "seikatu" :"生活",
  "hokyo"   :"教育・保険",
  "ninsin" :"妊娠",
  "zerosai" :"0歳",
  "ichisai" :"1歳",
  "nisai"   :"2歳",
  "sansai"  :"3歳",
  "yonsai"  :"4歳",
  "gosai"   :"5歳",
  "syougakusei":"小学生以上",

}

const mapStateToProps = ( state ) => {
  const { regions, lang, localData } = state.Init // Initに紐付くreducerのdefaultが返ってくる。
  return { regions, lang, localData }
}

export default connect(mapStateToProps, {
  fetchAndStoreData,
  move2List,
})(Home);
