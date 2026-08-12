import api from "./api";

export const getCleaningRequests = () =>
    api.get("/housekeeping/pending");

export const updateCompleteCleaning = (requestId) =>
    api.put(`/housekeeping/complete/${requestId}`);