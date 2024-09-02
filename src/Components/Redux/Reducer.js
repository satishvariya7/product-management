import { ADD_USER } from "./utils";

const initialState = {
  users: ["name"],
};

export const usersData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...initialState,
        users: action.data,
      };
    default:
      return state;
  }
};
