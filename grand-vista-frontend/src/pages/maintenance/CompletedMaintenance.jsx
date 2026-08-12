import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    getCompletedRequests
} from "../../services/maintenanceService";

function CompletedMaintenance() {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        loadRequests();
    }, []);

    const loadRequests = async () => {

        try {

            const response = await getCompletedRequests();

            setRequests(
                Array.isArray(response.data)
                    ? response.data
                    : []
            );

        } catch (error) {

            console.error(error);

            setRequests([]);

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
                                ✅ Completed Maintenance
                            </h2>

                            <p className="mb-0 opacity-75">
                                View all maintenance issues that have been resolved.
                            </p>

                        </div>

                        {/* Completed Count */}

                        <div
                            style={{
                                background: "rgba(255,255,255,0.15)",
                                borderRadius: "14px",
                                padding: "12px 22px",
                                textAlign: "center",
                                minWidth: "100px"
                            }}
                        >

                            <div
                                style={{
                                    fontSize: "13px",
                                    opacity: 0.8
                                }}
                            >
                                COMPLETED
                            </div>

                            <div
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "700"
                                }}
                            >
                                {requests.length}
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Table Card */}

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

                                    <th
                                        className="px-4 py-3"
                                        style={{ width: "100px" }}
                                    >
                                        ID
                                    </th>

                                    <th className="py-3">
                                        Room
                                    </th>

                                    <th className="py-3">
                                        Issue
                                    </th>

                                    <th className="py-3">
                                        Request Date
                                    </th>

                                    <th
                                        className="py-3 text-center"
                                        style={{ width: "150px" }}
                                    >
                                        Status
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {requests.length > 0 ? (

                                    requests.map((request) => (

                                        <tr
                                            key={request.maintenanceId}
                                        >

                                            {/* ID */}

                                            <td className="px-4">

                                                <span
                                                    style={{
                                                        fontWeight: "700",
                                                        color: "#1E3A8A"
                                                    }}
                                                >
                                                    #{request.maintenanceId}
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
                                                        padding: "8px 12px",
                                                        borderRadius: "8px"
                                                    }}
                                                >
                                                    Room{" "}
                                                    {request.room?.roomNumber ||
                                                        "N/A"}
                                                </span>

                                            </td>


                                            {/* Issue */}

                                            <td>

                                                <div
                                                    style={{
                                                        maxWidth: "350px",
                                                        fontWeight: "500",
                                                        color: "#374151"
                                                    }}
                                                >
                                                    {request.issueDescription}
                                                </div>

                                            </td>


                                            {/* Request Date */}

                                            <td>

                                                <span
                                                    className="badge bg-light text-dark"
                                                    style={{
                                                        fontSize: "13px",
                                                        padding: "8px 11px",
                                                        borderRadius: "8px"
                                                    }}
                                                >
                                                    📅 {request.requestDate}
                                                </span>

                                            </td>


                                            {/* Status */}

                                            <td className="text-center">

                                                <span
                                                    className="badge"
                                                    style={{
                                                        background: "#DCFCE7",
                                                        color: "#166534",
                                                        padding: "8px 13px",
                                                        fontSize: "12px",
                                                        borderRadius: "8px"
                                                    }}
                                                >
                                                    ✓ {request.status}
                                                </span>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    /* Empty State */

                                    <tr>

                                        <td
                                            colSpan="5"
                                            className="text-center py-5"
                                        >

                                            <div
                                                style={{
                                                    fontSize: "55px",
                                                    marginBottom: "10px"
                                                }}
                                            >
                                                ✅
                                            </div>

                                            <h5
                                                className="fw-bold text-muted"
                                            >
                                                No Completed Maintenance
                                            </h5>

                                            <p className="text-secondary mb-0">
                                                Completed maintenance requests
                                                will appear here.
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

export default CompletedMaintenance;