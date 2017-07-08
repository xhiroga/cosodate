import React, {Component} from 'react';
import {AsyncStorage, View, Text, ScrollView, ListView} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux'
import SearchBar from './SearchBar';
import ListItem from './ListItem';
import {Header} from './common';

class List extends Component {

  // 備忘録.constructorでpropsを明示的に受け取る必要はない

  constructor(props) {
    super(props)
    this.state = {
      "foo": "baa"
    }
    AsyncStorage.getItem('contentsMetaData'). //当該のキーがなければ(catchされるのではなく)nullが返る
    then(req => {
      console.log(req)
      this.state = {
        'contentsMetaData': (req === null
          ? {}
          : JSON.parse(req)) //req初期値はnull, またparse前は文字列
      }
      console.log("this.state", this.state)
    }).catch(error => console.log('error!'));
    console.log("this.state,", this.state) //こいつはasyncより先に呼ばれる
    this.renderRow = this.renderRow.bind(this)
  }

  componentWillMount() {
    console.log("here in List.js, willMount. info ->", this.props.selectedList);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    console.log("here in rowHasChanged, selectedList-> ", this.props.selectedList)
    this.dataSource = ds.cloneWithRows(this.props.selectedList);

  };

  renderBar() {
    switch (this.props.topMode) {
      case "navi":
        return (<Header topText={this.props.topText}/>)
      case "search":
        return <SearchBar/>
      default:
        return null
    }
  }

  renderRow(info) {
    console.log("this.state,", this.state) //こいつはasyncより先に呼ばれる
    let meta = []
    if (typeof this.state['contentsMetaData'] === "undefined" || typeof this.state['contentsMetaData'][info.key] === "undefined") {
      meta = []
    } else {
      meta = this.state['contentsMetaData'][info.key]
    }

    console.log("meta,", meta)

    return <ListItem info={info}/>
  }

  render() {
    // ここScrollViewにする必要は全くないが、Viewだとレイアウトが崩れる...
    return (
      <ScrollView style={{
        flex: 1
      }}>
        {this.renderBar()}
        <ListView dataSource={this.dataSource} renderRow={this.renderRow}/>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const {topMode, topText, selectedList} = state.Info
  return {topMode, topText, selectedList};
  // react-reduxがconnectの引数state経由で渡したreducerの実行結果をmapしてclassに渡す、の意
};

export default connect(mapStateToProps)(List);
