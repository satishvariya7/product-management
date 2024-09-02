import { EMAIL_EXIST } from "../Components/API's/utils";
import { GET_USER } from "./utils";

const initialState = {
  users: ["name"],
  existEmail: null,
};

export const usersData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...initialState,
        users: payload,
      };
    case EMAIL_EXIST: {
      return {
        ...initialState,
        existEmail: payload,
      };
    }
    default:
      return state;
  }
};
