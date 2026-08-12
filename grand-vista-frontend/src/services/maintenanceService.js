import api from "./api";

export const getAllRequests = () =>
    api.get("/maintenance");

export const getPendingRequests = () =>
    api.get("/maintenance/pending");

export const getInProgressRequests = () =>
    api.get("/maintenance/inprogress");

export const getCompletedRequests = () =>
    api.get("/maintenance/completed");

export const startMaintenance = (maintenanceId) =>
    api.put(`/maintenance/start/${maintenanceId}`);

export const resolveIssue = (maintenanceId) =>
    api.put(`/maintenance/resolve/${maintenanceId}`);

export const createRequest = (data) =>
    api.post("/maintenance", data);