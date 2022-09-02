import {createAction} from "@reduxjs/toolkit";

export const LOADER = createAction('APP/LOADER');

export const setLoader = (payload) => (dispatch) => {
    dispatch(LOADER(payload));
}