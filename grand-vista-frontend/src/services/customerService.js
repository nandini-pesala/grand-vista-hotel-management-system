import api from "./api";

export const registerCustomer = (data) =>
    api.post("/customers/reception/register", data);

export const getCustomerById = (id) =>
    api.get(`/customers/${id}`);

export const updateCustomer = (id, data) =>
    api.put(`/customers/${id}`, data);