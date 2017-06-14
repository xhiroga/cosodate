import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import Home from './components/Home'
import Header from './components/Header';
import List from './components/List';
import News from './components/News';
import { StackNavigator } from 'react-navigation'; //これは子画面側では定義しなくて良い

const MyHome = ({navigation}) => (
  <Home navigation={navigation} />
);
// jsx内で変数にアクセスするには{}
// return宣言を省けるところは省く。

class MySearch extends Component {

  constructor(props){ // propsはjsonが入ってる. だから{navigationで受け取っても構わない}
    super(props);
  };

  static navigationOptions = {
    // title: <Text>わーい</Text>
    title: <Image source ={require('./img/logo.gif')} resizeMode = "contain" style={{height:50}} />
    // navigationOptionsのtitleにjsxが埋まってるとエラーになる...
  };

  render(){
    return(
      <View style={{ flex: 1 }}>
        <Header />
        <List navigation={ this.props.navigation } />
      </View>
    );
    //クラス内変数にアクセスする時はthisをつける！this.navigator... 一つの匿名関数でスコープを共有することが多いので忘れがち。
  };
};
// navigateの引数はjsonで渡す
// 将来的にはInfoの先のComponentを、Infoの種類で呼び分ける


const MyInfo = ({navigation}) => (
    <News navigation={navigation} news={navigation.state.params.news}/>
);


const App = StackNavigator(
  {
    Home: {
      screen: MyHome,
    },
    Search: {
      screen: MySearch,
    },
    Info:{
      // Navigatorに登録する画面に引数を渡す時は、navigationのstateとして渡す必要があり、
      // そのためにpathとして宣言しないといけないっぽい(screen名/:paramの要素名)
      path: 'MyInfo/:news',
      screen: MyInfo,
    },
  },
  {
    initialRouteName: 'Search', //ほんとはHomeなんだけどテストが面倒なので
  },
);

export default App;
