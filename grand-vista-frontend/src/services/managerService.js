import api from "./api";

export const getDashboard = () =>
    api.get("/manager/dashboard");

export const getEmployees = () =>
    api.get("/manager/employees");

export const getAvailableRooms = () =>
    api.get("/rooms/available");

export const getOccupiedRooms = () =>
    api.get("/rooms/occupied");

export const getFoodStatistics = () =>
    api.get("/manager/food-statistics");

export const getHousekeepingStatistics = () =>
    api.get("/manager/housekeeping-statistics");

export const getMaintenanceStatistics = () =>
    api.get("/manager/maintenance-statistics");