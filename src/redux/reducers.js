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
  HOUSE_CREATE_RESET,
} from "./constants";

export const housesListReducer = (state = { houses: [] }, action) => {
  switch (action.type) {
    case HOUSES_LIST_REQUEST:
      return { loading: true, houses: [] };
    case HOUSES_LIST_SUCCESS:
      return {
        loading: false,
        houses: action.payload,
      };
    case HOUSES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const houseDetailsReducer = (state = { house: {} }, action) => {
  switch (action.type) {
    case HOUSE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case HOUSE_DETAILS_SUCCESS:
      return { loading: false, house: action.payload, success: true };
    case HOUSE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const houseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case HOUSE_DELETE_REQUEST:
      return { loading: true };
    case HOUSE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case HOUSE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const houseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case HOUSE_CREATE_REQUEST:
      return { loading: true };
    case HOUSE_CREATE_SUCCESS:
      return { loading: false, success: true, house: action.payload };
    case HOUSE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case HOUSE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
