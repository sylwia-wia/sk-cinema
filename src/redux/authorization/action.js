import {createAction} from "@reduxjs/toolkit";
import {loader} from "../app/actions";

export const login_user = createAction('LOGIN/USER');

export const setLogin = (payload) => (dispatch) => {

    dispatch(login_user(payload));
}