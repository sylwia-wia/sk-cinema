import {createAction} from "@reduxjs/toolkit";
import {convertMovieApiResponse} from "../../utils/converters";
import {createMovieApiCall, deleteMovieApiCall, getAllMoviesApiCall, updateMovieApiCall} from "../../api/movie";

export const createMovie = createAction('MOVIE/CREATE');
export const updateMovie = createAction('MOVIE/UPDATE');
export const deleteMovie = createAction('MOVIE/DELETE');

export const movieCreate = (payload) => (dispatch, getState) => {
    createMovieApiCall(payload)
        .then((response) => {
            dispatch(createMovie(convertMovieApiResponse(response.data)));
        })
}

export const movieUpdate = (payload) => (dispatch, getState) => {
   updateMovieApiCall(payload)
        .then((response) => {
            dispatch(updateMovie(convertMovieApiResponse(response.data)));
        })
}

export const getAllMovies = () => (dispatch, getState) => {
    getAllMoviesApiCall()
        .then((response) => {
            const allMovies = response.data;
            
            allMovies.forEach(movie => {
                movie.movieID = movie.id;
                delete movie.id;

                dispatch(createMovie(movie))
            });
        })
        .catch(error => console.error(`Error: ${error}`));
};

export const movieDelete = (movieID) => (dispatch, getState) => {
  deleteMovieApiCall(movieID)
        .then((response) => {
            dispatch(deleteMovie(movieID));
        })

}