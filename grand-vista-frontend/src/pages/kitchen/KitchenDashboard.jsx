import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    getPendingOrders,
    getPreparingOrders,
    getReadyOrders
} from "../../services/foodService";

function KitchenDashboard() {

    const [stats, setStats] = useState({
        pending: 0,
        preparing: 0,
        ready: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const pending = await getPendingOrders();
            const preparing = await getPreparingOrders();
            const ready = await getReadyOrders();

            setStats({
                pending: Array.isArray(pending.data)
                    ? pending.data.length
                    : 0,

                preparing: Array.isArray(preparing.data)
                    ? preparing.data.length
                    : 0,

                ready: Array.isArray(ready.data)
                    ? ready.data.length
                    : 0
            });

        } catch (error) {

            console.error(error);

            setStats({
                pending: 0,
                preparing: 0,
                ready: 0
            });

        }

    };

    return (

        <Layout>

            {/* Page Header */}

            <div
                className="card border-0 shadow-lg mb-4"
                style={{
                    background:
                        "linear-gradient(135deg, #0F172A, #1E3A8A)",
                    borderRadius: "20px",
                    color: "white"
                }}
            >

                <div className="card-body p-4">

                    <h2 className="fw-bold mb-2">
                        👨‍🍳 Kitchen Dashboard
                    </h2>

                    <p className="mb-0">
                        Monitor food orders and their preparation status.
                    </p>

                </div>

            </div>


            {/* Order Statistics */}

            <div className="row g-4">

                {/* Pending */}

                <div className="col-md-4">

                    <div
                        className="card border-0 shadow-lg h-100"
                        style={{
                            borderRadius: "20px",
                            borderLeft: "6px solid #F59E0B"
                        }}
                    >

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <p
                                        className="text-muted mb-2 fw-semibold"
                                        style={{
                                            letterSpacing: "0.5px"
                                        }}
                                    >
                                        PENDING ORDERS
                                    </p>

                                    <h1
                                        className="fw-bold mb-0"
                                        style={{
                                            fontSize: "48px"
                                        }}
                                    >
                                        {stats.pending}
                                    </h1>

                                    <p className="text-muted mt-2 mb-0">
                                        Orders waiting for preparation
                                    </p>

                                </div>

                                <div
                                    style={{
                                        width: "75px",
                                        height: "75px",
                                        borderRadius: "50%",
                                        background: "#FEF3C7",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "36px"
                                    }}
                                >
                                    🕐
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Preparing */}

                <div className="col-md-4">

                    <div
                        className="card border-0 shadow-lg h-100"
                        style={{
                            borderRadius: "20px",
                            borderLeft: "6px solid #3B82F6"
                        }}
                    >

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <p
                                        className="text-muted mb-2 fw-semibold"
                                        style={{
                                            letterSpacing: "0.5px"
                                        }}
                                    >
                                        PREPARING ORDERS
                                    </p>

                                    <h1
                                        className="fw-bold mb-0"
                                        style={{
                                            fontSize: "48px"
                                        }}
                                    >
                                        {stats.preparing}
                                    </h1>

                                    <p className="text-muted mt-2 mb-0">
                                        Orders currently being prepared
                                    </p>

                                </div>

                                <div
                                    style={{
                                        width: "75px",
                                        height: "75px",
                                        borderRadius: "50%",
                                        background: "#DBEAFE",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "36px"
                                    }}
                                >
                                    👨‍🍳
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Ready */}

                <div className="col-md-4">

                    <div
                        className="card border-0 shadow-lg h-100"
                        style={{
                            borderRadius: "20px",
                            borderLeft: "6px solid #16A34A"
                        }}
                    >

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <p
                                        className="text-muted mb-2 fw-semibold"
                                        style={{
                                            letterSpacing: "0.5px"
                                        }}
                                    >
                                        READY ORDERS
                                    </p>

                                    <h1
                                        className="fw-bold mb-0"
                                        style={{
                                            fontSize: "48px"
                                        }}
                                    >
                                        {stats.ready}
                                    </h1>

                                    <p className="text-muted mt-2 mb-0">
                                        Orders ready for delivery
                                    </p>

                                </div>

                                <div
                                    style={{
                                        width: "75px",
                                        height: "75px",
                                        borderRadius: "50%",
                                        background: "#DCFCE7",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "36px"
                                    }}
                                >
                                    ✅
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default KitchenDashboard;