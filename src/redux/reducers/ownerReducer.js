import {
  Add_Apartment,
  Get_Apartments_owner,
  Get_Notification,
  Get_profile,
  Remove_Apartment,
  Update_Password,
  Update_profile,
} from "../types/types";

const intial = {
  notification: [],
  apartments: [],
  remove: [],
  updataPassword: [],
  profileInfo: [],
  Updateprofile: [],
  addApartment: [],
  loading: true,
};

export const AdminReducer = (state = intial, action) => {
  switch (action.type) {
    case Get_Notification: {
      return { ...state, notification: action.data, loading: false };
    }
    case Get_Apartments_owner: {
      return { ...state, apartments: action.data, loading: false };
    }
    case Remove_Apartment: {
      return { ...state, remove: action.data, loading: false };
    }
    case Update_Password: {
      return { ...state, updataPassword: action.data, loading: false };
    }
    case Get_profile: {
      return { ...state, profileInfo: action.data, loading: false };
    }
    case Update_profile: {
      return { ...state, Updateprofile: action.data, loading: false };
    }
    case Add_Apartment: {
      return { ...state, addApartment: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};
