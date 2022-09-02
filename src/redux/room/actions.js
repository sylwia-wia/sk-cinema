import {IDGenerator} from "../show/actions";
import {createAction} from "@reduxjs/toolkit";
import {setLoader} from "../app/actions";

export const CREATE_ROOM = createAction('ROOM/CREATE');
export const UPDATE_ROOM = createAction('ROOM/UPDATE');
export const DELETE_ROOM = createAction('ROOM/DELETE');

export const roomCreate = (payload) => (dispatch, getState) => {
    payload.roomID = IDGenerator('room', getState());
    dispatch(CREATE_ROOM(payload));
}

//test of using react thunk
export const roomDelete =  (roomID) => (dispatch) => {
        dispatch(setLoader(true))
        setTimeout(() => {
            dispatch(setLoader(false))
            dispatch(DELETE_ROOM(roomID));
        }, 2000)
    }


