const INITIAL_STATE = {
  regions: ["japan","tokyo","japan-tokyo-mitaka"],
  lang: "jp",
  localData: [],
  contentsMetaData: [],
}

export default ( state = INITIAL_STATE, action ) => {

  switch (action.type) {
    case "storeDataOnLocal":
      console.log("localData",action.payload)
      return { ...state, localData: action.payload }
    case "setContentsMetaData":
      console.log("contentsMetaData",action.payload)
      return{ ...state, contentsMetaData: action.payload }
    default:
      return state;

  }
}
