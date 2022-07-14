import axios from "axios";
import { ADD_LOYER } from "../Type";

export const addLoyer= (newPost) => async (dispatch) => {
  console.log('lunched loyer')
    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:10000/admin",
        newPost,
        config
      );
      console.log('this is your response',response)
      dispatch({ type: ADD_LOYER, payload: response.data });
    } catch (error) {
      alert(error);
    }
  };

const deleteLoyer=()=>{
    
}