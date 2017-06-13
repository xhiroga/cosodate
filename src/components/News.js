// Listからもらった情報を表示するだけのビュー
// 将来的に施設用、サービス用に拡張版を作る

import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Linking} from 'react-native';


// 外部リンクをクリックすると当該ページに飛ぶ

// タイトル、だれ、いつ、本文、外部リンク、の構成
// 単純なスタイルなのでconstで宣言して良い

const News = (props) => {

  const {navigation, news} = props

  const {
    referenceContentStyle
  } = styles;

// 改行はこの子の仕事
  return(
    <ScrollView style = {{paddingTop:10}}>
      <View style={styles.titleContetStyle_News}>
        <Text style={styles.titleTextStyle}>
          {news.title}
        </Text>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.authorTextStyle}> {news.author} {news.date} </Text>
        </View>
      </View>

      <View>
        <Text>
          {news.text}
        </Text>
      </View>

      <TouchableOpacity
        onPress={ ()=>{Linking.openURL('http://www.city.mitaka.tokyo.jp/c_news/064/064574.html')} }
        style={styles.referenceContentStyle}
        >
        <Text style={styles.referenceTitle}>
          外部リンク
         </Text>
        <Text> {news.link} </Text>
      </TouchableOpacity>
    </ScrollView>
  );

};

//218	233	218	;
// 多分navigation={navigation}するとheaderが召喚できる

const styles = {
  titleContetStyle_News:{
    backgroundColor: '#D5E8D5',
    padding:5,
    marginTop:5,
    marginBottom:5,
  },

  titleTextStyle:{
    flex:1,
    fontSize:20,
    textAlign: 'left',

  },

  authorTextStyle:{
    flex:1,
    textAlign: 'right'
  },

  referenceContentStyle:{
    backgroundColor: '#F5F3EB',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {witdh:0, height:2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  referenceTitle:{

  },

};

export default News;
