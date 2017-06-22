import React, { Component } from 'react';
import { View, Text, ScrollView, ListView } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux'
import {SearchBar} from './common'
import InfoItem from './InfoItem';

class List extends Component {

  // 備忘録.constructorでpropsを明示的に受け取る必要はない

  componentWillMount() {
    console.log("here in List.js, willMount. info ->", this.props.info);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.info);
  };


  renderRow(info) {
    return <InfoItem info={info}/>
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
