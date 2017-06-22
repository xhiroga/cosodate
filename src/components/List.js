import React, { Component } from 'react';
import { View, Text, ScrollView, ListView } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import {SearchBar} from './common'
import InfoItem from './InfoItem';

// jsonを生成
// mapしてニュースを作成する.　stateをオーバーライドする

class List extends Component {

  state = { searchList : [] };

  // 備忘録.constructorでpropsを明示的に受け取る必要はない

  componentWillMount() {
    console.log("here in List.js, willMount. info ->", this.props.info);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.info);

    let got = [
      {title:'三鷹ちびっ子農園　参加者募集', author:'みたか子育てねっと', date:'2017年03月10日', text:'平成29年度の参加家族を募集します  ちびっ子農園では、種まきから収穫まで、1年を通していろいろな野菜を共同作業で育てます。    対象と定員  市内の3歳から中学生までのお子さんとその保護者60家族。    期間  平成29年4月から1年間、毎週日曜日午前9時から正午まで。    場所  三鷹ちびっ子  農園新川三丁目6番1号  駐車場はありません。徒歩や自転車にて登園してください。    詳細は三鷹市ホームページ', link:'http://www.city.mitaka.tokyo.jp/c_news/064/064574.html'},
      {title:'保育園であそびましょ （2月・3月）', author:'みたか子育てねっと', date:'2017年03月10日'},
      {title:'むらさき子どもひろば定例行事 3月乳幼児', author:'みたか子育てねっと', date:'2017年03月10日'},
      {title:'平成29年7月1日保育園・地域型保育施設 申込状況を更新しました。', author:'みたか子育てねっと', date:'2017年06月01日'},
      {title:'平成29年6月1日保育園・地域型保育施設 申込状況を更新しました。', author:'みたか子育てねっと', date:'2017年05月01日'},
      {title:'平成29年5月1日保育園・地域型保育施設 申込状況を更新しました。', author:'みたか子育てねっと', date:'2017年04月01日'},
      {title:'「三鷹市私立幼稚園協会」からのお知らせ', author:'子ども育成課', date:'2014年06月06日'},
      {title:'私立幼稚園等の補助金についてはこちらをご覧ください。', author:'子ども育成課', date:'2011年06月20日'},
    ];

    // axios.get('http://linkdata.org/api/1/rdf1s5226i/cosodate_mitaka_unofficial_rdf.json')
    //   .then(function (response) {console.log(response);})
    //   .catch(function (error) {console.log(error);});
    // Error: Network Errorの場合はinfo.plist(複数あるので注意)を見る

    console.log('http load finished!');
    // なんでconsoleに出力されないのかと思ってたけど、うっかりしてた。非同期だから後から来るんだった。

    this.setState({searchList:got});
  };

  // renderNews(){
  //   // debugger;
  //   return this.state.searchList.map( news =>
  //     <NewsElement key={news.title} news={news} onPress={()=>Actions.info({ news: news })}/>
  //   );
  // }
  //
  // render() {
  //   // console.log(this.state);
  //   return (
  //     <View>
  //       <SearchBar/>
  //       <ScrollView>
  //         {this.renderNews()}
  //       </ScrollView>
  //     </View>
  //   );
  // }

  renderRow(info) {
    return <InfoItem info={info} onPress={()=>Actions.info({ info: info })}/>
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }


}

const mapStateToProps = state => {
  return { info: state.info };
  // react-reduxがconnectの引数state経由で渡したreducerの実行結果をmapしてclassに渡す、の意
};



export default connect(mapStateToProps)(List);
