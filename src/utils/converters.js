export const convertMovieApiResponse = (response) => ({
    movieTitle: response.movieTitle,
    movieTime: response.movieTime,
    movieID: response.id,
})

export const convertRoomApiResponse = (response) => ({
    roomNumber: response.roomNumber,
    capacity: response.capacity,
    roomID: response.id,
})

export const convertShowApiResponse = response => {
    const showSeats = {};

    Object.values(response.showSeats).forEach((showSeat) => {
        showSeats[showSeat.number] = showSeat;
    })

    return {
        showID: response.id,
        showDate: response.show,
        endTime: response.endTime,
        movie: response.movie,
        room: response.room,
        showSeats: showSeats,
    }
};
