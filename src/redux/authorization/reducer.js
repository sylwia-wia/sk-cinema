import {createReducer} from "@reduxjs/toolkit";
import {login_user} from "./action";

const initialState = {
    authenticated: false
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(login_user, (state, action) => {
            state.authenticated = action.payload;
        })
})