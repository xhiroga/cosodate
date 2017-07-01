import { combineReducers } from 'redux';
import InitReducer from './InitReducer';
import SearchReducer from './SearchReducer';
import InfoReducer from './InfoReducer';
import TabReducer from './TabReducer';

export default combineReducers({

  Init:   InitReducer,
  search: SearchReducer,
  Info:   InfoReducer,
  Tab:    TabReducer,
});
// このキーってどういう役割なんだっけ？ >> actionのtypeは勝手に全部見てくれる。reducerを直で呼ぶときに便利
