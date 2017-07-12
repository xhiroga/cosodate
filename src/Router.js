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
    const { navigationBarTitleImageStyle } = styles

    // ダイナミックにタイトルを変えたい。初期値をどう設定するかと、どう受け取るかを両立するのが難しい？
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="container" >
          <Scene key="home" component={Home} title={TEXTS["home"][lang]}/>
          <Scene key="list" component={List} getTitle={TEXTS[this.props.headerOfList="list"][lang]}/>
          <Scene key="info" component={Info} getTitle={TEXTS[this.props.headerOfInfo="info"][lang]} />
        </Scene>
      </Router>
    )
  }
};

const styles = {
  navigationBarTitleImageStyle : {
    // デフォルト..
    // "width": 180,
    // "height": 120,
    // "overflow": "hidden",
    // "alignSelf": "center",
    height: 30,
    resizeMode:"center", //cover:比率そのまま横幅に合わせる(デフォルト) stretch:比率を無視して縦幅に合わせる
    // backgroundColor: 'blue'

  }
}

const mapStateToProps = state => {
  const { regions, lang, headerOfList, headerOfInfo } = state.Init
  return { regions, lang, };
  // react-reduxがconnectの引数state経由で渡したreducerの実行結果をmapしてclassに渡す、の意
};

export default connect(mapStateToProps)(RouterComponent);
