import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";
import DashboardCard from "../../components/DashboardCard";

import {
    FaTools,
    FaClock,
    FaSpinner,
    FaCheckCircle
} from "react-icons/fa";

import {
    getAllRequests,
    getPendingRequests,
    getInProgressRequests,
    getCompletedRequests
} from "../../services/maintenanceService";

function MaintenanceDashboard() {

    const [stats, setStats] = useState({
        total: 0,
        pending: 0,
        inProgress: 0,
        completed: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const all = await getAllRequests();
            const pending = await getPendingRequests();
            const progress = await getInProgressRequests();
            const completed = await getCompletedRequests();

            setStats({
                total: all.data.length,
                pending: pending.data.length,
                inProgress: progress.data.length,
                completed: completed.data.length
            });

        } catch (error) {

            console.error(error);

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
                                🔧 Maintenance Dashboard
                            </h2>

                            <p className="mb-0 opacity-75">
                                Monitor and manage maintenance requests.
                            </p>

                        </div>

                        <div
                            style={{
                                background:
                                    "rgba(255,255,255,0.15)",
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
                                TOTAL REQUESTS
                            </div>

                            <div
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "700"
                                }}
                            >
                                {stats.total}
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Statistics Cards */}

            <div className="row g-4 mb-5">

                <div className="col-md-6 col-lg-3">

                    <div
                        className="card border-0 shadow-sm h-100"
                        style={{
                            borderRadius: "18px",
                            borderLeft: "5px solid #2563EB"
                        }}
                    >

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <p
                                        className="text-muted mb-2"
                                        style={{
                                            fontSize: "15px",
                                            fontWeight: "600"
                                        }}
                                    >
                                        Total Requests
                                    </p>

                                    <h2
                                        className="fw-bold mb-0"
                                        style={{
                                            color: "#1E3A8A"
                                        }}
                                    >
                                        {stats.total}
                                    </h2>

                                </div>

                                <div
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        borderRadius: "14px",
                                        background: "#EFF6FF",
                                        color: "#2563EB",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "23px"
                                    }}
                                >
                                    <FaTools />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="col-md-6 col-lg-3">

                    <div
                        className="card border-0 shadow-sm h-100"
                        style={{
                            borderRadius: "18px",
                            borderLeft: "5px solid #F59E0B"
                        }}
                    >

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <p
                                        className="text-muted mb-2"
                                        style={{
                                            fontSize: "15px",
                                            fontWeight: "600"
                                        }}
                                    >
                                        Pending
                                    </p>

                                    <h2
                                        className="fw-bold mb-0"
                                        style={{
                                            color: "#92400E"
                                        }}
                                    >
                                        {stats.pending}
                                    </h2>

                                </div>

                                <div
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        borderRadius: "14px",
                                        background: "#FEF3C7",
                                        color: "#D97706",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "23px"
                                    }}
                                >
                                    <FaClock />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="col-md-6 col-lg-3">

                    <div
                        className="card border-0 shadow-sm h-100"
                        style={{
                            borderRadius: "18px",
                            borderLeft: "5px solid #6366F1"
                        }}
                    >

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <p
                                        className="text-muted mb-2"
                                        style={{
                                            fontSize: "15px",
                                            fontWeight: "600"
                                        }}
                                    >
                                        In Progress
                                    </p>

                                    <h2
                                        className="fw-bold mb-0"
                                        style={{
                                            color: "#4338CA"
                                        }}
                                    >
                                        {stats.inProgress}
                                    </h2>

                                </div>

                                <div
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        borderRadius: "14px",
                                        background: "#EEF2FF",
                                        color: "#4F46E5",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "23px"
                                    }}
                                >
                                    <FaSpinner />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="col-md-6 col-lg-3">

                    <div
                        className="card border-0 shadow-sm h-100"
                        style={{
                            borderRadius: "18px",
                            borderLeft: "5px solid #16A34A"
                        }}
                    >

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <p
                                        className="text-muted mb-2"
                                        style={{
                                            fontSize: "15px",
                                            fontWeight: "600"
                                        }}
                                    >
                                        Completed
                                    </p>

                                    <h2
                                        className="fw-bold mb-0"
                                        style={{
                                            color: "#166534"
                                        }}
                                    >
                                        {stats.completed}
                                    </h2>

                                </div>

                                <div
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        borderRadius: "14px",
                                        background: "#DCFCE7",
                                        color: "#16A34A",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "23px"
                                    }}
                                >
                                    <FaCheckCircle />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Maintenance Summary */}

            <div
                className="card border-0 shadow-sm"
                style={{
                    borderRadius: "18px",
                    overflow: "hidden"
                }}
            >

                <div
                    className="card-header border-0"
                    style={{
                        background:
                            "linear-gradient(135deg, #0F172A, #1E3A8A)",
                        color: "white",
                        padding: "18px 24px"
                    }}
                >

                    <div className="d-flex align-items-center">

                        <FaTools
                            className="me-2"
                            style={{
                                fontSize: "20px"
                            }}
                        />

                        <h5 className="mb-0 fw-bold">
                            Maintenance Summary
                        </h5>

                    </div>

                </div>


                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0">

                            <thead
                                style={{
                                    background: "#F8FAFC"
                                }}
                            >

                                <tr>

                                    <th
                                        className="px-4 py-3"
                                        style={{
                                            color: "#475569"
                                        }}
                                    >
                                        Status
                                    </th>

                                    <th
                                        className="py-3"
                                        style={{
                                            color: "#475569"
                                        }}
                                    >
                                        Count
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                <tr>

                                    <td className="px-4 fw-semibold">
                                        <span
                                            className="badge"
                                            style={{
                                                background: "#EFF6FF",
                                                color: "#1D4ED8",
                                                padding: "8px 12px",
                                                borderRadius: "8px"
                                            }}
                                        >
                                            🔧 Total Requests
                                        </span>
                                    </td>

                                    <td className="fw-bold">
                                        {stats.total}
                                    </td>

                                </tr>


                                <tr>

                                    <td className="px-4 fw-semibold">
                                        <span
                                            className="badge"
                                            style={{
                                                background: "#FEF3C7",
                                                color: "#92400E",
                                                padding: "8px 12px",
                                                borderRadius: "8px"
                                            }}
                                        >
                                            🕐 Pending
                                        </span>
                                    </td>

                                    <td className="fw-bold">
                                        {stats.pending}
                                    </td>

                                </tr>


                                <tr>

                                    <td className="px-4 fw-semibold">
                                        <span
                                            className="badge"
                                            style={{
                                                background: "#EEF2FF",
                                                color: "#4338CA",
                                                padding: "8px 12px",
                                                borderRadius: "8px"
                                            }}
                                        >
                                            🔄 In Progress
                                        </span>
                                    </td>

                                    <td className="fw-bold">
                                        {stats.inProgress}
                                    </td>

                                </tr>


                                <tr>

                                    <td className="px-4 fw-semibold">
                                        <span
                                            className="badge"
                                            style={{
                                                background: "#DCFCE7",
                                                color: "#166534",
                                                padding: "8px 12px",
                                                borderRadius: "8px"
                                            }}
                                        >
                                            ✓ Completed
                                        </span>
                                    </td>

                                    <td className="fw-bold">
                                        {stats.completed}
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </Layout>
    );
}

export default MaintenanceDashboard;