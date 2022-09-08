import moment from "moment/moment";
import {createAction} from "@reduxjs/toolkit";
import {convertShowApiResponse} from "../../utils/converters";
import {createShowApiCall, getAllShowsApiCall} from "../../api/show";

export const createShow = createAction('SHOW/CREATE');
export const updateShow = createAction('SHOW/UPDATE');
export const deleteShow = createAction('SHOW/DELETE');
export const buyTicket = createAction('SHOW/BUY');

export const getMovieByID = (state, id) => state.movie[id];
export const getRoomByID = (state, id) => state.room[id];

export const getAllShows = () => (dispatch, getState) => {
   getAllShowsApiCall()
        .then((response) => {
            const allShows = response.data;

            allShows.forEach(show => {
                dispatch(createShow(convertShowApiResponse(show)))
            });
        })
        .catch(error => console.error(`Error: ${error}`));
};

export const showCreate = (payload) => (dispatch, getState) => {
    payload = prepareShowData(getState, payload);
   createShowApiCall(payload)
        .then((response) => {
            response.data.showID = response.data.id;
            delete response.data.id;
            dispatch(createShow(response.data));
        })
}

export const showUpdate = (payload) => (dispatch, getState) => {
    payload = prepareShowData(getState, payload);
    // updateShowApiCall(payload)
    //     .then((response) => {
    //         console.log(response.data);
    //         dispatch(updateShow(response.data));
    //     })
}


export const showDelete = (payload) => (dispatch) => {
    dispatch(deleteShow(payload));
}

export const ticketBuy = (payload) => (dispatch) => {
    const {showID, seatID} = payload;
    const ticketID = Math.random().toString(36).substring(7);
    dispatch(buyTicket({
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

export function prepareShowData(getState, payload) {
    const movie = getMovieByID(getState(), payload.movieID);
    const room = getRoomByID(getState(), payload.roomID);
    const dateTime = payload.dateTime;

    payload.movie = {
        movieTitle: movie.movieTitle,
        movieTime: movie.movieTime,
    };

    payload.room = {
        roomNumber: room.roomNumber,
        capacity: room.capacity,
    }


    payload.startTime = moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
    payload.endTime = moment(dateTime).add(movie.movieTime, 'minutes').format('YYYY-MM-DD HH:mm:ss');

    payload.seats = {};
    for (let i = 1; i <= room.capacity; i++) {
        payload.seats[i] = null;
    }

    return payload;
}