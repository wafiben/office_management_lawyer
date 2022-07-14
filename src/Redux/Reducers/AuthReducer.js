import { SIGN_IN, LOG_OUT } from "../Type";
const initState = { user: null, isAuth: false };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        isAuth: true,
      };
    case LOG_OUT:
      localStorage.clear();
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    default:
      return state;
  }
};
export default authReducer;
