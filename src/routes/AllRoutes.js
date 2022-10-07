import {Route, Routes, Switch} from "react-router-dom";
import Rooms from "../room/Rooms";
import RoomsCreate from "../room/RoomsCreate";
import RoomsUpdate from "../room/RoomsUpdate";
import Movie from "../movie/Movie";
import MovieCreate from "../movie/MovieCreate";
import MovieUpdate from "../movie/MovieUpdate";
import Show from "../show/Show";
import ShowCreate from "../show/ShowCreate";
import ShowUpdate from "../show/ShowUpdate";
import Buy from "../ticket/Buy";
import Ticket from "../ticket/Ticket";
import React, {useState} from "react";
import Login from "../login/Login";
import ProtectRoute from "./ProtectRoute";
import {Provider} from "react-redux";
import store from "../redux/store";

function AllRoutes() {
    const [token, setToken] = useState();
    return (
        <>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <main className={'col mt-3'}>
                        <Provider store={store}>
                            <Routes>
                                <Route element={<ProtectRoute/>}>
                                    <Route exact path='/rooms' element={<Rooms/>}/>
                                    <Route exact path="/movie" element={<Movie/>}/>
                                    <Route exact path="/rooms/create" element={<RoomsCreate/>}/>
                                    <Route exact path="/rooms/update/:roomID" element={<RoomsUpdate/>}/>
                                    <Route exact path="/movie" element={<Movie/>}/>
                                    <Route exact path="/movie/create" element={<MovieCreate/>}/>
                                    <Route exact path="/movie/update/:movieID" element={<MovieUpdate/>}/>
                                    <Route exact path="/show" element={<Show/>}/>
                                    <Route exact path="/show/create" element={<ShowCreate/>}/>
                                    <Route exact path="/show/update/:showID" element={<ShowUpdate/>}/>
                                    <Route exact path="show/buy/:showID" element={<Buy/>}/>
                                    <Route exact path="/show/:showID/ticket/:seatID" element={<Ticket/>}/>
                                    <Route exact path="*" element={<main style={{padding: "1rem", fontSize: "20px"}}>
                                        <p>Brak żądanej strony!</p>
                                    </main>}
                                    />
                                </Route>
                                <Route exact path="/login" element={<Login />}/>


                            </Routes>
                        </Provider>
                    </main>
                </div>
            </div>
        </>

    );
}

export default AllRoutes;