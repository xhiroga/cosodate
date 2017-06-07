import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import News from './News';

// jsonを生成
// mapしてニュースを作成する.　stateをオーバーライドする

class NewsList extends Component {

  state = { newsList : [] };

  componentWillMount() {
    console.log('hoge');
    let got = [
      {title:'三鷹ちびっ子農園　参加者募集', publisher:'みたか子育てねっと', date:'2017年03月10日'},
      {title:'保育園であそびましょ （2月・3月）', publisher:'みたか子育てねっと', date:'2017年03月10日'},
      {title:'むらさき子どもひろば定例行事 3月乳幼児', publisher:'みたか子育てねっと', date:'2017年03月10日'},
      {title:'平成29年7月1日保育園・地域型保育施設 申込状況を更新しました。', publisher:'みたか子育てねっと', date:'2017年06月01日'},
      {title:'平成29年6月1日保育園・地域型保育施設 申込状況を更新しました。', publisher:'みたか子育てねっと', date:'2017年05月01日'},
      {title:'平成29年5月1日保育園・地域型保育施設 申込状況を更新しました。', publisher:'みたか子育てねっと', date:'2017年04月01日'},
      {title:'「三鷹市私立幼稚園協会」からのお知らせ', publisher:'子ども育成課', date:'2014年06月06日'},
      {title:'私立幼稚園等の補助金についてはこちらをご覧ください。', publisher:'子ども育成課', date:'2011年06月20日'},
    ];
    // // 本当はこうしたいんだけど Error: Network Error で困ってます
    // axios.get('https://linkdata.org/api/1/rdf1s5226i/cosodate_mitaka_unofficial_rdf.json')
    // .then(function (response) {console.log(response);})
    // .catch(function (error) {console.log(error);});
    // console.log('baa');
    // // なんでconsoleに出力されないのかと思ってたけど、うっかりしてた。非同期だから後から来るんだった。
    
    this.setState({newsList:got});
  };

  renderNews(){
    return this.state.newsList.map(news =>
      <News key={news.title} news={news}/>
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderNews()}
      </ScrollView>
    );
  }

}

export default NewsList;
