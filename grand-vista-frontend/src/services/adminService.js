import api from "./api";

export const getAllCustomers = () =>
    api.get("/customers");

export const getAllRooms = () =>
    api.get("/rooms");

export const getAllBookings = () =>
    api.get("/bookings");
