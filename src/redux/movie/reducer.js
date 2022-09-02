import {createReducer} from "@reduxjs/toolkit";
import {CREATE_MOVIE, DELETE_MOVIE, UPDATE_MOVIE} from "./actions";

const initialState = {}

export default createReducer(initialState, (builder) => {
        builder
            .addCase(CREATE_MOVIE, (state, action) => {
                state[action.payload.movieID] = action.payload;
            })
            .addCase(UPDATE_MOVIE, (state, action) => {
                state[action.payload.movieID] = action.payload;
            })
            .addCase(DELETE_MOVIE, (state, action) => {
                delete state[action.payload];
            })
    }
)
