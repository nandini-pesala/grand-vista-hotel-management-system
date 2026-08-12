import api from "./api";

export const getAllEmployees = () =>
    api.get("/employees");

export const addEmployee = (data) =>
    api.post("/employees", data);