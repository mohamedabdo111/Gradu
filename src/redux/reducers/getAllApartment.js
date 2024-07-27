import { Get_Apartment } from "../types/types";

const intail = { getApatments: [], loading: true };
export const GetAllApartmentReducer = (state = intail, action) => {
  switch (action.type) {
    case Get_Apartment: {
      return { ...state, getApatments: action.data, loading: false };
    }

    default: {
      return state;
    }
  }
};
