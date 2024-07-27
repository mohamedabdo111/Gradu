import { UsePostDateWithImage } from "../../hooks/usePostData";
import { Login_type, Register_type } from "../types/types";

export const AuthAction = (formdata) => async (dispatch) => {
  try {
    const res = await UsePostDateWithImage("Authentication/Login", formdata);
    dispatch({
      type: Login_type,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Login_type,
      data: error.response,
    });
  }
};

export const RegisterAction = (formdata) => async (dispatch) => {
  try {
    const res = await UsePostDateWithImage("Authentication/Register", formdata);
    dispatch({
      type: Register_type,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Register_type,
      data: error.response,
    });
  }
};
