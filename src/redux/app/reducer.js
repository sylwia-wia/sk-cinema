import {createReducer} from "@reduxjs/toolkit";
import {LOADER} from "./actions";

const initialState = {
    isLoading: false
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(LOADER, (state, action) => {
            state["isLoading"] = action.payload;
        } )

})

