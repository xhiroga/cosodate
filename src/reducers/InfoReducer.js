import data from './News.json';

const INITIAL_STATE = {
  topMode:      "",
  topText:      "",
  selectedList: []
}


export default (state = INITIAL_STATE, action) => {
console.log("here InfoReducer, export data", data)
console.log("and this is action", action)
  switch (action.type) {
    case "setTopMode":
      return{ ...state, topMode: action.payload }
    case "setTopText":
      return{ ...state, topText: action.payload }
    case "setSelectedList":
      return{ ...state, selectedList: action.payload}


    default:
      return state;
  }
};
