import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Text } from 'react-native'

import Router from './Router';



class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    // constはブロックスコープ。render()の中で宣言。
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }

}

export default App;
