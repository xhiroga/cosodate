import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Home from './components/Home';
import List from './components/List';
import Info from './components/Info';
import { TEXTS } from './Texts'
import { Text } from 'react-native'


class RouterComponent extends Component {

  render(){

    const { regions, lang } = this.props

    // ダイナミックにタイトルを変えたい。初期値をどう設定するかと、どう受け取るかを両立するのが難しい？
    return (
      <Router>
        <Scene key="container">
          <Scene key="home" component={Home} title={TEXTS["home"][lang]}/>
          <Scene key="list" component={List} getTitle={props => TEXTS [props.headerOfList][lang]}/>
          <Scene key="info" component={Info} getTitle={props => props.headerOfInfo} />
          <Scene key="facility" component={Info} getTitle={props => props.headerOfFacility} />
        </Scene>
      </Router>
    )
  }
};

const mapStateToProps = state => {
  const { regions, lang } = state.Init
  return { regions, lang };
  // react-reduxがconnectの引数state経由で渡したreducerの実行結果をmapしてclassに渡す、の意
};

export default connect(mapStateToProps)(RouterComponent);
