import { UseDelete } from "../../hooks/useDelete";
import { UseGetDataToken } from "../../hooks/useGetDate";
import {
  UsePostDateWithImage,
  UsePostDateWithOutImage,
} from "../../hooks/usePostData";
import { UseUpdata } from "../../hooks/useUpdate";
import {
  Add_Apartment,
  Get_Apartments_owner,
  Get_Notification,
  Get_profile,
  Remove_Apartment,
  Update_Password,
  Update_profile,
} from "../types/types";

export const GetNotificationAction = (id) => async (dispatch) => {
  try {
    const res = await UseGetDataToken(`Owner/GetNotifications?UserId=${id}`);

    dispatch({
      type: Get_Notification,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_Notification,
      data: error.response,
    });
  }
};

export const GetApartmentAction = (id, num, size) => async (dispatch) => {
  try {
    const res = await UseGetDataToken(
      `Owner/GetOwnerApartments?OwnerId=${id}&PageNumber=${num}&PageSize=${size}`
    );

    dispatch({
      type: Get_Apartments_owner,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_Apartments_owner,
      data: error.response,
    });
  }
};

export const RemoveAction = (id) => async (dispatch) => {
  try {
    const res = await UseDelete(`Owner/DeleteApartment?ApartmentId=${id}`);

    dispatch({
      type: Remove_Apartment,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Remove_Apartment,
      data: error.response,
    });
  }
};
export const UpdatePasswordAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDateWithOutImage("User/ChangePassword", data);

    dispatch({
      type: Update_Password,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Update_Password,
      data: error.response,
    });
  }
};

export const GetProfileAction = (id, userId) => async (dispatch) => {
  try {
    const res = await UseGetDataToken(
      `User/GetProfileData?RequestedId=${id}&RequesterUserID=${userId}`
    );

    dispatch({
      type: Get_profile,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Get_profile,
      data: error.response,
    });
  }
};
export const UpdateProfileAction = (formdata) => async (dispatch) => {
  try {
    const res = await UseUpdata("User/EditProfile", formdata);

    dispatch({
      type: Update_profile,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Update_profile,
      data: error.response,
    });
  }
};
export const AddApartmentAction = (formdata) => async (dispatch) => {
  try {
    const res = await UsePostDateWithImage("Owner/AddApartment", formdata);

    dispatch({
      type: Add_Apartment,
      data: res,
    });
  } catch (error) {
    dispatch({
      type: Add_Apartment,
      data: error.response,
    });
  }
};
