import React from 'react';
import { Text, View } from 'react-native';
import Header from './components/Header';
import NewsList from './components/NewsList';
import News from './components/News.js';
import { StackNavigator } from 'react-navigation';

// const App = () => (
//   <View style={{ flex: 1 }}>
//     <Header />
//     <News />
//   </View>
// );

const List = ({navigation}) => (
    <View style={{ flex: 1 }}>
      <Header />
      <NewsList navigation={navigation} />
    </View>
);
// 引数の渡し方を毎回忘れる。(props)で渡してconst{}にパースするか、または{x,y,z}で渡す

// const Info = ({navigation}) => (
//   <View style={{ flex: 1 }}>
//     <Header />
//     <News navigation={navigation} />
//   </View>
// );

const App = StackNavigator(
  {
    // Home: {
    //   screen: List,
    // }, // 最後に実装
    Search: {
      screen: List,
    },
    // Page:{
    //   screen: Info,
      // pathはそのうち追加する。DeepLinkingって？
    // },
  },
  {
    initialRouteName: 'Search',
    headerMode: 'none',
  },
);

export default App;
