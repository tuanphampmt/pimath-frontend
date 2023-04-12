
const initialState = {
  start: false,
};
const testOnlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_TEST_ONLINE": {
      return {
        ...state,
        start: action.payload,
      };
    }
    default:
      return state;
  }
};
export default testOnlineReducer;
