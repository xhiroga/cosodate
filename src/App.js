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
