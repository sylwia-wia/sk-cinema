import {createAction} from "@reduxjs/toolkit";

export const loader = createAction('APP/LOADER');
export const errorMessageAction = createAction('APP/ERROR_MESSAGE');
export const clearErrorMessageAction = createAction('APP/ERROR_MESSAGE_CLEAR');

export const setLoader = (payload) => (dispatch) => {
    dispatch(loader(payload));
}

export const setErrorMessage = (message) => (dispatch) => {
    dispatch(errorMessageAction(message));
}

export const clearErrorMessage = () => (dispatch) => {
    dispatch(clearErrorMessageAction());
}