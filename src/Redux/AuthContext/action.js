import axios from "axios";
import {
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT,
} from "./actionTypes";

export const Loginfunction = (data) => (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST });

  dispatch({ type: SIGNIN_SUCCESS, payload: data });

  dispatch({ type: SIGNIN_FAILURE });

};

export const SignUpFunction = (data) => (dispatch) => {
  dispatch({ type: CREATE_REQUEST });

  axios
    .post("https://636bda08ad62451f9fbd8076.mockapi.io/apnidukaan", data)
    .then((response) => {
      dispatch({ type: CREATE_SUCCESS, payload: response.data });
      // console.log("res",response);
    })
    .catch((e) => {
      dispatch({ type: CREATE_FAILURE });
      // console.log(e);
    });
};



export const SignOutFun = (dispatch) => {
  dispatch({ type: SIGNOUT })
}