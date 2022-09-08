import {
    buyTicket,
    createShow,
    deleteShow,
    updateShow,
} from "./actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(createShow, (state, action) => {
            state[action.payload.showID] = action.payload;
        })
        .addCase(updateShow, (state, action) => {
            state[action.payload.showID] = action.payload;
        })
        .addCase(deleteShow, (state, action) => {
            delete state[action.payload];
        })
        .addCase(buyTicket, (state, action) => {
            state[action.payload.showID].seats[action.payload.seatID] = action.payload.ticketID;
        })
})
