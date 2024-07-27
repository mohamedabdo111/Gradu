import { Login_type, Register_type } from "../types/types";

const intial = { login: [], register: [], loading: true };
export const AuthReducer = (state = intial, action) => {
  switch (action.type) {
    case Login_type: {
      return { ...state, login: action.data, loading: false };
    }
    case Register_type: {
      return { ...state, register: action.data, loading: false };
    }

    default: {
      return state;
    }
  }
};
