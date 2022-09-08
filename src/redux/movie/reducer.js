import {createReducer} from "@reduxjs/toolkit";
import {createMovie, deleteMovie, updateMovie} from "./actions";

const initialState = {}

export default createReducer(initialState, (builder) => {
        builder
            .addCase(createMovie, (state, action) => {
                state[action.payload.movieID] = action.payload;
            })
            .addCase(updateMovie, (state, action) => {
                state[action.payload.movieID] = action.payload;
            })
            .addCase(deleteMovie, (state, action) => {
                delete state[action.payload];
            })
    }
)
