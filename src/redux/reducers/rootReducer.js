import { combineReducers } from "redux";
import {
  GetAllApartmentReducer,
  GetApartmentDetailsReducer,
} from "./getAllApartment";
import { AuthReducer } from "./authReducer";
import { AdminReducer } from "./ownerReducer";

export default combineReducers({
  AllApartment: GetAllApartmentReducer,
  ApartmentDetails: GetApartmentDetailsReducer,
  Auth: AuthReducer,
  AdminReducer: AdminReducer,
});
