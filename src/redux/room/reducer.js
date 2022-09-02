import {createReducer} from "@reduxjs/toolkit";
import {CREATE_ROOM, DELETE_ROOM, UPDATE_ROOM} from "./actions";

const initialState = {};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(CREATE_ROOM, (state, action) => {
            state[action.payload.roomID] = action.payload;
        })
        .addCase(UPDATE_ROOM, (state, action) => {
            state[action.payload.roomID] = action.payload;
        })
        .addCase(DELETE_ROOM, (state, action) => {
             delete state[action.payload];
        })
    }
)
