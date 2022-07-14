import { SIGN_IN,LOG_OUT } from "./../Type";
import axios from "axios";
export const signIn = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:10000/auth/sign-in",
      user
    );
    console.log(response);
    dispatch({ type: SIGN_IN, payload: response.data });
    if (response.data.user.role === 1) {
      navigate("/admin/users");
    }
    if (response.data.user.role === 0) {
      navigate("/profile");
    }
  } catch (error) {
    /* dispatch({ type: USER_FAIL }); */
    error.response.data.errors.map((err) => alert(err.msg));
  }
};
export const logOut = (navigate) => (dispatch) => {
  dispatch({ type: LOG_OUT });
  navigate("/");
};
