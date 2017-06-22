import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

import {Text} from 'react-native'

class App extends Component {

  componentWillMount() {
    console.log('ほんとはここでLinkDataからデータをフェッチする')
    
    // axios.get('http://linkdata.org/api/1/rdf1s5226i/cosodate_mitaka_unofficial_rdf.json')
    //   .then(function (response) {console.log(response);})
    //   .catch(function (error) {console.log(error);});
    // Error: Network Errorの場合はinfo.plist(複数あるので注意)を見る

  }


  render() {
    const store = createStore(reducers);
    // constはブロックスコープ。render()の中で宣言。

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }

}





export default App;
