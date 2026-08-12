import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    getAllBookings,
    createBooking
} from "../../services/bookingService";

import { getAvailableRooms } from "../../services/roomService";
import {  getAllCustomers } from "../../services/adminService";

function ManageBookings() {

    const [bookings, setBookings] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [rooms, setRooms] = useState([]);

    const [booking, setBooking] = useState({
        customerId: "",
        roomId: "",
        checkInDate: "",
        checkOutDate: ""
    });

    useEffect(() => {

        loadBookings();
        loadCustomers();
        loadRooms();

    }, []);

    const loadBookings = async () => {

        try {

            const response = await getAllBookings();

            setBookings(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const loadCustomers = async () => {

        try {

            const response = await getAllCustomers();

            setCustomers(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const loadRooms = async () => {

        try {

            const response = await getAvailableRooms();

            setRooms(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleChange = (e) => {

        setBooking({

            ...booking,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createBooking(booking);

            alert("Room Booked Successfully");

            setBooking({

                customerId: "",
                roomId: "",
                checkInDate: "",
                checkOutDate: ""

            });

            loadBookings();
            loadRooms();

        } catch (error) {

            console.error(error);

            alert("Booking Failed");

        }

    };

    return (

    <Layout>

        {/* Header */}

        <div
            className="card border-0 shadow-lg mb-4"
            style={{
                background:
                    "linear-gradient(135deg,#0F172A,#1E3A8A)",
                borderRadius: "20px",
                color: "white"
            }}
        >

            <div className="card-body p-4">

                <h2 className="fw-bold">
                    🏨 Booking Management
                </h2>

                <p className="mb-0">
                    Create and manage hotel room bookings.
                </p>

            </div>

        </div>

        {/* Statistics */}

        <div className="row mb-4">

            <div className="col-md-4">

                <div className="card border-0 shadow">

                    <div className="card-body d-flex justify-content-between align-items-center">

                        <div>

                            <h6 className="text-muted">
                                BOOKINGS
                            </h6>

                            <h2 className="fw-bold text-primary">
                                {bookings.length}
                            </h2>

                        </div>

                        <div
                            style={{
                                width:70,
                                height:70,
                                borderRadius:"50%",
                                background:"#DBEAFE",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                fontSize:"34px"
                            }}
                        >
                            📋
                        </div>

                    </div>

                </div>

            </div>

            <div className="col-md-4">

                <div className="card border-0 shadow">

                    <div className="card-body d-flex justify-content-between align-items-center">

                        <div>

                            <h6 className="text-muted">
                                CUSTOMERS
                            </h6>

                            <h2 className="fw-bold text-success">
                                {customers.length}
                            </h2>

                        </div>

                        <div
                            style={{
                                width:70,
                                height:70,
                                borderRadius:"50%",
                                background:"#DCFCE7",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                fontSize:"34px"
                            }}
                        >
                            👥
                        </div>

                    </div>

                </div>

            </div>

            <div className="col-md-4">

                <div className="card border-0 shadow">

                    <div className="card-body d-flex justify-content-between align-items-center">

                        <div>

                            <h6 className="text-muted">
                                AVAILABLE ROOMS
                            </h6>

                            <h2 className="fw-bold text-warning">
                                {rooms.length}
                            </h2>

                        </div>

                        <div
                            style={{
                                width:70,
                                height:70,
                                borderRadius:"50%",
                                background:"#FEF3C7",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                fontSize:"34px"
                            }}
                        >
                            🛏️
                        </div>

                    </div>

                </div>

            </div>

        </div>

        {/* Booking Form */}

        <div
            className="card border-0 shadow-lg mb-5"
            style={{ borderRadius:"20px" }}
        >

            <div className="card-body p-4">

                <h4 className="fw-bold mb-4">
                    ➕ Create New Booking
                </h4>

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <label className="fw-bold mb-2">
                                Customer
                            </label>

                            <select
                                className="form-select"
                                name="customerId"
                                value={booking.customerId}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Select Customer
                                </option>

                                {customers.map(customer=>(
                                    <option
                                        key={customer.customerId}
                                        value={customer.customerId}
                                    >
                                        {customer.customerName}
                                    </option>
                                ))}

                            </select>

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="fw-bold mb-2">
                                Room
                            </label>

                            <select
                                className="form-select"
                                name="roomId"
                                value={booking.roomId}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Select Room
                                </option>

                                {rooms.map(room=>(
                                    <option
                                        key={room.roomId}
                                        value={room.roomId}
                                    >
                                        Room {room.roomNumber}
                                        ({room.roomType})
                                        - ₹{room.pricePerNight}
                                    </option>
                                ))}

                            </select>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <label className="fw-bold mb-2">
                                Check In
                            </label>

                            <input
                                type="date"
                                className="form-control"
                                name="checkInDate"
                                value={booking.checkInDate}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="fw-bold mb-2">
                                Check Out
                            </label>

                            <input
                                type="date"
                                className="form-control"
                                name="checkOutDate"
                                value={booking.checkOutDate}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                    <div className="text-end mt-3">

                        <button
                            type="submit"
                            className="btn btn-warning btn-lg fw-bold px-5"
                            style={{borderRadius:"12px"}}
                        >
                            🏨 Book Room
                        </button>

                    </div>

                </form>

            </div>

        </div>

        {/* Booking Table */}

        <div
            className="card border-0 shadow-lg"
            style={{borderRadius:"20px"}}
        >

            <div className="card-body">

                <h4 className="fw-bold mb-4">
                    📋 Booking List
                </h4>

                <div className="table-responsive">

                    <table className="table table-hover align-middle">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>
                                <th>Customer</th>
                                <th>Room</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {bookings.map(booking=>(

                                <tr key={booking.bookingId}>

                                    <td>{booking.bookingId}</td>

                                    <td>{booking.customer?.customerName}</td>

                                    <td>{booking.room?.roomNumber}</td>

                                    <td>{booking.checkInDate}</td>

                                    <td>{booking.checkOutDate}</td>

                                    <td>

                                        <span
                                            className={`badge px-3 py-2 ${
                                                booking.bookingStatus==="CONFIRMED"
                                                    ? "bg-primary"
                                                : booking.bookingStatus==="CHECKED_IN"
                                                    ? "bg-success"
                                                : booking.bookingStatus==="CHECKED_OUT"
                                                    ? "bg-secondary"
                                                : booking.bookingStatus==="CANCELLED"
                                                    ? "bg-danger"
                                                    : "bg-warning text-dark"
                                            }`}
                                        >
                                            {booking.bookingStatus}
                                        </span>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    </Layout>

);
}

export default ManageBookings;