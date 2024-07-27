import { combineReducers } from "redux";
import { GetAllApartmentReducer } from "./getAllApartment";

export default combineReducers({
  AllApartment: GetAllApartmentReducer,
});
