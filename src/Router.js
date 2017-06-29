import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/Home';
import List from './components/List';
import Info from './components/Info';


const RouterComponent = () => {

  const { navigationBarTitleImageStyle } = styles

  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        key="container"
        navigationBarTitleImage={require('./img/logoRe.gif')}
        navigationBarTitleImageStyle={navigationBarTitleImageStyle}
        >
        <Scene key="home" component={Home} />
        <Scene key="list" component={List} title="List" />
        <Scene key="info" component={Info} title="Info" />
      </Scene>
    </Router>
  );
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

export default RouterComponent;
