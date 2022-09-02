import {
    BUY_TICKET,
    CREATE_SHOW,
    DELETE_SHOW,
    UPDATE_SHOW,
} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(CREATE_SHOW, (state, action) => {
            state[action.payload.showID] = action.payload;
        })
        .addCase(UPDATE_SHOW, (state, action) => {
            state[action.payload.showID] = action.payload;
        })
        .addCase(DELETE_SHOW, (state, action) => {
            delete state[action.payload];
        })
        .addCase(BUY_TICKET, (state, action) => {
            state[action.payload.showID].seats[action.payload.seatID] = action.payload.ticketID;
        })
})
