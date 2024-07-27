import { UseGetDate } from "../../hooks/useGetDate";
import { Get_Apartment } from "../types/types";

export const GetAllApartmentAction = () => async (dispatch) => {
  try {
    const res = await UseGetDate("User/GetApartmentsMain");
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
