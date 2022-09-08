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

// export const buyTicketApiCall = (payload) => {
//     const {showID, seatID} = payload;
//     const ticketID = Math.random().toString(36).substring(7);
//
//     const formData = new FormData();
//     formData.append('showID', payload.showID);
//     formData.append('seatID', payload.seatID);
//     formData.append('ticketID', payload.ticketID);
//
//     return client.post(`/shows/${showID}/buyTicket `, formData);
// }

