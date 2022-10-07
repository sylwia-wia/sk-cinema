import {combineReducers} from "@reduxjs/toolkit";
import RoomReducer from "./room/reducer";
import MovieReducer from "./movie/reducer";
import ShowReducer from "./show/reducer";
import LoadReducer from "./app/reducer";
import LoginReducer from "./authorization/reducer";

const combinedReducers = combineReducers({
    room: RoomReducer,
    movie: MovieReducer,
    show: ShowReducer,
    app: LoadReducer,
    authorisation: LoginReducer,
});

const rootReducer = (state, action) => {
    return combinedReducers(state,action);
}

export default rootReducer;