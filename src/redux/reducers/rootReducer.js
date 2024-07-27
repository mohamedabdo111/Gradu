import { combineReducers } from "redux";
import {
  GetAllApartmentReducer,
  GetApartmentDetailsReducer,
} from "./getAllApartment";
import { AuthReducer } from "./authReducer";

export default combineReducers({
  AllApartment: GetAllApartmentReducer,
  ApartmentDetails: GetApartmentDetailsReducer,
  Auth: AuthReducer,
});
