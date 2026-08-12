import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    getAllRooms
}
from "../../services/roomService";

function RoomStatus() {

    const [rooms,
    setRooms] =
    useState([]);

    useEffect(() => {

        loadRooms();

    }, []);

    const loadRooms =
    async () => {

        try {

            const response =
            await getAllRooms();

            setRooms(
                response.data
            );

        } catch(error){

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
                                Room Status
                            </h2>

                            <p className="mb-0 opacity-75">
                                Rooms that are available for customers.
                            </p>

                        </div>

                        <div
                            style={{
                                background: "rgba(255,255,255,0.15)",
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
                                READY
                            </div>

                            <div
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "700"
                                }}
                            >
                                {rooms.length}
                            </div>

                        </div>

                    </div>

                </div>

            </div>

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

                                    <th className="py-3">
                                        Room Number
                                    </th>

                                    <th className="py-3">
                                        Room Type
                                    </th>

                                    <th className="py-3">
                                        Price
                                    </th>

                                    <th className="py-3">
                                        Status
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {rooms.length > 0 ? (

                                    rooms.map((room) => (

                                        <tr key={room.roomId}>

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
                                                    Room {room.roomNumber}
                                                </span>

                                            </td>

                                            <td>

                                                <span
                                                    style={{
                                                        fontWeight: "600"
                                                    }}
                                                >
                                                    {room.roomType}
                                                </span>

                                            </td>

                                            <td>

                                                <span
                                                    className="badge bg-light text-dark"
                                                    style={{
                                                        fontSize: "14px",
                                                        padding: "7px 11px"
                                                    }}
                                                >
                                                    ₹ {room.pricePerNight}
                                                </span>

                                            </td>

                                            <td>

                                                <span
                                                    className="badge"
                                                    style={{
                                                        background: "#DCFCE7",
                                                        color: "#166534",
                                                        padding: "8px 12px",
                                                        fontSize: "12px",
                                                        borderRadius: "8px"
                                                    }}
                                                >
                                                    ✓ {room.roomStatus}
                                                </span>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="7"
                                            className="text-center py-5"
                                        >

                                            <h5
                                                className="fw-bold text-muted"
                                            >
                                                No Available Rooms
                                            </h5>

                                            <p className="text-secondary mb-0">
                                               Cleaned Rooms will appear here.
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

export default RoomStatus;