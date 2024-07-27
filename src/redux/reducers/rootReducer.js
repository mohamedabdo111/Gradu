import { combineReducers } from "redux";
import {
  GetAllApartmentReducer,
  GetApartmentDetailsReducer,
} from "./getAllApartment";

export default combineReducers({
  AllApartment: GetAllApartmentReducer,
  ApartmentDetails: GetApartmentDetailsReducer,
});
