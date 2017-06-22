import { combineReducers } from 'redux';
import InfoReducer from './InfoReducer';

const INITIAL_STATE = {
  baby: 'blue'
};

export default combineReducers({
  hello: (state=INITIAL_STATE, action) => { return state; },
  info: InfoReducer
});
// このキーってどういう役割なんだっけ？ >> actionのtypeは勝手に全部見てくれる。reducerを直で呼ぶときに便利
