// Listからもらった情報を表示するだけのビュー
// 将来的に施設用、サービス用に拡張版を作る

import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Linking} from 'react-native';


// 外部リンクをクリックすると当該ページに飛ぶ

// タイトル、だれ、いつ、本文、外部リンク、の構成
// 単純なスタイルなのでconstで宣言して良い

const News = () => {
  // ここでonpressとかnavigatorとか受け取る
  // news関連の項目も受け取る

  const {
    referenceContentStyle
  } = styles;

  return(
    <ScrollView style = {{paddingTop:10}}>
      <View style={styles.titleContetStyle_News}>
        <Text style={styles.titleTextStyle}>
          三鷹ちびっ子農園 参加者募集
        </Text>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.authorTextStyle}> みたか子育てねっと 2017-03-10 </Text>
        </View>
      </View>

      <View>
        <Text>
          平成29年度の参加家族を募集します  ちびっ子農園では、種まきから収穫まで、1年を通していろいろな野菜を共同作業で育てます。    対象と定員  市内の3歳から中学生までのお子さんとその保護者60家族。    期間  平成29年4月から1年間、毎週日曜日午前9時から正午まで。    場所  三鷹ちびっ子  農園新川三丁目6番1号  駐車場はありません。徒歩や自転車にて登園してください。    詳細は三鷹市ホームページ
        </Text>
      </View>

      <TouchableOpacity
        onPress={ ()=>{Linking.openURL('http://www.city.mitaka.tokyo.jp/c_news/064/064574.html')} }
        style={styles.referenceContentStyle}
        >
        <Text style={styles.referenceTitle}>
          外部リンク
         </Text>
        <Text> http://www.city.mitaka.tokyo.jp/c_news/064/064574.html </Text>
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
