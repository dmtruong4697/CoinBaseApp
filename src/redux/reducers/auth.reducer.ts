import { ActionType } from "@redux-saga/types";
import { Action } from "redux-saga";

const initialState = {
    currentUser: null,
    errorMessage: "",
  };
  
  const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          currentUser: action.payload,
          errorMessage: null,
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          currentUser: null,
          errorMessage: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;