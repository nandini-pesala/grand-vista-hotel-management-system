import { useEffect, useState } from "react";
import {
    FaCalendarCheck,
    FaHistory,
    FaTimesCircle,
    FaMoneyBillWave,
    FaHotel
} from "react-icons/fa";

import Layout from "../../layouts/Layout";

import {
    getCurrentBookings,
    getPastBookings,
    getCancelledBookings
} from "../../services/bookingService";

import {
    getCustomerPayments
} from "../../services/paymentService";

function CustomerDashboard() {

    const user = JSON.parse(localStorage.getItem("user"));

    const customerId = user?.customerId;
    const customerName = user?.customerName || "Guest";

    const [stats, setStats] = useState({

        activeBookings: 0,
        bookingHistory: 0,
        cancelBooking: 0,
        payments: 0

    });

    useEffect(() => {

        if (customerId) {

            loadDashboard();

        }

    }, [customerId]);

    const loadDashboard = async () => {

        try {

            const current =
                await getCurrentBookings(customerId);

            const history =
                await getPastBookings(customerId);

            const cancelled =
                await getCancelledBookings(customerId);

            const payments =
                await getCustomerPayments(customerId);

            setStats({

                activeBookings:
                    current.data.length,

                bookingHistory:
                    history.data.length,

                cancelBooking:
                    cancelled.data.length,

                payments:
                    payments.data.length

            });

        }

        catch (error) {

            console.error(error);

        }

    };

    const cards = [

        {
            title: "Active Bookings",
            value: stats.activeBookings,
            icon: <FaCalendarCheck size={38} />,
            color: "#16A34A",
            bg: "#ECFDF5"
        },

        {
            title: "Booking History",
            value: stats.bookingHistory,
            icon: <FaHistory size={38} />,
            color: "#2563EB",
            bg: "#EFF6FF"
        },

        {
            title: "Cancelled",
            value: stats.cancelBooking,
            icon: <FaTimesCircle size={38} />,
            color: "#DC2626",
            bg: "#FEF2F2"
        },

        {
            title: "Payments",
            value: stats.payments,
            icon: <FaMoneyBillWave size={38} />,
            color: "#F59E0B",
            bg: "#FFF7ED"
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

                            <h2 className="fw-bold">

                                Welcome,

                                <span
                                    style={{
                                        color: "#FBBF24"
                                    }}
                                >

                                    {" "}{customerName}

                                </span>

                                👋

                            </h2>

                            <p
                                className="mt-3 mb-2"
                                style={{
                                    color: "#E5E7EB",
                                    fontSize: "17px"
                                }}
                            >

                                Manage your bookings, payments and enjoy your stay at
                                Grand Vista Hotel.

                            </p>

                            <span
                                className="badge bg-warning text-dark fs-6 px-3 py-2"
                            >

                                📅 {new Date().toLocaleDateString()}

                            </span>

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

            {/* Dashboard Cards */}

            <div className="row g-4">

                {

                    cards.map((card, index) => (

                        <div
                            className="col-xl-3 col-md-6"
                            key={index}
                        >

                            <div
                                className="card border-0 shadow h-100"
                                style={{
                                    borderRadius: "18px",
                                    background: card.bg
                                }}
                            >

                                <div className="card-body p-4">

                                    <div className="d-flex justify-content-between align-items-center">

                                        <div>

                                            <h6
                                                className="text-secondary"
                                            >

                                                {card.title}

                                            </h6>

                                            <h2
                                                className="fw-bold"
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

                                                background: "#fff",

                                                display: "flex",

                                                justifyContent: "center",

                                                alignItems: "center",

                                                color: card.color,

                                                boxShadow:
                                                    "0 6px 15px rgba(0,0,0,.08)"

                                            }}

                                        >

                                            {card.icon}

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

            {/* Quick Information */}

            <div className="card border-0 shadow mt-5">

                <div className="card-body">

                    <h4 className="fw-bold mb-3">

                        Quick Information

                    </h4>

                    <ul className="mb-0">

                        <li>
                            Check your current room bookings anytime.
                        </li>

                        <li>
                            View complete booking history.
                        </li>

                        <li>
                            Track cancelled bookings.
                        </li>

                        <li>
                            View all payment records and invoices.
                        </li>

                    </ul>

                </div>

            </div>

        </Layout>

    );

}

export default CustomerDashboard;