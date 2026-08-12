import api from "./api";

export const getAllMenuItems = () =>
    api.get("/menu");

export const addMenuItem = (data) =>
    api.post("/menu", data);

export const placeOrder = (data) =>
    api.post("/orders", data);

export const getPendingOrders = () =>
    api.get("/orders/pending");

export const getPreparingOrders = () =>
    api.get("/orders/preparing");

export const markPreparing = (id) =>
    api.put(`/orders/prepare/${id}`);

export const markReady = (id) =>
    api.put(`/orders/ready/${id}`);

export const getReadyOrders = () =>
    api.get("/orders/ready");

export const deliverOrder = (id) =>
    api.put(`/orders/deliver/${id}`);

export const getDeliveredOrders = () =>
    api.get("/orders/delivered");

export const getCustomerOrders = (customerId) =>
    api.get(`/orders/customer/${customerId}`);

export const getOrderDetails = (orderId) =>
    api.get(`/order-details/${orderId}`);