import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import DashboardCard from "../../components/DashboardCard";

import {
    getTodaysArrivals,
    getTodaysDepartures,
    getAllBookings
} from "../../services/bookingService";

import {
    getAvailableRooms
} from "../../services/roomService";

function ReceptionDashboard() {

    const [stats, setStats] = useState({
        arrivals: 0,
        departures: 0,
        bookings: 0,
        rooms: 0
    });

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        const arrivals =
            await getTodaysArrivals();

        const departures =
            await getTodaysDepartures();

        const bookings =
            await getAllBookings();

        const rooms =
            await getAvailableRooms();

        setStats({
            arrivals:
                arrivals.data.length,

            departures:
                departures.data.length,

            bookings:
                bookings.data.length,

            rooms:
                rooms.data.length
        });
    };

    return (

    <Layout>

        {/* Welcome Header */}

        <div
            className="card border-0 shadow-lg mb-4"
            style={{
                background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
                color: "white",
                borderRadius: "20px"
            }}
        >

            <div className="card-body p-4">

                <h2 className="fw-bold mb-2">
                    🏨 Reception Dashboard
                </h2>

                <p className="mb-0">
                    Monitor hotel bookings, arrivals and room availability.
                </p>

            </div>

        </div>

        <div className="row g-4">

            {/* Today's Arrivals */}

            <div className="col-lg-3 col-md-6">

                <div
                    className="card border-0 shadow h-100"
                    style={{
                        borderRadius: "18px",
                        transition: "0.3s"
                    }}
                >

                    <div className="card-body d-flex justify-content-between align-items-center">

                        <div>

                            <small className="text-muted fw-bold">
                                TODAY'S ARRIVALS
                            </small>

                            <h1 className="fw-bold text-success mt-2">
                                {stats.arrivals}
                            </h1>

                        </div>

                        <div
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: "50%",
                                background: "#DCFCE7",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "34px"
                            }}
                        >
                            🛎️
                        </div>

                    </div>

                </div>

            </div>

            {/* Today's Departures */}

            <div className="col-lg-3 col-md-6">

                <div
                    className="card border-0 shadow h-100"
                    style={{
                        borderRadius: "18px"
                    }}
                >

                    <div className="card-body d-flex justify-content-between align-items-center">

                        <div>

                            <small className="text-muted fw-bold">
                                TODAY'S DEPARTURES
                            </small>

                            <h1 className="fw-bold text-danger mt-2">
                                {stats.departures}
                            </h1>

                        </div>

                        <div
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: "50%",
                                background: "#FEE2E2",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "34px"
                            }}
                        >
                            🚪
                        </div>

                    </div>

                </div>

            </div>

            {/* Total Bookings */}

            <div className="col-lg-3 col-md-6">

                <div
                    className="card border-0 shadow h-100"
                    style={{
                        borderRadius: "18px"
                    }}
                >

                    <div className="card-body d-flex justify-content-between align-items-center">

                        <div>

                            <small className="text-muted fw-bold">
                                TOTAL BOOKINGS
                            </small>

                            <h1 className="fw-bold text-primary mt-2">
                                {stats.bookings}
                            </h1>

                        </div>

                        <div
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: "50%",
                                background: "#DBEAFE",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "34px"
                            }}
                        >
                            📋
                        </div>

                    </div>

                </div>

            </div>

            {/* Available Rooms */}

            <div className="col-lg-3 col-md-6">

                <div
                    className="card border-0 shadow h-100"
                    style={{
                        borderRadius: "18px"
                    }}
                >

                    <div className="card-body d-flex justify-content-between align-items-center">

                        <div>

                            <small className="text-muted fw-bold">
                                AVAILABLE ROOMS
                            </small>

                            <h1 className="fw-bold text-warning mt-2">
                                {stats.rooms}
                            </h1>

                        </div>

                        <div
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: "50%",
                                background: "#FEF3C7",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "34px"
                            }}
                        >
                            🛏️
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </Layout>

);
}

export default ReceptionDashboard;