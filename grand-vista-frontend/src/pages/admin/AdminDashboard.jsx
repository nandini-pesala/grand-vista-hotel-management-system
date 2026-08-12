import { useEffect, useState } from "react";
import {
    FaUsers,
    FaBed,
    FaCalendarCheck,
    FaRupeeSign,
    FaHotel
} from "react-icons/fa";

import Layout from "../../layouts/Layout";

import { getAllEmployees } from "../../services/employeeService";
import { getRevenue } from "../../services/paymentService";
import {
    getAllRooms,
    getAllBookings
} from "../../services/adminService";

function AdminDashboard() {

    const [stats, setStats] = useState({
        employees: 0,
        rooms: 0,
        bookings: 0,
        revenue: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const employees = await getAllEmployees();
            const rooms = await getAllRooms();
            const bookings = await getAllBookings();
            const revenue = await getRevenue();

            setStats({
                employees: employees.data.length,
                rooms: rooms.data.length,
                bookings: bookings.data.length,
                revenue: revenue.data
            });

        } catch (error) {
            console.error(error);
        }
    };

    const cards = [
        {
            title: "Employees",
            value: stats.employees,
            icon: <FaUsers size={40} />,
            bg: "#E8F5E9",
            color: "#16A34A"
        },
        {
            title: "Rooms",
            value: stats.rooms,
            icon: <FaBed size={40} />,
            bg: "#E3F2FD",
            color: "#2563EB"
        },
        {
            title: "Bookings",
            value: stats.bookings,
            icon: <FaCalendarCheck size={40} />,
            bg: "#FFF8E1",
            color: "#F59E0B"
        },
        {
            title: "Revenue",
            value: `₹${stats.revenue}`,
            icon: <FaRupeeSign size={40} />,
            bg: "linear-gradient(135deg,#16a34a,#22c55e)",
            color: "#fff",
            revenue: true
        }
    ];

    return (

        <Layout>

            {/* Welcome Banner */}

            <div
                className="card border-0 shadow-lg mb-5"
                style={{
                    borderRadius: "20px",
                    background:
                        "linear-gradient(135deg,#0F172A,#1E3A8A,#2563EB)",
                    color: "white"
                }}
            >

                <div className="card-body p-5">

                    <div className="row align-items-center">

                        <div className="col-lg-8">

                            <h2 className="fw-bold mb-2">
                                Welcome Back, Admin 👋
                            </h2>

                            <p
                                className="mb-2"
                                style={{
                                    color: "#E5E7EB",
                                    fontSize: "17px"
                                }}
                            >
                                Manage your hotel operations efficiently from one place.
                            </p>

                            <div className="mt-3">

                                <span className="badge bg-warning text-dark fs-6 px-3 py-2">
                                    Grand Vista Hotel
                                </span>

                                <span className="ms-3">
                                    📅 {new Date().toLocaleDateString()}
                                </span>

                                <span className="ms-3">
                                    🕒 {new Date().toLocaleTimeString()}
                                </span>

                            </div>

                        </div>

                        <div className="col-lg-4 text-end">

                            <FaHotel
                                size={90}
                                color="#FBBF24"
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* Statistics */}

            <div className="row g-4">

                {cards.map((card, index) => (

                    <div
                        className="col-xl-3 col-md-6"
                        key={index}
                    >

                        <div
                            className="card border-0 shadow h-100"
                            style={{
                                borderRadius: "18px",
                                background: card.bg,
                                transition: "0.3s ease"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <p
                                            className="mb-2 fw-semibold"
                                            style={{
                                                color: card.revenue ? "#fff" : "#6B7280",
                                                fontSize: "15px"
                                            }}
                                        >
                                            {card.title}
                                        </p>

                                        <h2
                                            className="fw-bold mb-0"
                                            style={{
                                                color: card.color
                                            }}
                                        >
                                            {card.value}
                                        </h2>

                                    </div>

                                    <div
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            borderRadius: "50%",
                                            background: card.revenue
                                                ? "rgba(255,255,255,0.15)"
                                                : "#fff",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: card.color,
                                            boxShadow:
                                                "0 8px 20px rgba(0,0,0,0.08)"
                                        }}
                                    >
                                        {card.icon}
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </Layout>

    );
}

export default AdminDashboard;