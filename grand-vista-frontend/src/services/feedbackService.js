import api from "./api";

export const addFeedback = (data) =>
    api.post("/feedback", data);

export const getAllFeedback = () =>
    api.get("/feedback");