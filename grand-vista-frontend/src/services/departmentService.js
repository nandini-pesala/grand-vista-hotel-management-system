import api from "./api";

export const getAllDepartments = () =>
    api.get("/departments");

export const addDepartment = (data) =>
    api.post("/departments", data);