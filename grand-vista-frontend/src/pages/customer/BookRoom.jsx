import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import { getAvailableRooms } from "../../services/roomService";
import { createBooking } from "../../services/bookingService";

function BookRoom() {

    const user = JSON.parse(localStorage.getItem("user"));

    const [rooms, setRooms] = useState([]);
    const [search, setSearch] = useState("");

    const [booking, setBooking] = useState({
        customerId: user.customerId,
        roomId: "",
        checkInDate: "",
        checkOutDate: ""
    });

    useEffect(() => {
        loadRooms();
    }, []);

    const loadRooms = async () => {
        try {
            const response = await getAvailableRooms();
            setRooms(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        });
    };

    const selectRoom = (id) => {
        setBooking({
            ...booking,
            roomId: id
        });

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createBooking(booking);

            alert("Room Booked Successfully");

            setBooking({
                customerId: user.customerId,
                roomId: "",
                checkInDate: "",
                checkOutDate: ""
            });

        } catch (err) {
            console.error(err);
        }

    };

    const filteredRooms = rooms.filter(room =>
        room.roomType.toLowerCase().includes(search.toLowerCase()) ||
        room.roomNumber.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <Layout>

            {/* Header */}

            <div
                className="p-5 rounded-4 text-white mb-4 shadow"
                style={{
                    background:
                        "linear-gradient(135deg,#0F172A,#1E3A8A)"
                }}
            >

                <h2 className="fw-bold">
                    Book Your Perfect Room
                </h2>

                <p className="mb-0">
                    Browse our available luxury rooms and reserve instantly.
                </p>

            </div>

            {/* Search */}

            <div className="card shadow border-0 mb-4">

                <div className="card-body">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Room Number or Type..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

            </div>

            {/* Room Cards */}

            <div className="row">

                {filteredRooms.map(room => (

                    <div
                        className="col-lg-4 col-md-6 mb-4"
                        key={room.roomId}
                    >

                        <div
                            className="card h-100 border-0 shadow rounded-4"
                        >

                            <div
                                className="card-header text-white"
                                style={{
                                    background:
                                        "linear-gradient(135deg,#1E3A8A,#2563EB)"
                                }}
                            >

                                <h5 className="mb-0">
                                    Room {room.roomNumber}
                                </h5>

                            </div>

                            <div className="card-body">

                                <h6 className="fw-bold text-primary">
                                    {room.roomType}
                                </h6>

                                <p className="text-muted">
                                    {room.description}
                                </p>

                                <hr />

                                <div className="d-flex justify-content-between">

                                    <span>
                                        Capacity
                                    </span>

                                    <strong>
                                        {room.capacity} Guests
                                    </strong>

                                </div>

                                <div className="d-flex justify-content-between mt-2">

                                    <span>
                                        Price
                                    </span>

                                    <strong className="text-success">
                                        ₹{room.pricePerNight}
                                    </strong>

                                </div>

                                <div className="d-flex justify-content-between mt-2">

                                    <span>Status</span>

                                    <span
                                        className="badge bg-success"
                                    >
                                        {room.roomStatus}
                                    </span>

                                </div>

                            </div>

                            <div className="card-footer bg-white border-0">

                                <button
                                    className="btn btn-warning w-100 fw-bold"
                                    onClick={() =>
                                        selectRoom(room.roomId)
                                    }
                                >
                                    Book This Room
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            {/* Booking Form */}

            <div className="card shadow border-0 rounded-4 mt-4">

                <div
                    className="card-header text-white"
                    style={{
                        background:
                            "linear-gradient(135deg,#0F172A,#1E3A8A)"
                    }}
                >

                    <h4 className="mb-0">
                        Complete Your Booking
                    </h4>

                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            <div className="col-md-4">

                                <label className="fw-semibold">
                                    Select Room
                                </label>

                                <select
                                    className="form-select"
                                    name="roomId"
                                    value={booking.roomId}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Choose Room
                                    </option>

                                    {rooms.map(room => (

                                        <option
                                            key={room.roomId}
                                            value={room.roomId}
                                        >

                                            {room.roomNumber} - {room.roomType}

                                        </option>

                                    ))}

                                </select>

                            </div>

                            <div className="col-md-4">

                                <label className="fw-semibold">
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

                            <div className="col-md-4">

                                <label className="fw-semibold">
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

                        <div className="text-end mt-4">

                            <button
                                className="btn btn-success btn-lg px-5"
                            >
                                Confirm Booking
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </Layout>

    );
}

export default BookRoom;