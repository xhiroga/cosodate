import { Actions } from 'react-native-router-flux';

// それぞれ押された回数と時間を格納しておく
export const move2List = (topText, selectedList) => {
  return (dispatch) => {
    dispatch({ type: "setTopMode", payload: "navi" });
    dispatch({ type: "setSelectedList", payload: selectedList });
    Actions.list({headerOfList:topText})
  }
}
