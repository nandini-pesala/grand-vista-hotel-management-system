import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    getTodaysDepartures
}
from "../../services/bookingService";

function TodaysDepartures() {

    const [departures,
    setDepartures] =
    useState([]);

    useEffect(() => {

        loadDepartures();

    }, []);

    const loadDepartures =
    async () => {

        const response =
        await getTodaysDepartures();

        setDepartures(
            response.data
        );
    };

   return (

    <Layout>

        <div className="container-fluid py-3">

            {/* Page Heading */}
            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold text-dark mb-1">
                        Today's Departures
                    </h2>

                    <p className="text-muted mb-0">
                        Guests scheduled to check out today
                    </p>
                </div>

                <span className="badge bg-danger fs-6 px-3 py-2 rounded-pill">
                    {departures.length} Departure(s)
                </span>

            </div>

            {/* Table Card */}

            <div
                className="card border-0 shadow-lg rounded-4 overflow-hidden"
            >

                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0">

                            <thead
                                className="table-dark"
                            >

                                <tr>

                                    <th className="py-3">Booking ID</th>
                                    <th>Customer</th>
                                    <th>Room</th>

                                </tr>

                            </thead>

                            <tbody>

                                {departures.length > 0 ? (

                                    departures.map(item => (

                                        <tr
                                            key={item.bookingId}
                                        >

                                            <td>

                                                <span className="fw-bold text-primary">
                                                    #{item.bookingId}
                                                </span>

                                            </td>

                                            <td>

                                                <div className="fw-semibold">
                                                    {item.customer?.customerName}
                                                </div>

                                            </td>

                                            <td>

                                                <span className="badge bg-warning text-dark fs-6 px-3 py-2 rounded-pill">
                                                    Room {item.room?.roomNumber}
                                                </span>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="3"
                                            className="text-center py-5"
                                        >

                                            <div className="fs-1 mb-3">
                                                🚪
                                            </div>

                                            <h5 className="text-muted">
                                                No Departures Today
                                            </h5>

                                            <p className="text-secondary mb-0">
                                                There are no scheduled check-outs today.
                                            </p>

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    </Layout>

);
}

export default TodaysDepartures;