import { Actions } from 'react-native-router-flux';

// それぞれ押された回数と時間を格納しておく
export const move2List = (topText, selectedList) => {
  return (dispatch) => {
    // console.log("ここで各種フラグを立てて")
    // console.log("dispatchでcuratedDataを格納")
    // console.log("topText, selectedList, ", topText, selectedList)
    dispatch({ type: "setTopMode", payload: "navi" });
    dispatch({ type: "setTopText", payload: topText });
    dispatch({ type: "setSelectedList", payload: selectedList });

    Actions.list()
  }
}
