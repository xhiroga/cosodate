import React, { Component } from 'react';
import {
  Image,
  ListView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
 } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { TEXTS } from '../Texts'
import SearchBar from './SearchBar';
import {
  fetchAndStoreData,
  move2List,
  openContentsMetaDataOnState,
} from '../actions'
import {Card} from './common';
import s from './styles';

class Home extends Component {

  constructor(props) {
    super(props)
    this.renderColumn = this.renderColumn.bind(this)
  }

  // データが表示されるまで... 1.fetch 2.localでまとめる 3.検索条件などに合わせて生成
  // ここでは1.と2.をやる。
  componentWillMount() {
    // 将来的にはここで所属自治体リストと第一言語を渡してからaxiosで取得する

    this.props.fetchAndStoreData() //jsonをリストに格納して渡す
    this.props.openContentsMetaDataOnState()
    this.curateOftenView(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.curateOftenView(nextProps)
  }

  // 悩み... propsが更新されるたびにこの処理が呼ばれるので、重くて仕方ない。
  curateOftenView({ localData, contentsMetaData }) {
    const oftenContents = []

    contentsMetaData.map( challenger => {
      if (oftenContents.length < 10) {
        oftenContents.push(challenger)
      } else {
        oftenContents.map( (elite10, index) => {
          if (challenger['privateImpressions'] > elite10['privateImpressions']){
            oftenContents.splice(index,1)
            oftenContents.push(challenger)
            console.log("oftenContents... challenger win!!",elite10)
          }
        })
      }
    })
    this.setDataSource(oftenContents)
  }

  setDataSource( oftenContents ) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.recentViewDS = ds.cloneWithRows(oftenContents)
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
      this.props.move2List(key, curatedData)
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
        <View style={{ flexDirection:'row', justifyContent:'space-around', height:120}}>
          {this.renderImageButton("pre_mom", purpose["pre_mom"], this.onNaviPress("pre_mom") )}
          {this.renderImageButton("welfare", purpose["welfare"], this.onNaviPress("welfare") )}
        </View>
        <View style={{ flexDirection:'row', justifyContent:'space-around', height:120 }}>
          {this.renderImageButton("life", purpose["life"], this.onNaviPress("life") )}
          {this.renderImageButton("childcare_education", purpose["childcare_education"], this.onNaviPress("childcare_education") )}
        </View>
      </View>
    )
  }
// this.onHoge()すると、ロード時に即効呼んでしまう。this.onHoge.bind()が必要
// 要するに、関数が格納された変数を渡せよ、ということだろう。bind.this()は関数を返すと推察。


  getLocalDataByKey(key) {
    var data = {}
    localData = this.props.localData

    localDataKeys.map( category => {
      localData[category]["data"].map( record => {
        if ( record.key == key ){
          console.log("bingo!")
          data = record
        }
      })
    })

    return data
  }

  epoch2DateString(str) {
    dt = new Date(0)
    dt.setUTCMilliseconds(str)
    return ((dt.getYear()+1900)+'/'+(dt.getMonth()+1)+'/'+dt.getDate())
  }

  renderColumn(recent) {
    let info = {}
    console.log("here map recent",recent)

    const content = this.getLocalDataByKey(recent.key)
    console.log("content",content)

    return (
      <Card>
        <TouchableOpacity
          style={styles.container}
          key={recent.key}
          onPress={()=>Actions.info({ info: content, headerOfInfo: content.name })}
        >
          <Text numberOfLines={1}>
            {content.name}
          </Text>
          <View style={styles.metaContainer}>
            <Text style={styles.metaTexts}>
              {TEXTS['privateImpressions_short'][this.props.lang]}
              ・
              {recent['privateImpressions']}
            </Text>
            <Text style={styles.metaTexts}>
              {TEXTS['lastBrowse_short'][this.props.lang]}
              ・
              {this.epoch2DateString(recent['lastBrowse'])}
            </Text>
          </View>

        </TouchableOpacity>
      </Card>
    )
  }

  render( ){
    return(
      <ScrollView style={s.wallStyle}>
        <SearchBar />

        <View style={{paddingBottom:5}}>
          <Text style={s.statementText}>
            {TEXTS["oftenView"][this.props.lang]}
          </Text>
          <ScrollView>
            <ListView horizontal={true} dataSource={this.recentViewDS} renderRow={this.renderColumn} style={s.listViewPad} />
          </ScrollView>
        </View>

        <View style={{paddingBottom:5}}>
          <Text style={s.statementText}>
            {TEXTS["findByStage"][this.props.lang]}
          </Text>
          <ScrollView horizontal={true} style={{paddingTop:5,paddingBottom:5}}>
            <View style={{paddingLeft:5}}></View>
            {this.renderStageItems()}
         </ScrollView>
        </View>

        <View style={{paddingTop:5,paddingBottom:5}}>
          <Text style={s.statementText}>
            {TEXTS["findByPurpose"][this.props.lang]}
          </Text>
          <View style={{paddingTop:5,paddingBottom:5}}>
            {this.renderPurposeItems()}
         </View>
        </View>

      </ScrollView>
    );
  }
};

// <View style={{paddingTop:5,paddingBottom:5}}>
//   <View style={{borderColor:"#C43B30", borderTopWidth:1, borderBottomWidth:1}}>
//     <Text style={{fontSize:18, padding:5}}>
//       {TEXTS["setting"][this.props.lang]}
//     </Text>
//   </View>
// </View>


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

var styles = {
  container:{
    flex: 1,
    alignItems: 'center',
    width: 160,
    padding: 10,
  },
  metaContainer:{
    marginTop:5
  },
  metaTexts: {
    fontSize: 12,
    color: 'gray',
  },

}

const mapStateToProps = ( state ) => {
  const { regions, lang, localData, contentsMetaData } = state.Init // Initに紐付くreducerのdefaultが返ってくる。
  return { regions, lang, localData, contentsMetaData }
}

export default connect(mapStateToProps, {
  fetchAndStoreData,
  move2List,
  openContentsMetaDataOnState,
})(Home);
