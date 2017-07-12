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
    this.setDataSource(nextProps);
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
    let meta = []
    if (typeof this.props.contentsMetaData === "undefined" || typeof this.props.contentsMetaData[info.key] === "undefined") {
      meta = []
    } else {
      meta = this.props.contentsMetaData[info.key]
    }

    return (
      <Card>
        <FlavorItems info={info} meta={meta}/>
      </Card>
    )
  }

  render() {
    return (
      <ScrollView style={s.wallStyle}>
        {this.renderBar()}
        <ListView dataSource={this.dataSource} renderRow={this.renderRow}/>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const {topMode, topText, selectedList, contentsMetaData} = state.Info
  return {topMode, topText, selectedList, contentsMetaData};
  // react-reduxがconnectの引数state経由で渡したreducerの実行結果をmapしてclassに渡す、の意
};

export default connect(mapStateToProps, { openContentsMetaDataOnState })(List);
