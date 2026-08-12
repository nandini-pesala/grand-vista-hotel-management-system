import api from "./api";

export const createBooking = (data) =>
    api.post("/bookings", data);

export const getAllBookings = () =>
    api.get("/bookings");

export const getCustomerBookings = (customerId) =>
    api.get(`/bookings/customer/${customerId}`);

export const cancelBooking = (bookingId) =>
    api.put(`/bookings/cancel/${bookingId}`);

export const checkIn = (bookingId) =>
    api.put(`/bookings/checkin/${bookingId}`);

export const checkOut = (bookingId) =>
    api.put(`/bookings/checkout/${bookingId}`);

export const getTodaysArrivals = () =>
    api.get("/bookings/arrivals/today");

export const  getTodaysDepartures = () =>
    api.get("/bookings/departures/today");

export const  getCurrentBookings = (customerId) =>
    api.get(`/bookings/customer/${customerId}/current`);

export const getPastBookings = (customerId) =>
    api.get(`/bookings/customer/${customerId}/past`);

export const getCancelledBookings = (customerId) =>
    api.get(`/bookings/customer/${customerId}/cancelled`);

