import moment from "moment/moment";
import {createAction} from "@reduxjs/toolkit";

export const CREATE_SHOW = createAction('SHOW/CREATE');
export const UPDATE_SHOW = createAction('SHOW/UPDATE');
export const DELETE_SHOW = createAction('SHOW/DELETE');
export const BUY_TICKET = createAction('SHOW/BUY');

export const getMovieByID = (state, id) => state.movie[id];
export const getRoomByID = (state, id) => state.room[id];

export const showCreate = (payload) => (dispatch, getState) => {
    payload.showID = IDGenerator('show', getState());
    payload = prepareShowData(getState, payload);
    dispatch(CREATE_SHOW(payload));
}

export const showUpdate = (payload) => (dispatch, getState) => {
    payload = prepareShowData(getState, payload);
    dispatch(UPDATE_SHOW(payload));
}

export const showDelete = (payload) => (dispatch) => {
    dispatch(DELETE_SHOW(payload));
}

export const ticketBuy = (payload) => (dispatch) => {
    const {showID, seatID} = payload;
    const ticketID = Math.random().toString(36).substring(7);
    dispatch(BUY_TICKET({
        showID,
        seatID,
        ticketID
    }));
};

export function IDGenerator(entityName, state) {
    let id = 1;
    const IDs = Object.keys(state[entityName]).map(id => parseInt(id));

    if (Object.keys(state[entityName]).length > 0) {
        id = Math.max(...IDs) + 1;
    }

    if (isNaN(id)) {
        return 1;
    }

    return id;
}

function prepareShowData(getState, payload) {
    const movie = getMovieByID(getState(), payload.movieID);
    const room = getRoomByID(getState(), payload.roomID);
    const dateTime = payload.dateTime;

    payload.movie = {
        title: movie.movieTitle,
        duration: movie.movieTime,
    };

    payload.room = {
        roomNumber: room.roomNumber,
        capacity: room.capacity,
    }


    payload.startTime = moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
    payload.endTime = moment(dateTime).add(movie.duration, 'minutes').format('YYYY-MM-DD HH:mm:ss');

    payload.seats = {};
    for (let i = 1; i <= room.capacity; i++) {
        payload.seats[i] = null;
    }

    return payload;
}