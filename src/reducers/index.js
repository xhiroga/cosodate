import { combineReducers } from 'redux';
import InitReducer from './InitReducer';
import SearchReducer from './SearchReducer';
import InfoReducer from './InfoReducer';


export default combineReducers({

  Init:   InitReducer,
  search: SearchReducer,
  Info:   InfoReducer,
});
// このキーってどういう役割なんだっけ？ >> actionのtypeは勝手に全部見てくれる。reducerを直で呼ぶときに便利
