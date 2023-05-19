import useGetData from "../../hooks/UseGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useInsertData } from "../../hooks/useInsertData";
import {
  CREATE_Competition,
  DELETE_Competition,
  GET_ALL_Competitions,
  Get_Error,
} from "../type";

export const createCompetition = (data) => async (dispatch) => {
  try {
    const respose = await useInsertData(
      `Dashboard/Competition/AddCompetition`,
      data
    );

    dispatch({
      type: CREATE_Competition,
      payload: respose,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};
export const gatAllCompetitions = () => async (dispatch) => {
  try {
    const respose = await useGetData(
      "Dashboard/Competition/GetAllCompetitions"
    );

    dispatch({
      type: GET_ALL_Competitions,
      payload: respose,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};
export const deleteCompetition = (id) => async (dispatch) => {
  try {
    const respose = await useDeleteData(
      `Dashboard/Competition/DeleteCompetition?id=${id}`
    );

    dispatch({
      type: DELETE_Competition,
      payload: respose,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Get_Error,
      payload: "error" + e,
    });
  }
};
