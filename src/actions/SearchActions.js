import { Actions } from 'react-native-router-flux';
// import {} from './types'; これはそのうちやる

export const wordChanged = (word) => {
  return {
    type: "wordChanged",
    payload: word
  };
};

export const inputEnd = (word) => {
  return (dispatch) => {
    // 検索ワードを時間をプロパティにして検索ワード一覧に追加する
    dispatch({
      type: "inputEnd",
      payload: word
    })
    // 検索結果一覧を生成する
    // 検索結果画面に遷移する
    move(dispatch);
  };
};

const move = (dispatch) =>{
  Actions.list();
};
