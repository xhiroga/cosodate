// reducerと共通の定数のimportなど

const INITIAL_STATE = {
  inputtingWord: '',
  searchedWords: []
};

export default (state = INITIAL_STATE, action) => {
  console.log("here reducer, SearchReducer",action);
  switch (action.type) {
    case "wordChanged":
      console.log("here reducer, case wordChanged", action.payload);
      return { ...state, inputtingWord: action.payload }
    default:
      return state;
  }
};
