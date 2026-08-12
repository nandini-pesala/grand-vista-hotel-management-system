import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    getReadyOrders,
    deliverOrder
} from "../../services/foodService";

function DeliverOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {

        try {

            const response = await getReadyOrders();

            setOrders(
                Array.isArray(response.data)
                    ? response.data
                    : []
            );

        } catch (error) {

            console.error(error);
            setOrders([]);

        }

    };

    const deliver = async (id) => {

        try {

            await deliverOrder(id);

            alert("Order Delivered Successfully");

            loadOrders();

        } catch (error) {

            console.error(error);

            alert("Failed to Deliver Order");

        }

    };

    return (

        <Layout>

            {/* Header */}

            <div
                className="card border-0 shadow-lg mb-4"
                style={{
                    background:
                        "linear-gradient(135deg,#0F172A,#1E3A8A)",
                    borderRadius: "20px",
                    color: "white"
                }}
            >

                <div className="card-body p-4">

                    <h2 className="fw-bold">
                        🚚 Deliver Orders
                    </h2>

                    <p className="mb-0">
                        Deliver prepared food orders to customer rooms.
                    </p>

                </div>

            </div>

            {/* Statistics */}

            <div className="row mb-4">

                <div className="col-md-6">

                    <div
                        className="card border-0 shadow"
                        style={{ borderRadius: "18px" }}
                    >

                        <div className="card-body d-flex justify-content-between align-items-center">

                            <div>

                                <h6 className="text-muted">
                                    READY ORDERS
                                </h6>

                                <h1 className="fw-bold text-primary">
                                    {orders.length}
                                </h1>

                            </div>

                            <div
                                style={{
                                    width: 75,
                                    height: 75,
                                    borderRadius: "50%",
                                    background: "#DBEAFE",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "35px"
                                }}
                            >
                                🍽️
                            </div>

                        </div>

                    </div>

                </div>

                <div className="col-md-6">

                    <div
                        className="card border-0 shadow"
                        style={{ borderRadius: "18px" }}
                    >

                        <div className="card-body d-flex justify-content-between align-items-center">

                            <div>

                                <h6 className="text-muted">
                                    PENDING DELIVERY
                                </h6>

                                <h1 className="fw-bold text-warning">
                                    {orders.length}
                                </h1>

                            </div>

                            <div
                                style={{
                                    width: 75,
                                    height: 75,
                                    borderRadius: "50%",
                                    background: "#FEF3C7",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "35px"
                                }}
                            >
                                🚚
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Orders Table */}

            <div
                className="card border-0 shadow"
                style={{ borderRadius: "18px" }}
            >

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead className="table-dark">

                                <tr>

                                    <th>#</th>
                                    <th>Customer</th>
                                    <th>Room</th>
                                    <th>Food</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th className="text-center">Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {orders.length > 0 ? (

                                    orders.map(order => (

                                        <tr key={order.orderId}>

                                            <td>
                                                #{order.orderId}
                                            </td>

                                            <td>
                                                {order.customerName}
                                            </td>

                                            <td>
                                                {order.roomNumber}
                                            </td>

                                            <td>
                                                {order.foodName}
                                            </td>

                                            <td>
                                                {order.quantity}
                                            </td>

                                            <td
                                                className="fw-bold text-success"
                                            >
                                                ₹{order.totalAmount}
                                            </td>

                                            <td>

                                                <span className="badge bg-info px-3 py-2">

                                                    {order.orderStatus}

                                                </span>

                                            </td>

                                            <td className="text-center">

                                                <button

                                                    className="btn btn-success fw-bold"

                                                    onClick={() =>
                                                        deliver(order.orderId)
                                                    }

                                                >

                                                    🚚 Deliver

                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="8"
                                            className="text-center py-5"
                                        >

                                            <div
                                                style={{ fontSize: "60px" }}
                                            >
                                                📦
                                            </div>

                                            <h4 className="text-muted">

                                                No Ready Orders

                                            </h4>

                                            <p className="text-secondary">

                                                Orders marked as READY will appear here.

                                            </p>

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default DeliverOrders;