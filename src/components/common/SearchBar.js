import React from 'react';
import { View } from 'react-native';
import { Input } from './'

const SearchBar = (props) => {

  return (
    <View style={[styles.containerStyle, props.style]}>
      <Input />
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { SearchBar };
// 1.exportを{}で囲う 2. commonフォルダ直下にindex.jsを配置し、そこに全要素をimportする
// 以上2点でclass componentへのimportが簡便になる。
