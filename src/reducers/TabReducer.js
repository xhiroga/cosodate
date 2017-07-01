const INITIAL_STATE = {
  subsidySection: 'recepient'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "moveSubsidySection":
      return { ...state, subsidySection: action.payload }
    default:
      return state;
  }
};
