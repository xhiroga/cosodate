// Home画面
// 最近見たコンテンツとニュースと検索バーを表示
// （もしかしたら検索バーだけでもいい？）

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const Home = (props) => {
  const {navigation} = props;

  return(
    // 子画面側からnavigatoinインスタンスを使用しても構わない
    <TouchableOpacity
      style = {{ marginTop:50, alignSelf: 'center' }}
      title = "検索結果"
      onPress = {()=> navigation.navigate('Search')}
      >
      <Text>検索結果に飛ぶ！</Text>
    </TouchableOpacity>
  );
};

export default Home;
