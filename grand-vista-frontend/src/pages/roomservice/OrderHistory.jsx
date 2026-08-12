import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";
import { getDeliveredOrders } from "../../services/foodService";

function OrderHistory() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {

        try {

            const response = await getDeliveredOrders();

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

    return (

    <Layout>

        {/* Header */}

        <div
            className="card border-0 shadow-lg mb-4"
            style={{
                background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
                borderRadius: "20px",
                color: "white"
            }}
        >

            <div className="card-body p-4">

                <h2 className="fw-bold mb-1">
                    📋 Delivered Orders
                </h2>

                <p className="mb-0">
                    View all successfully delivered food orders.
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
                                TOTAL DELIVERED
                            </h6>

                            <h1 className="fw-bold text-success">
                                {orders.length}
                            </h1>

                        </div>

                        <div
                            style={{
                                width: "75px",
                                height: "75px",
                                borderRadius: "50%",
                                background: "#DCFCE7",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "35px"
                            }}
                        >
                            ✅
                        </div>

                    </div>

                </div>

            </div>

        </div>

        {/* Table */}

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
                                <th>Food Item</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {orders.length > 0 ? (

                                orders.map(order => (

                                    <tr key={order.orderId}>

                                        <td className="fw-bold">
                                            #{order.orderId}
                                        </td>

                                        <td>
                                            {order.customerName}
                                        </td>

                                        <td>

                                            <span className="badge bg-primary px-3 py-2">
                                                Room {order.roomNumber}
                                            </span>

                                        </td>

                                        <td>
                                            {order.foodName}
                                        </td>

                                        <td>
                                            {order.quantity}
                                        </td>

                                        <td className="fw-bold text-success">
                                            ₹{order.totalAmount}
                                        </td>

                                        <td>

                                            <span className="badge bg-success px-3 py-2">
                                                {order.orderStatus}
                                            </span>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="text-center py-5"
                                    >

                                        <div style={{ fontSize: "60px" }}>
                                            📦
                                        </div>

                                        <h4 className="text-muted">
                                            No Delivered Orders
                                        </h4>

                                        <p className="text-secondary mb-0">
                                            Delivered orders will appear here.
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

export default OrderHistory;