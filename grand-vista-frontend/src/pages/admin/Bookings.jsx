import { useEffect, useState } from "react";
import {
    FaCalendarCheck,
    FaCheckCircle,
    FaTimesCircle,
    FaSearch
} from "react-icons/fa";

import Layout from "../../layouts/Layout";
import { getAllBookings } from "../../services/bookingService";

function Bookings() {

    const [bookings, setBookings] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {

        try {

            const response = await getAllBookings();

            setBookings(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const filteredBookings = bookings.filter((booking) =>

        booking.customer?.customerName
            ?.toLowerCase()
            .includes(search.toLowerCase()) ||

        booking.room?.roomNumber
            ?.toString()
            .includes(search)

    );

    const bookedCount = bookings.filter(
        booking => booking.bookingStatus === "BOOKED"
    ).length;

    const cancelledCount = bookings.filter(
        booking => booking.bookingStatus === "CANCELLED"
    ).length;

    return (

        <Layout>

            <h2 className="fw-bold mb-4">
                Booking Management
            </h2>

            {/* Summary Cards */}

            <div className="row mb-4">

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0 bg-primary text-white">

                        <div className="card-body">

                            <h6>

                                <FaCalendarCheck className="me-2"/>

                                Total Bookings

                            </h6>

                            <h2>{bookings.length}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0 bg-success text-white">

                        <div className="card-body">

                            <h6>

                                <FaCheckCircle className="me-2"/>

                                Active Bookings

                            </h6>

                            <h2>{bookedCount}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0 bg-danger text-white">

                        <div className="card-body">

                            <h6>

                                <FaTimesCircle className="me-2"/>

                                Cancelled

                            </h6>

                            <h2>{cancelledCount}</h2>

                        </div>

                    </div>

                </div>

            </div>

            {/* Search */}

            <div className="card shadow mb-4">

                <div className="card-body">

                    <div className="input-group">

                        <span className="input-group-text">

                            <FaSearch/>

                        </span>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Customer or Room..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>

                </div>

            </div>

            {/* Booking Table */}

            <div className="card shadow">

                <div className="card-header bg-dark text-white">

                    <h4 className="mb-0">
                        Booking List
                    </h4>

                </div>

                <div className="card-body p-0">

                    <table className="table table-hover table-striped mb-0">

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

                            {

                                filteredBookings.length > 0 ?

                                filteredBookings.map((booking) => (

                                    <tr key={booking.bookingId}>

                                        <td>

                                            {booking.bookingId}

                                        </td>

                                        <td>

                                            <div className="d-flex align-items-center">

                                                <div
                                                    className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
                                                    style={{
                                                        width: "40px",
                                                        height: "40px",
                                                        fontWeight: "bold"
                                                    }}
                                                >

                                                    {booking.customer?.customerName
                                                        ?.charAt(0)
                                                        .toUpperCase()}

                                                </div>

                                                <strong>

                                                    {booking.customer?.customerName}

                                                </strong>

                                            </div>

                                        </td>

                                        <td>

                                            <span className="badge bg-secondary">

                                                Room {booking.room?.roomNumber}

                                            </span>

                                        </td>

                                        <td>

                                            {booking.checkInDate}

                                        </td>

                                        <td>

                                            {booking.checkOutDate}

                                        </td>

                                        <td>

                                            <span
                                                className={
                                                    booking.bookingStatus === "BOOKED"
                                                        ? "badge bg-success"

                                                    : booking.bookingStatus === "CHECKED_OUT"
                                                        ? "badge bg-primary"

                                                    : "badge bg-danger"
                                                }
                                            >

                                                {booking.bookingStatus}

                                            </span>

                                        </td>

                                    </tr>

                                ))

                                :

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="text-center py-5"
                                    >

                                        No Bookings Found

                                    </td>

                                </tr>

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </Layout>

    );

}

export default Bookings;