const initialState = {
  navbarType: "dashboard",
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAVBAR_TYPE": {
      return {
        ...state,
        navbarType: action.payload,
      };
    }
    default:
      return state;
  }
};
export default adminReducer;
