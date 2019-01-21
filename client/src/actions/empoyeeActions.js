import { GET_EMPLOYEES, GET_ERRORS, EMPLOYEES_LOADING } from "./types";
import axios from "axios";

export const getLinks = () => dispatch => {
  dispatch(setLinksLoading());
  axios
    .get("api/employees")
    .then(res =>
      dispatch({
        type: GET_EMPLOYEES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    );
};

export const setLinksLoading = () => {
  return {
    type: EMPLOYEES_LOADING
  };
};
