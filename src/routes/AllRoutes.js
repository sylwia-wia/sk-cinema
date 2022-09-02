import {Route, Routes} from "react-router-dom";
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
import React from "react";

function AllRoutes() {
    return (
        <>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <main className={'col mt-3'}>
                        <Routes>
                            <Route path={'/'} element={<Rooms/>}/>
                            <Route path="/rooms" element={<Rooms/>}/>
                            <Route path="/rooms/create" element={<RoomsCreate/>}/>
                            <Route path="/rooms/update/:roomID" element={<RoomsUpdate/>}/>
                            <Route path="/movie" element={<Movie/>}/>
                            <Route path="/movie/create" element={<MovieCreate/>}/>
                            <Route path="/movie/update/:movieID" element={<MovieUpdate/>}/>
                            <Route path="/show" element={<Show/>}/>
                            <Route path="/show/create" element={<ShowCreate/>}/>
                            <Route path="/show/update/:showID" element={<ShowUpdate/>}/>
                            <Route path="show/buy/:showID" element={<Buy/>}/>
                            <Route path="/show/:showID/ticket/:seatID" element={<Ticket/>}/>
                            <Route path="*" element={<main style={{padding: "1rem", fontSize: "20px"}}>
                                <p>Brak żądanej strony!</p>
                            </main>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </>

    );
}
export  default AllRoutes;