import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    getHousekeepingStatistics
} from "../../services/managerService";

import {
    FaBroom,
    FaClock,
    FaCheckCircle,
    FaClipboardList
} from "react-icons/fa";

function HousekeepingStatistics() {

    const [stats, setStats] = useState({
        PENDING: 0,
        COMPLETED: 0
    });

    useEffect(() => {
        loadStatistics();
    }, []);

    const loadStatistics = async () => {

        try {

            const response =
                await getHousekeepingStatistics();

            setStats(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const total =
        stats.PENDING +
        stats.COMPLETED;

    const completionRate =
        total === 0
            ? 0
            : Math.round(
                (stats.COMPLETED / total) * 100
            );

    return (

        <Layout>

            <div className="container-fluid px-3 px-md-4">

                {/* Header */}

                <div
                    className="card border-0 shadow-lg mb-4"
                    style={{
                        borderRadius: "20px",
                        background:
                            "linear-gradient(135deg, #0F172A, #1E3A8A)",
                        color: "white"
                    }}
                >

                    <div className="card-body p-4">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h2 className="fw-bold mb-2">
                                    🧹 Housekeeping Statistics
                                </h2>

                                <p className="mb-0 opacity-75">
                                    Monitor room cleaning requests and completion status.
                                </p>

                            </div>

                            <div
                                className="d-none d-md-flex"
                                style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "18px",
                                    background:
                                        "rgba(255,255,255,0.15)",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "28px"
                                }}
                            >
                                <FaBroom />
                            </div>

                        </div>

                    </div>

                </div>


                {/* Statistics Cards */}

                <div className="row g-4 mb-4">

                    {/* Total */}

                    <div className="col-md-4">

                        <div
                            className="card border-0 shadow-sm h-100"
                            style={{
                                borderRadius: "18px",
                                borderLeft:
                                    "5px solid #2563EB"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <p className="text-muted mb-2 fw-semibold">
                                            TOTAL REQUESTS
                                        </p>

                                        <h1 className="fw-bold mb-0 text-primary">
                                            {total}
                                        </h1>

                                        <small className="text-muted">
                                            All cleaning requests
                                        </small>

                                    </div>

                                    <div
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            borderRadius: "16px",
                                            background: "#DBEAFE",
                                            color: "#2563EB",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "25px"
                                        }}
                                    >
                                        <FaClipboardList />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Pending */}

                    <div className="col-md-4">

                        <div
                            className="card border-0 shadow-sm h-100"
                            style={{
                                borderRadius: "18px",
                                borderLeft:
                                    "5px solid #F59E0B"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <p className="text-muted mb-2 fw-semibold">
                                            PENDING CLEANING
                                        </p>

                                        <h1 className="fw-bold mb-0 text-warning">
                                            {stats.PENDING}
                                        </h1>

                                        <small className="text-muted">
                                            Awaiting completion
                                        </small>

                                    </div>

                                    <div
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            borderRadius: "16px",
                                            background: "#FEF3C7",
                                            color: "#D97706",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "25px"
                                        }}
                                    >
                                        <FaClock />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Completed */}

                    <div className="col-md-4">

                        <div
                            className="card border-0 shadow-sm h-100"
                            style={{
                                borderRadius: "18px",
                                borderLeft:
                                    "5px solid #16A34A"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <p className="text-muted mb-2 fw-semibold">
                                            COMPLETED CLEANING
                                        </p>

                                        <h1 className="fw-bold mb-0 text-success">
                                            {stats.COMPLETED}
                                        </h1>

                                        <small className="text-muted">
                                            Successfully completed
                                        </small>

                                    </div>

                                    <div
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            borderRadius: "16px",
                                            background: "#DCFCE7",
                                            color: "#16A34A",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "25px"
                                        }}
                                    >
                                        <FaCheckCircle />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Completion Progress */}

                <div
                    className="card border-0 shadow-sm mb-4"
                    style={{
                        borderRadius: "18px"
                    }}
                >

                    <div className="card-body p-4">

                        <div className="d-flex justify-content-between align-items-center mb-3">

                            <div>

                                <h5 className="fw-bold mb-1">
                                    Cleaning Completion
                                </h5>

                                <small className="text-muted">
                                    Overall housekeeping completion rate
                                </small>

                            </div>

                            <h4 className="fw-bold text-success mb-0">
                                {completionRate}%
                            </h4>

                        </div>

                        <div
                            className="progress"
                            style={{
                                height: "12px",
                                borderRadius: "20px",
                                background: "#E5E7EB"
                            }}
                        >

                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{
                                    width: `${completionRate}%`,
                                    borderRadius: "20px"
                                }}
                            />

                        </div>

                    </div>

                </div>


                {/* Summary Table */}

                <div
                    className="card border-0 shadow-sm"
                    style={{
                        borderRadius: "18px",
                        overflow: "hidden"
                    }}
                >

                    <div
                        className="card-header border-0 text-white p-4"
                        style={{
                            background:
                                "linear-gradient(135deg, #111827, #1F2937)"
                        }}
                    >

                        <div className="d-flex align-items-center gap-2">

                            <FaBroom />

                            <h5 className="mb-0 fw-bold">
                                Cleaning Summary
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

                                        <th className="px-4 py-3">
                                            Status
                                        </th>

                                        <th className="py-3">
                                            Total
                                        </th>

                                        <th className="py-3">
                                            Percentage
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>

                                        <td className="px-4">

                                            <span className="badge bg-warning text-dark px-3 py-2">
                                                Pending
                                            </span>

                                        </td>

                                        <td className="fw-bold">
                                            {stats.PENDING}
                                        </td>

                                        <td>

                                            {total === 0
                                                ? 0
                                                : Math.round(
                                                    (stats.PENDING / total) * 100
                                                )
                                            }%

                                        </td>

                                    </tr>


                                    <tr>

                                        <td className="px-4">

                                            <span className="badge bg-success px-3 py-2">
                                                Completed
                                            </span>

                                        </td>

                                        <td className="fw-bold">
                                            {stats.COMPLETED}
                                        </td>

                                        <td>
                                            {completionRate}%
                                        </td>

                                    </tr>


                                    <tr
                                        style={{
                                            background: "#F8FAFC"
                                        }}
                                    >

                                        <td className="px-4 fw-bold">
                                            Total Requests
                                        </td>

                                        <td className="fw-bold text-primary">
                                            {total}
                                        </td>

                                        <td className="fw-bold">
                                            100%
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );
}

export default HousekeepingStatistics;