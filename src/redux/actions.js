import axios from "axios";
import {
  HOUSES_LIST_REQUEST,
  HOUSES_LIST_SUCCESS,
  HOUSES_LIST_FAIL,
  HOUSE_DETAILS_REQUEST,
  HOUSE_DETAILS_SUCCESS,
  HOUSE_DETAILS_FAIL,
  HOUSE_DELETE_REQUEST,
  HOUSE_DELETE_SUCCESS,
  HOUSE_DELETE_FAIL,
  HOUSE_CREATE_REQUEST,
  HOUSE_CREATE_SUCCESS,
  HOUSE_CREATE_FAIL,
} from "./constants";

export const listHouses = () => async (dispatch) => {
  try {
    dispatch({ type: HOUSES_LIST_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      "http://mobile-reality-backend.sadek.usermd.net/houses/all",
      config,
    );

    dispatch({
      type: HOUSES_LIST_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: HOUSES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getHouseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: HOUSE_DETAILS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `http://mobile-reality-backend.sadek.usermd.net/houses/${id}`,
      config,
    );

    dispatch({
      type: HOUSE_DETAILS_SUCCESS,
      payload: data.result,
    });
  } catch (error) {
    dispatch({
      type: HOUSE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteHouse = (id) => async (dispatch) => {
  try {
    dispatch({
      type: HOUSE_DELETE_REQUEST,
    });

    await axios.delete(
      `http://mobile-reality-backend.sadek.usermd.net/houses/${id}`,
    );

    dispatch({ type: HOUSE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: HOUSE_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createHouse = (
  address,
  floorsNumber,
  description,
  label,
) => async (dispatch) => {
  try {
    dispatch({
      type: HOUSE_CREATE_REQUEST,
    });

    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.post(
      `http://mobile-reality-backend.sadek.usermd.net/houses`,
      { address, floorsNumber, description, label },
      config,
    );

    dispatch({
      type: HOUSE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: HOUSE_CREATE_FAIL,
      payload: message,
    });
  }
};
