import React, {Component} from 'react';
import {AsyncStorage, View, Text, ScrollView, ListView} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux'
import SearchBar from './SearchBar';
import FlavorItems from './FlavorItems';
import {Card, Header} from './common';
import { openContentsMetaDataOnState } from '../actions'
import s from './styles';

class List extends Component {

  // 備忘録.constructorでpropsを明示的に受け取る必要はない

  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
  }

  componentWillMount() {
    this.props.openContentsMetaDataOnState()
    this.setDataSource(this.props)
  };

  componentWillReceiveProps(nextProps) {
    this.setDataSource(nextProps)
  }

  setDataSource({ selectedList }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(selectedList);
  }

  renderBar() {
    switch (this.props.topMode) {
      case "navi":
        return null
      case "search":
        return <SearchBar/>
      default:
        return null
    }
  }

  renderRow(info) {
    let targetMeta = []
    console.log("contentsMetaData",this.props.contentsMetaData)
    this.props.contentsMetaData.map( meta => {
      if ( meta.key == info.key ){
        targetMeta = meta
      }
    })

    return (
      <Card>
        <FlavorItems info={info} meta={targetMeta}/>
      </Card>
    )
  }

  render() {
    return (
      <ScrollView style={s.wallStyle}>
        {this.renderBar()}
        <ListView dataSource={this.dataSource} renderRow={this.renderRow} style={s.listViewPad}/>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const { regions, lang, contentsMetaData } = state.Init // Initに紐付くreducerのdefaultが返ってくる。
  const {topMode, topText, selectedList } = state.Info
  return {  regions, lang, contentsMetaData, topMode, topText, selectedList }
  // react-reduxがconnectの引数state経由で渡したreducerの実行結果をmapしてclassに渡す、の意
};

export default connect(mapStateToProps, { openContentsMetaDataOnState })(List);
