const INITIAL_STATE = {
  regions: ["japan","tokyo","japan-tokyo-mitaka"],
  lang: "jp",
  localData : [],
  headerOfList: "list",
  headerOfInfo: "info"
}

export default ( state = INITIAL_STATE, action ) => {

  switch (action.type) {
    case "storeDataOnLocal":
      return { ...state, localData: action.payload }
    case "setSHeaderOfList":
      return { ...state, headerOfList: action.payload }
    default:
      return state;

  }
}
