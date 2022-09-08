import {createReducer} from "@reduxjs/toolkit";
import {createRoom, deleteRoom, updateRoom} from "./actions";

const initialState = {};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(createRoom, (state, action) => {
            state[action.payload.roomID] = action.payload;
        })
        .addCase(updateRoom, (state, action) => {
            state[action.payload.roomID] = action.payload;
        })
        .addCase(deleteRoom, (state, action) => {
             delete state[action.payload];
        })
    }
)
