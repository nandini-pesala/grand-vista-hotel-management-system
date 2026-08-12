import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    FaMoneyBillWave,
    FaUsers,
    FaUserFriends,
    FaHotel,
    FaBed,
    FaCalendarCheck,
    FaSignInAlt,
    FaSignOutAlt,
    FaUtensils,
    FaCheckCircle,
    FaBroom,
    FaTools
} from "react-icons/fa";

import { getDashboard } from "../../services/managerService";

function ManagerDashboard() {

    const [dashboard, setDashboard] = useState({

        totalRevenue: 0,

        totalEmployees: 0,

        totalCustomers: 0,

        totalRooms: 0,

        availableRooms: 0,

        occupiedRooms: 0,

        totalBookings: 0,

        checkedInBookings: 0,

        checkedOutBookings: 0,

        pendingOrders: 0,

        deliveredOrders: 0,

        pendingCleaning: 0,

        completedCleaning: 0,

        pendingMaintenance: 0,

        completedMaintenance: 0

    });

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const response = await getDashboard();

            setDashboard(response.data);

        } catch (error) {

            console.error(error);

        }

    };


    /*
     * Reusable dashboard card
     */

    const StatCard = ({
        title,
        value,
        icon,
        background,
        iconBackground,
        valueColor
    }) => {

        return (

            <div className="col-xl-3 col-lg-4 col-md-6">

                <div
                    className="card border-0 h-100"
                    style={{
                        borderRadius: "18px",
                        background: background,
                        boxShadow:
                            "0 8px 25px rgba(15, 23, 42, 0.08)"
                    }}
                >

                    <div className="card-body p-4">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <p
                                    className="mb-2"
                                    style={{
                                        fontSize: "13px",
                                        fontWeight: "700",
                                        color: "#64748B",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.5px"
                                    }}
                                >
                                    {title}
                                </p>

                                <h2
                                    className="mb-0 fw-bold"
                                    style={{
                                        color: valueColor || "#0F172A"
                                    }}
                                >
                                    {value}
                                </h2>

                            </div>


                            <div
                                style={{
                                    width: "58px",
                                    height: "58px",
                                    borderRadius: "16px",
                                    background: iconBackground,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "24px"
                                }}
                            >
                                {icon}
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        );

    };


    /*
     * Section heading
     */

    const SectionTitle = ({ icon, title, description }) => {

        return (

            <div className="d-flex align-items-center mb-3 mt-5">

                <div
                    style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        background: "#EFF6FF",
                        color: "#1D4ED8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        marginRight: "12px"
                    }}
                >
                    {icon}
                </div>

                <div>

                    <h5
                        className="mb-0 fw-bold"
                        style={{ color: "#0F172A" }}
                    >
                        {title}
                    </h5>

                    <small className="text-muted">
                        {description}
                    </small>

                </div>

            </div>

        );

    };


    return (

        <Layout>

            {/* Main Header */}

            <div
                className="card border-0 shadow-sm mb-4"
                style={{
                    borderRadius: "20px",
                    background:
                        "linear-gradient(135deg, #0F172A, #1E3A8A)",
                    color: "white"
                }}
            >

                <div className="card-body p-4 p-md-5">

                    <div className="d-flex justify-content-between align-items-center">

                        <div>

                            <h2 className="fw-bold mb-2">
                                🏨 Manager Dashboard
                            </h2>

                            <p className="mb-0 opacity-75">
                                Overview of hotel operations, bookings,
                                rooms, food service and maintenance.
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
                                fontSize: "30px"
                            }}
                        >
                            📊
                        </div>

                    </div>

                </div>

            </div>


            {/* Financial & People */}

            <SectionTitle
                icon={<FaMoneyBillWave />}
                title="Overview"
                description="Financial and hotel-wide statistics"
            />

            <div className="row g-4">

                <StatCard
                    title="Total Revenue"
                    value={`₹ ${dashboard.totalRevenue}`}
                    icon={<FaMoneyBillWave />}
                    background="#ECFDF5"
                    iconBackground="#D1FAE5"
                    valueColor="#047857"
                />

                <StatCard
                    title="Employees"
                    value={dashboard.totalEmployees}
                    icon={<FaUsers />}
                    background="#EFF6FF"
                    iconBackground="#DBEAFE"
                    valueColor="#1D4ED8"
                />

                <StatCard
                    title="Customers"
                    value={dashboard.totalCustomers}
                    icon={<FaUserFriends />}
                    background="#F5F3FF"
                    iconBackground="#EDE9FE"
                    valueColor="#6D28D9"
                />

                <StatCard
                    title="Total Rooms"
                    value={dashboard.totalRooms}
                    icon={<FaHotel />}
                    background="#FFF7ED"
                    iconBackground="#FFEDD5"
                    valueColor="#C2410C"
                />

            </div>


            {/* Rooms */}

            <SectionTitle
                icon={<FaBed />}
                title="Room Management"
                description="Current room availability and occupancy"
            />

            <div className="row g-4">

                <StatCard
                    title="Available Rooms"
                    value={dashboard.availableRooms}
                    icon={<FaBed />}
                    background="#ECFDF5"
                    iconBackground="#D1FAE5"
                    valueColor="#047857"
                />

                <StatCard
                    title="Occupied Rooms"
                    value={dashboard.occupiedRooms}
                    icon={<FaHotel />}
                    background="#FEF2F2"
                    iconBackground="#FEE2E2"
                    valueColor="#B91C1C"
                />

            </div>


            {/* Bookings */}

            <SectionTitle
                icon={<FaCalendarCheck />}
                title="Booking Management"
                description="Reservation and guest movement statistics"
            />

            <div className="row g-4">

                <StatCard
                    title="Total Bookings"
                    value={dashboard.totalBookings}
                    icon={<FaCalendarCheck />}
                    background="#EFF6FF"
                    iconBackground="#DBEAFE"
                    valueColor="#1D4ED8"
                />

                <StatCard
                    title="Checked In"
                    value={dashboard.checkedInBookings}
                    icon={<FaSignInAlt />}
                    background="#ECFDF5"
                    iconBackground="#D1FAE5"
                    valueColor="#047857"
                />

                <StatCard
                    title="Checked Out"
                    value={dashboard.checkedOutBookings}
                    icon={<FaSignOutAlt />}
                    background="#F8FAFC"
                    iconBackground="#E2E8F0"
                    valueColor="#475569"
                />

            </div>


            {/* Food Service */}

            <SectionTitle
                icon={<FaUtensils />}
                title="Food Service"
                description="Room service order status"
            />

            <div className="row g-4">

                <StatCard
                    title="Pending Orders"
                    value={dashboard.pendingOrders}
                    icon={<FaUtensils />}
                    background="#FFFBEB"
                    iconBackground="#FEF3C7"
                    valueColor="#B45309"
                />

                <StatCard
                    title="Delivered Orders"
                    value={dashboard.deliveredOrders}
                    icon={<FaCheckCircle />}
                    background="#ECFDF5"
                    iconBackground="#D1FAE5"
                    valueColor="#047857"
                />

            </div>


            {/* Housekeeping */}

            <SectionTitle
                icon={<FaBroom />}
                title="Housekeeping"
                description="Cleaning request status"
            />

            <div className="row g-4">

                <StatCard
                    title="Pending Cleaning"
                    value={dashboard.pendingCleaning}
                    icon={<FaBroom />}
                    background="#FFF7ED"
                    iconBackground="#FFEDD5"
                    valueColor="#C2410C"
                />

                <StatCard
                    title="Completed Cleaning"
                    value={dashboard.completedCleaning}
                    icon={<FaCheckCircle />}
                    background="#ECFDF5"
                    iconBackground="#D1FAE5"
                    valueColor="#047857"
                />

            </div>


            {/* Maintenance */}

            <SectionTitle
                icon={<FaTools />}
                title="Maintenance"
                description="Maintenance request status"
            />

            <div className="row g-4 mb-5">

                <StatCard
                    title="Pending Maintenance"
                    value={dashboard.pendingMaintenance}
                    icon={<FaTools />}
                    background="#FEF2F2"
                    iconBackground="#FEE2E2"
                    valueColor="#B91C1C"
                />

                <StatCard
                    title="Completed Maintenance"
                    value={dashboard.completedMaintenance}
                    icon={<FaCheckCircle />}
                    background="#ECFDF5"
                    iconBackground="#D1FAE5"
                    valueColor="#047857"
                />

            </div>

        </Layout>

    );
}

export default ManagerDashboard;