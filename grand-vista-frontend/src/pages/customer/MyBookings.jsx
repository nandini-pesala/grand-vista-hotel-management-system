import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";

import {
    getCustomerBookings,
    cancelBooking
} from "../../services/bookingService";

function BookingManagement() {

    const user =
        JSON.parse(localStorage.getItem("user"));

    const customerId = user.customerId;

    const [bookings, setBookings] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {

        try {

            const response =
                await getCustomerBookings(customerId);

            setBookings(response.data);

        } catch (error) {

            console.error(error);
        }

    };

    const handleCancel = async (bookingId) => {

        const confirmCancel =
            window.confirm("Cancel this booking?");

        if (!confirmCancel) return;

        try {

            await cancelBooking(bookingId);

            alert("Booking Cancelled Successfully");

            loadBookings();

        } catch (error) {

            console.error(error);

        }

    };

    const filteredBookings =
        bookings.filter(booking =>

            booking.bookingId
                .toString()
                .includes(search)

            ||

            booking.room?.roomNumber
                ?.toLowerCase()
                .includes(search.toLowerCase())

        );

    const active =
        bookings.filter(
            b =>
                b.bookingStatus === "BOOKED"
        ).length;

    const completed =
        bookings.filter(
            b =>
                b.bookingStatus === "CHECKED_OUT"
        ).length;

    const cancelled =
        bookings.filter(
            b =>
                b.bookingStatus === "CANCELLED"
        ).length;

    const getBadge = (status) => {

        switch (status) {

            case "BOOKED":
                return "bg-primary";

            case "CHECKED_IN":
                return "bg-success";

            case "CHECKED_OUT":
                return "bg-dark";

            case "CANCELLED":
                return "bg-danger";

            default:
                return "bg-secondary";

        }

    };

    return (

        <Layout>

            {/* Header */}

            <div
                className="card shadow border-0 mb-4"
                style={{
                    borderRadius: "18px",
                    background:
                        "linear-gradient(135deg,#0F172A,#1E3A8A)",
                    color: "white"
                }}
            >

                <div className="card-body">

                    <h2 className="fw-bold">
                        My Bookings
                    </h2>

                    <p className="mb-0">
                        View, manage and track all your hotel reservations.
                    </p>

                </div>

            </div>

            {/* Statistics */}

            <div className="row mb-4">

                <div className="col-md-4">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h6 className="text-muted">
                                Active Bookings
                            </h6>

                            <h2 className="text-primary">
                                {active}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h6 className="text-muted">
                                Completed
                            </h6>

                            <h2 className="text-success">
                                {completed}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h6 className="text-muted">
                                Cancelled
                            </h6>

                            <h2 className="text-danger">
                                {cancelled}
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

            {/* Search */}

            <div className="card shadow border-0 mb-4">

                <div className="card-body">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Booking ID or Room Number..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

            </div>

            {/* Table */}

            <div
                className="card shadow border-0"
                style={{
                    borderRadius: "15px"
                }}
            >

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead
                                className="table-dark"
                            >

                                <tr>

                                    <th>Booking ID</th>

                                    <th>Room No</th>

                                    <th>Room Type</th>

                                    <th>Check In</th>

                                    <th>Check Out</th>

                                    <th>Status</th>

                                    <th className="text-center">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {filteredBookings.length > 0 ? (

                                    filteredBookings.map((booking) => (

                                        <tr key={booking.bookingId}>

                                            <td>
                                                #{booking.bookingId}
                                            </td>

                                            <td>
                                                {booking.room?.roomNumber}
                                            </td>

                                            <td>
                                                {booking.room?.roomType}
                                            </td>

                                            <td>
                                                {booking.checkInDate}
                                            </td>

                                            <td>
                                                {booking.checkOutDate}
                                            </td>

                                            <td>

                                                <span
                                                    className={`badge ${getBadge(
                                                        booking.bookingStatus
                                                    )}`}
                                                >

                                                    {booking.bookingStatus}

                                                </span>

                                            </td>

                                            <td className="text-center">

                                                {booking.bookingStatus ===
                                                "BOOKED"  && new Date(booking.checkOutDate) >= new Date(new Date().toDateString()) ? (

                                                    <button
                                                        className="btn btn-outline-danger btn-sm"
                                                        onClick={() =>
                                                            handleCancel(
                                                                booking.bookingId
                                                            )
                                                        }
                                                    >

                                                        Cancel

                                                    </button>

                                                ) : (

                                                    <span className="text-muted">

                                                        —

                                                    </span>

                                                )}

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="7"
                                            className="text-center text-muted py-4"
                                        >

                                            No bookings found.

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

export default BookingManagement;
