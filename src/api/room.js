import client from "./client";

export const getAllRoomsApiCall = () => client.get(`/rooms`)

export const createRoomApiCall = (payload) => {
    const formData = new FormData();
    formData.append('roomNumber', payload.roomNumber);
    formData.append('capacity', payload.capacity);

    return client.post(`/rooms`, formData)
}

export const updateRoomApiCall = (payload) => {
    const id = payload.roomID;
    const formData = new FormData();
    formData.append('roomNumber', parseInt(payload.roomNumber));
    formData.append('capacity', parseInt(payload.capacity));

    return client.post(`/rooms/${id}`, formData)
}

export const deleteRoomApiCall = (roomID) => client.delete(`/rooms/${roomID}`)