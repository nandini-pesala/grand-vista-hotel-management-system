import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";
import DashboardCard from "../../components/DashboardCard";

import {
    getReadyOrders,
    getDeliveredOrders
} from "../../services/foodService";

function RoomServiceDashboard() {

    const [stats, setStats] = useState({
        ready: 0,
        delivered: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const readyResponse = await getReadyOrders();
            const deliveredResponse = await getDeliveredOrders();

            setStats({
                ready: Array.isArray(readyResponse.data)
                    ? readyResponse.data.length
                    : 0,

                delivered: Array.isArray(deliveredResponse.data)
                    ? deliveredResponse.data.length
                    : 0
            });

        } catch (error) {

            console.error(error);

            setStats({
                ready: 0,
                delivered: 0
            });

        }

    };

    return (

        <Layout>

            {/* Hero Banner */}

            <div
                className="card border-0 shadow-lg mb-4"
                style={{
                    background:
                        "linear-gradient(135deg,#0F172A,#1E3A8A)",
                    borderRadius: "20px",
                    color: "white"
                }}
            >

                <div className="card-body p-5">

                    <h2 className="fw-bold mb-2">
                        🍽️ Room Service Dashboard
                    </h2>

                    <p className="mb-0 opacity-75">
                        Monitor food delivery requests, ready orders and completed deliveries.
                    </p>

                </div>

            </div>

            {/* Statistics */}

            <div className="row g-4">

                <div className="col-lg-6">

                    <div
                        className="card border-0 shadow-lg h-100"
                        style={{
                            borderRadius: "18px",
                            transition: ".3s"
                        }}
                    >

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <h6 className="text-muted">
                                        READY ORDERS
                                    </h6>

                                    <h1
                                        className="fw-bold text-primary"
                                    >
                                        {stats.ready}
                                    </h1>

                                </div>

                                <div
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: "50%",
                                        background: "#dbeafe",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: "40px"
                                    }}
                                >
                                    🍽️
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="col-lg-6">

                    <div
                        className="card border-0 shadow-lg h-100"
                        style={{
                            borderRadius: "18px",
                            transition: ".3s"
                        }}
                    >

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <h6 className="text-muted">
                                        DELIVERED ORDERS
                                    </h6>

                                    <h1
                                        className="fw-bold text-success"
                                    >
                                        {stats.delivered}
                                    </h1>

                                </div>

                                <div
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: "50%",
                                        background: "#dcfce7",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: "40px"
                                    }}
                                >
                                    🚚
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Summary */}

            <div className="row mt-4">

                <div className="col-12">

                    <div
                        className="card border-0 shadow"
                        style={{
                            borderRadius: "18px"
                        }}
                    >

                        <div className="card-body">

                            <h4 className="fw-bold mb-3">
                                Today's Summary
                            </h4>

                            <div className="row text-center">

                                <div className="col-md-6">

                                    <h5 className="text-primary">
                                        Ready to Deliver
                                    </h5>

                                    <h2>{stats.ready}</h2>

                                </div>

                                <div className="col-md-6">

                                    <h5 className="text-success">
                                        Successfully Delivered
                                    </h5>

                                    <h2>{stats.delivered}</h2>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default RoomServiceDashboard;