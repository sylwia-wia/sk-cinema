import React from "react";
import {useNavigate} from "react-router-dom";
import MovieForm from "./MovieForm";
import {useDispatch, useSelector} from "react-redux";
import {movieCreate} from "../redux/movie/actions";

export default function MovieCreate() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movie);

    function onFormSubmitHandler(formData) {
        dispatch(movieCreate(formData));
        navigate('/movie');
    }

    return (
        <>
            <h2 className="px-3">Dodaj nowy film</h2>
            <MovieForm movies={movies} onFormSubmitHandler={onFormSubmitHandler}/>
        </>
    );
}

