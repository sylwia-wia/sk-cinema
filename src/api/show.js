import client from "./client";

export const getAllShowsApiCall = () => client.get(`/shows`)

export const createShowApiCall = (payload) => {
    const formData = new FormData();

    formData.append('showDate', payload.showDate);
    formData.append('movie', payload.movieID);
    formData.append('room', payload.roomID);
    formData.append('endTime', payload.endTime);

    return client.post(`/shows`, formData);

}


