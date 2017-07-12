// reducerと共通の定数のimportなど

const INITIAL_STATE = {
  inputtingWord: '',
  searchedWords: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "wordChanged":
      return { ...state, inputtingWord: action.payload }
    default:
      return state;
  }
};
