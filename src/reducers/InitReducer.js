const INITIAL_STATE = {
  regions: ["japan","tokyo","japan-tokyo-mitaka"],
  lang: "jp",
  localData : [],
}

export default ( state = INITIAL_STATE, action ) => {
  console.log("here initReducer");

  switch (action.type) {
    case "storeDataOnLocal":
      console.log("here storeDataOnLocal, action.payload ->", action.payload )
      return { ...state, localData: action.payload }

    default:
      return state;

  }
}
