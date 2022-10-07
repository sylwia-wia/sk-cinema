import client from "./client";

export const getAllMoviesApiCall = () => client.get(`/movies`)

export const createMovieApiCall = (payload) => {
    const formData = new FormData();
    formData.append('movieTitle', payload.movieTitle);
    formData.append('movieTime', parseInt(payload.movieTime));

    return client.post(`/movies`, formData)
}

export const updateMovieApiCall = (payload) => {
    const id = payload.movieID;
    const formData = new FormData();
    formData.append('movieTitle', payload.movieTitle);
    formData.append('movieTime', parseInt(payload.movieTime));

    return client.post(`/movies/${id}`, formData)

}
export const deleteMovieApiCall = (movieID) => client.delete(`/movies/${movieID}`)

