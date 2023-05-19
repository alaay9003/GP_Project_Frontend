import { useInsertData } from "../../hooks/useInsertData";
import { useUpdateData } from "../../hooks/useUpdateData";
import {
  FOREGT_PASSWORD,
  LOGIN_USER,
  VERIFY_PASSWORD,
  RESET_PASSWORD,
  LOGIN_Admin,
} from "../type";

export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/Common/Student/Login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};
export const loginAdmin = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`Dashboard/Admin/Login`, data);
    dispatch({
      type: LOGIN_Admin,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};

//1-foregt  passwrod
export const forgetPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(``, data);
    dispatch({
      type: FOREGT_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: FOREGT_PASSWORD,
      payload: e.response,
    });
  }
};

//2-verify  passwrod
export const verifyPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(``, data);
    dispatch({
      type: VERIFY_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: VERIFY_PASSWORD,
      payload: e.response,
    });
  }
};

//2-reset  passwrod
export const resetPassword = (data) => async (dispatch) => {
  try {
    const response = await useUpdateData(``, data);
    dispatch({
      type: RESET_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: RESET_PASSWORD,
      payload: e.response,
    });
  }
};
