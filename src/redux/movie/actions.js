import {IDGenerator} from "../show/actions";
import {createAction} from "@reduxjs/toolkit";

export const CREATE_MOVIE = createAction('MOVIE/CREATE');
export const UPDATE_MOVIE = createAction('MOVIE/UPDATE');
export const DELETE_MOVIE = createAction('MOVIE/DELETE');

export const movieCreate = (payload) => (dispatch, getState) => {
    payload.movieID = IDGenerator('movie', getState());
    dispatch(CREATE_MOVIE(payload));
}

