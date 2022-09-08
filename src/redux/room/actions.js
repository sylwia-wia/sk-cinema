import {createAction} from "@reduxjs/toolkit";
import {setLoader} from "../app/actions";
import {convertRoomApiResponse} from "../../utils/converters";
import {createRoomApiCall, deleteRoomApiCall, getAllRoomsApiCall, updateRoomApiCall} from "../../api/room";
import {useDispatch} from "react-redux";

export const createRoom = createAction('ROOM/CREATE');
export const updateRoom = createAction('ROOM/UPDATE');
export const deleteRoom = createAction('ROOM/DELETE');


const loaderWrapper = (dispatch, getState, callback) => {
    dispatch(setLoader(true));
    callback().then(() => dispatch(setLoader(false)));
}


export const roomCreate = (payload) => (dispatch, getState) => {
    return createRoomApiCall(payload)
        .then((response) => {
            dispatch(createRoom(convertRoomApiResponse(response.data)));
        })
}

export const roomUpdate = (payload) => (dispatch, getState) => {
   updateRoomApiCall(payload)
        .then((response) => {
            dispatch(updateRoom(payload));
        })
}

//test of using react thunk
// export const roomDelete =  (roomID) => (dispatch) => {
//         dispatch(setLoader(true))
//         setTimeout(() => {
//             dispatch(setLoader(false))
//             dispatch(deleteRoom(roomID));
//         }, 2000)
//     }

export const roomDelete = (roomID) => (dispatch) => {
    deleteRoomApiCall(roomID)
        .then((response) => {
            dispatch(deleteRoom(roomID));
        })
}


export const getAllRooms = () => (dispatch, getState) => {
    getAllRoomsApiCall()
        .then((response) => {
            const allRooms = response.data;

            allRooms.forEach(room => {
                dispatch(createRoom(convertRoomApiResponse(room)));
            });
        })
        .catch(error => console.error(`Error: ${error}`));
};
