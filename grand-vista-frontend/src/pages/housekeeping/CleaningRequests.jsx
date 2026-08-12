import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    getCleaningRequests,
    updateCompleteCleaning
} from "../../services/housekeepingService";

function CleaningRequests() {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        loadRequests();
    }, []);

    const loadRequests = async () => {

        try {

            const response = await getCleaningRequests();
            setRequests(response.data);

        } catch (error) {

            console.error(error);

        }
    };

    const completeCleaning = async (requestId) => {

        try {

            await updateCompleteCleaning(requestId);

            alert("Cleaning Completed");

            loadRequests();

        } catch (error) {

            console.error(error);

            alert("Unable to complete cleaning");

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
                                🧹 Cleaning Requests
                            </h2>

                            <p className="mb-0 opacity-75">
                                Rooms that need cleaning.
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
                                REQUESTS
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


            {/* Cleaning Requests Table */}

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
                                        ID
                                    </th>

                                    <th className="py-3">
                                        Room
                                    </th>

                                    <th className="py-3">
                                        Request Date
                                    </th>

                                    <th className="py-3">
                                        Status
                                    </th>

                                    <th className="py-3 text-center">
                                        Action
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {requests.length > 0 ? (

                                    requests.map((request) => (

                                        <tr key={request.requestId}>

                                            {/* ID */}

                                            <td className="px-4">

                                                <span
                                                    style={{
                                                        fontWeight: "700",
                                                        color: "#1E3A8A"
                                                    }}
                                                >
                                                    #{request.requestId}
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
                                                    Room {request.room.roomNumber}
                                                </span>

                                            </td>


                                            {/* Request Date */}

                                            <td>

                                                <span
                                                    className="badge bg-light text-dark"
                                                    style={{
                                                        fontSize: "14px",
                                                        padding: "7px 11px"
                                                    }}
                                                >
                                                    {request.requestDate}
                                                </span>

                                            </td>


                                            {/* Status */}

                                            <td>

                                                <span
                                                    className="badge"
                                                    style={{
                                                        background: "#FEF3C7",
                                                        color: "#92400E",
                                                        padding: "8px 12px",
                                                        fontSize: "12px",
                                                        borderRadius: "8px"
                                                    }}
                                                >
                                                    {request.status}
                                                </span>

                                            </td>


                                            {/* Action */}

                                            <td className="text-center">

                                                <button
                                                    className="btn fw-semibold"
                                                    style={{
                                                        background: "#FBBF24",
                                                        color: "#111827",
                                                        border: "none",
                                                        borderRadius: "9px",
                                                        padding: "9px 16px",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                    onClick={() =>
                                                        completeCleaning(
                                                            request.id
                                                        )
                                                    }
                                                >

                                                    🧹 Complete Cleaning

                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

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
                                                🧹
                                            </div>

                                            <h5 className="fw-bold text-muted">
                                                No Cleaning Requests
                                            </h5>

                                            <p className="text-secondary mb-0">
                                                Cleaning requests will appear
                                                here when a room requires cleaning.
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

export default CleaningRequests;