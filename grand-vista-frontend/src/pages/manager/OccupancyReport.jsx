import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    getAvailableRooms,
    getOccupiedRooms
} from "../../services/managerService";

import {
    FaHotel,
    FaBed,
    FaDoorOpen,
    FaChartPie
} from "react-icons/fa";

function OccupancyReport() {

    const [availableRooms, setAvailableRooms] = useState([]);
    const [occupiedRooms, setOccupiedRooms] = useState([]);

    useEffect(() => {

        loadRooms();

    }, []);

    const loadRooms = async () => {

        try {

            const available =
                await getAvailableRooms();

            const occupied =
                await getOccupiedRooms();

            setAvailableRooms(
                Array.isArray(available.data)
                    ? available.data
                    : []
            );

            setOccupiedRooms(
                Array.isArray(occupied.data)
                    ? occupied.data
                    : []
            );

        } catch (error) {

            console.error(error);

            setAvailableRooms([]);
            setOccupiedRooms([]);

        }

    };

    const totalRooms =
        availableRooms.length +
        occupiedRooms.length;

    const occupancy =
        totalRooms === 0
            ? 0
            : (
                (occupiedRooms.length / totalRooms) * 100
            ).toFixed(2);

    return (

        <Layout>

            <div className="container-fluid">

                {/* Page Header */}

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

                                    🏨 Occupancy Report

                                </h2>

                                <p className="mb-0 opacity-75">

                                    Monitor room availability and hotel occupancy.

                                </p>

                            </div>

                            <div
                                style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "16px",
                                    background:
                                        "rgba(255,255,255,0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "30px"
                                }}
                            >

                                <FaChartPie />

                            </div>

                        </div>

                    </div>

                </div>


                {/* Statistics */}

                <div className="row g-4 mb-4">

                    {/* Total Rooms */}

                    <div className="col-md-3">

                        <div
                            className="card border-0 shadow h-100"
                            style={{
                                borderRadius: "18px"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <h6 className="text-muted fw-semibold">

                                            TOTAL ROOMS

                                        </h6>

                                        <h2 className="fw-bold mb-0 text-primary">

                                            {totalRooms}

                                        </h2>

                                    </div>

                                    <div
                                        style={{
                                            width: "58px",
                                            height: "58px",
                                            borderRadius: "15px",
                                            background: "#DBEAFE",
                                            color: "#2563EB",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "25px"
                                        }}
                                    >

                                        <FaHotel />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Available */}

                    <div className="col-md-3">

                        <div
                            className="card border-0 shadow h-100"
                            style={{
                                borderRadius: "18px"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <h6 className="text-muted fw-semibold">

                                            AVAILABLE

                                        </h6>

                                        <h2 className="fw-bold mb-0 text-success">

                                            {availableRooms.length}

                                        </h2>

                                    </div>

                                    <div
                                        style={{
                                            width: "58px",
                                            height: "58px",
                                            borderRadius: "15px",
                                            background: "#DCFCE7",
                                            color: "#16A34A",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "25px"
                                        }}
                                    >

                                        <FaDoorOpen />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Occupied */}

                    <div className="col-md-3">

                        <div
                            className="card border-0 shadow h-100"
                            style={{
                                borderRadius: "18px"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <h6 className="text-muted fw-semibold">

                                            OCCUPIED

                                        </h6>

                                        <h2 className="fw-bold mb-0 text-danger">

                                            {occupiedRooms.length}

                                        </h2>

                                    </div>

                                    <div
                                        style={{
                                            width: "58px",
                                            height: "58px",
                                            borderRadius: "15px",
                                            background: "#FEE2E2",
                                            color: "#DC2626",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "25px"
                                        }}
                                    >

                                        <FaBed />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Occupancy */}

                    <div className="col-md-3">

                        <div
                            className="card border-0 shadow h-100"
                            style={{
                                borderRadius: "18px"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <h6 className="text-muted fw-semibold">

                                            OCCUPANCY

                                        </h6>

                                        <h2 className="fw-bold mb-0 text-warning">

                                            {occupancy}%

                                        </h2>

                                    </div>

                                    <div
                                        style={{
                                            width: "58px",
                                            height: "58px",
                                            borderRadius: "15px",
                                            background: "#FEF3C7",
                                            color: "#D97706",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "25px"
                                        }}
                                    >

                                        <FaChartPie />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Occupancy Progress */}

                <div
                    className="card border-0 shadow mb-4"
                    style={{
                        borderRadius: "18px"
                    }}
                >

                    <div className="card-body p-4">

                        <div className="d-flex justify-content-between mb-2">

                            <h5 className="fw-bold mb-0">

                                Hotel Occupancy

                            </h5>

                            <strong className="text-warning">

                                {occupancy}%

                            </strong>

                        </div>

                        <div
                            className="progress"
                            style={{
                                height: "12px",
                                borderRadius: "10px",
                                background: "#E5E7EB"
                            }}
                        >

                            <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{
                                    width: `${occupancy}%`,
                                    borderRadius: "10px"
                                }}
                            />

                        </div>

                        <div className="d-flex justify-content-between mt-2">

                            <small className="text-muted">

                                {occupiedRooms.length} occupied

                            </small>

                            <small className="text-muted">

                                {availableRooms.length} available

                            </small>

                        </div>

                    </div>

                </div>


                {/* Occupied Rooms */}

                <div
                    className="card border-0 shadow mb-4"
                    style={{
                        borderRadius: "18px",
                        overflow: "hidden"
                    }}
                >

                    <div className="card-body p-0">

                        <div className="p-4 border-bottom">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <h4 className="fw-bold mb-1">

                                        Occupied Rooms

                                    </h4>

                                    <p className="text-muted mb-0">

                                        Rooms currently occupied by guests.

                                    </p>

                                </div>

                                <span className="badge bg-danger px-3 py-2">

                                    {occupiedRooms.length} Rooms

                                </span>

                            </div>

                        </div>


                        <div className="table-responsive">

                            <table className="table table-hover align-middle mb-0">

                                <thead
                                    style={{
                                        background: "#1F2937",
                                        color: "white"
                                    }}
                                >

                                    <tr>

                                        <th className="px-4 py-3">
                                            Room Number
                                        </th>

                                        <th className="py-3">
                                            Room Type
                                        </th>

                                        <th className="py-3">
                                            Price / Night
                                        </th>

                                        <th className="py-3">
                                            Status
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {occupiedRooms.length > 0 ? (

                                        occupiedRooms.map(room => (

                                            <tr key={room.roomId}>

                                                <td className="px-4 fw-bold">

                                                    Room {room.roomNumber}

                                                </td>

                                                <td>

                                                    {room.roomType}

                                                </td>

                                                <td className="fw-semibold">

                                                    ₹ {room.pricePerNight}

                                                </td>

                                                <td>

                                                    <span className="badge bg-danger px-3 py-2">

                                                        {room.roomStatus}

                                                    </span>

                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan="4"
                                                className="text-center py-5"
                                            >

                                                <div style={{ fontSize: "45px" }}>
                                                    🛏️
                                                </div>

                                                <h5 className="text-muted fw-bold mt-2">

                                                    No Occupied Rooms

                                                </h5>

                                                <p className="text-secondary mb-0">

                                                    There are currently no occupied rooms.

                                                </p>

                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>


                {/* Available Rooms */}

                <div
                    className="card border-0 shadow"
                    style={{
                        borderRadius: "18px",
                        overflow: "hidden"
                    }}
                >

                    <div className="card-body p-0">

                        <div className="p-4 border-bottom">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <h4 className="fw-bold mb-1">

                                        Available Rooms

                                    </h4>

                                    <p className="text-muted mb-0">

                                        Rooms currently available for booking.

                                    </p>

                                </div>

                                <span className="badge bg-success px-3 py-2">

                                    {availableRooms.length} Rooms

                                </span>

                            </div>

                        </div>


                        <div className="table-responsive">

                            <table className="table table-hover align-middle mb-0">

                                <thead
                                    style={{
                                        background: "#1F2937",
                                        color: "white"
                                    }}
                                >

                                    <tr>

                                        <th className="px-4 py-3">
                                            Room Number
                                        </th>

                                        <th className="py-3">
                                            Room Type
                                        </th>

                                        <th className="py-3">
                                            Price / Night
                                        </th>

                                        <th className="py-3">
                                            Status
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {availableRooms.length > 0 ? (

                                        availableRooms.map(room => (

                                            <tr key={room.roomId}>

                                                <td className="px-4 fw-bold">

                                                    Room {room.roomNumber}

                                                </td>

                                                <td>

                                                    {room.roomType}

                                                </td>

                                                <td className="fw-semibold">

                                                    ₹ {room.pricePerNight}

                                                </td>

                                                <td>

                                                    <span className="badge bg-success px-3 py-2">

                                                        {room.roomStatus}

                                                    </span>

                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan="4"
                                                className="text-center py-5"
                                            >

                                                <div style={{ fontSize: "45px" }}>
                                                    🏨
                                                </div>

                                                <h5 className="text-muted fw-bold mt-2">

                                                    No Available Rooms

                                                </h5>

                                                <p className="text-secondary mb-0">

                                                    There are currently no rooms available.

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

export default OccupancyReport;
