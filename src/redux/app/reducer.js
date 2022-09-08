import {createReducer} from "@reduxjs/toolkit";
import {clearErrorMessageAction, errorMessageAction, loader} from "./actions";

const initialState = {
    isLoading: false,
    errorMessage: null,
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(loader, (state, action) => {
            state["isLoading"] = action.payload;
        } )
        .addCase(errorMessageAction, (state, action) => {
            state['errorMessage'] = action.payload;
        })
        .addCase(clearErrorMessageAction, (state, action) => {
            state['errorMessage'] = null;
        })

})

