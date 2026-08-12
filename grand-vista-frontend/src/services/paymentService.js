import api from "./api";

export const getAllPayments = () =>
    api.get("/payments");

export const createPayment = (data) =>
    api.post("/payments", data);

export const getCustomerPayments = (customerId) =>
    api.get(`/payments/customer/${customerId}`);

export const getRevenue = () =>
    api.get("/payments/revenue");

export const getBill = (bookingId) =>
    api.get(`/payments/bill/${bookingId}`);

export const  getFinalBill = (bookingId) =>
    api.get(`/payments/final-bill/${bookingId}`);

export const downloadInvoice = (bookingId) =>
    api.get(`/payments/invoice/${bookingId}`, {
      responseType: "blob"
    });