import { UseGetDate } from "../../hooks/useGetDate";
import { Get_Apartment, Get_Apartment_Details } from "../types/types";

export const GetAllApartmentAction = (number, size) => async (dispatch) => {
  try {
    const res = await UseGetDate(
      `User/GetApartmentsMain?PageNumber=${number}&PageSize=${size}`
    );
    dispatch({
      type: Get_Apartment,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_Apartment,
      data: error.response,
    });
  }
};

export const GetApartmentDetailsAction = (id) => async (dispatch) => {
  try {
    const res = await UseGetDate(`Apartment/GetApartmentDetails?Id=${id}`);
    dispatch({
      type: Get_Apartment_Details,
      data: res.data,
    });
  } catch (error) {
    dispatch({
      type: Get_Apartment_Details,
      data: error.response,
    });
  }
};
