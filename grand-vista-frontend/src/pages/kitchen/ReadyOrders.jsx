import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";

import {
    getReadyOrders
} from "../../services/foodService";

function ReadyOrders() {

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

    return (

        <Layout>

            {/* Page Header */}

            <div
                className="card border-0 shadow-sm mb-4"
                style={{
                    borderRadius: "18px",
                    background:
                        "linear-gradient(135deg, #0F172A, #1E3A8A)",
                    color: "white"
                }}
            >

                <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-center">

                        <div>

                            <h2 className="fw-bold mb-1">
                                ✅ Ready Orders
                            </h2>

                            <p className="mb-0 opacity-75">
                                Food orders that are ready for delivery.
                            </p>

                        </div>

                        <div
                            style={{
                                background: "rgba(255,255,255,0.15)",
                                borderRadius: "14px",
                                padding: "12px 20px",
                                textAlign: "center"
                            }}
                        >

                            <div
                                style={{
                                    fontSize: "13px",
                                    opacity: 0.8
                                }}
                            >
                                READY
                            </div>

                            <div
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "700"
                                }}
                            >
                                {orders.length}
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Ready Orders Table */}

            <div
                className="card border-0 shadow-sm"
                style={{
                    borderRadius: "18px",
                    overflow: "hidden"
                }}
            >

                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table
                            className="table table-hover align-middle mb-0"
                        >

                            <thead
                                style={{
                                    background: "#1F2937",
                                    color: "white"
                                }}
                            >

                                <tr>

                                    <th className="px-4 py-3">
                                        Order ID
                                    </th>

                                    <th className="py-3">
                                        Customer
                                    </th>

                                    <th className="py-3">
                                        Room
                                    </th>

                                    <th className="py-3">
                                        Food
                                    </th>

                                    <th className="py-3">
                                        Quantity
                                    </th>

                                    <th className="py-3">
                                        Total
                                    </th>

                                    <th className="py-3">
                                        Status
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {orders.length > 0 ? (

                                    orders.map((order) => (

                                        <tr key={order.orderId}>

                                            {/* Order ID */}

                                            <td className="px-4">

                                                <span
                                                    style={{
                                                        fontWeight: "700",
                                                        color: "#1E3A8A"
                                                    }}
                                                >
                                                    #{order.orderId}
                                                </span>

                                            </td>


                                            {/* Customer */}

                                            <td>

                                                <span
                                                    style={{
                                                        fontWeight: "500"
                                                    }}
                                                >
                                                    {order.customerName}
                                                </span>

                                            </td>


                                            {/* Room */}

                                            <td>

                                                <span
                                                    className="badge"
                                                    style={{
                                                        background: "#EFF6FF",
                                                        color: "#1D4ED8",
                                                        fontSize: "13px",
                                                        padding: "7px 11px"
                                                    }}
                                                >
                                                    Room {order.roomNumber}
                                                </span>

                                            </td>


                                            {/* Food */}

                                            <td>

                                                <span
                                                    style={{
                                                        fontWeight: "600"
                                                    }}
                                                >
                                                    {order.foodName}
                                                </span>

                                            </td>


                                            {/* Quantity */}

                                            <td>

                                                <span
                                                    className="badge bg-light text-dark"
                                                    style={{
                                                        fontSize: "14px",
                                                        padding: "7px 11px"
                                                    }}
                                                >
                                                    × {order.quantity}
                                                </span>

                                            </td>


                                            {/* Total */}

                                            <td>

                                                <span
                                                    style={{
                                                        fontWeight: "700",
                                                        color: "#198754",
                                                        fontSize: "16px"
                                                    }}
                                                >
                                                    ₹{order.totalAmount}
                                                </span>

                                            </td>


                                            {/* Status */}

                                            <td>

                                                <span
                                                    className="badge"
                                                    style={{
                                                        background: "#DCFCE7",
                                                        color: "#166534",
                                                        padding: "8px 12px",
                                                        fontSize: "12px",
                                                        borderRadius: "8px"
                                                    }}
                                                >
                                                    ✓ {order.orderStatus}
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

                                            <div
                                                style={{
                                                    fontSize: "55px",
                                                    marginBottom: "10px"
                                                }}
                                            >
                                                🍽️
                                            </div>

                                            <h5
                                                className="fw-bold text-muted"
                                            >
                                                No Ready Orders
                                            </h5>

                                            <p className="text-secondary mb-0">
                                                Orders marked as ready will
                                                appear here.
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

export default ReadyOrders;
