// import {} from './types'; これはそのうちやる

export const wordChanged = (word) => {
  return {
    type: "wordChanged",
    payload: word
  };
};

export const saveSearchResult = (searchResult) => {
  return (dispatch) => {
    dispatch({ type: "setSelectedList", payload: searchResult})
    dispatch({ type: "setTopMode", payload: "search" })
  };
};
