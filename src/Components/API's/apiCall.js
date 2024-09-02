import axios from "axios";
import { ADD_USER, EMAIL_EXIST } from "./utils";

export const addRegisteredUser = (data) => async (dispatch) => {
  try {
    await axios.post(ADD_USER, data).then((res) => {
      const { existEmail } = res.data;
      if (existEmail) {
        dispatch({ type: EMAIL_EXIST, payload: true });
      }
    });
  } catch (error) {}
};
