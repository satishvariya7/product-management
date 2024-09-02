import { ADD_USER } from "./utils";

export const addUser = (data) => {
  return {
    type: ADD_USER,
    data: data,
  };
};
