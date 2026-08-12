import api from "./api";

export const registerCustomer = (data) =>
  api.post("/auth/register", data);

export const login = (data) =>
  api.post("/auth/login", data);

export const customerLogin = (data) =>
  api.post("/auth/customer/login", data);

export const employeeLogin = (data) =>
  api.post("/auth/employee/login", data);

export const adminLogin = (data) =>
  api.post("/auth/admin/login", data);

