import api from "./api";

export const getAllRooms = () =>
    api.get("/rooms");

export const addRoom = (data) =>
    api.post("/rooms", data);

export const getAvailableRooms = () =>
    api.get("/rooms/available");

export const getOccupiedRooms = () =>
    api.get("/rooms/occupied");