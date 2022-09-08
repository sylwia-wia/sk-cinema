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

export const convertShowApiResponse = response => ({
    showID: response.id,
    showDate: response.show,
    endTime: response.endTime,
    movie: response.movie,
    room: response.room,
    showSeats: response.showSeats,

})
