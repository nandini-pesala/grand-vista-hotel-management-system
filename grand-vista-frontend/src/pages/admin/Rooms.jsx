import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import {
    getAllRooms,
    addRoom
} from "../../services/roomService";

function Rooms() {

    const [rooms, setRooms] = useState([]);
    const [search, setSearch] = useState("");

    const [room, setRoom] = useState({
        roomNumber: "",
        roomType: "",
        capacity: "",
        pricePerNight: "",
        roomStatus: "AVAILABLE",
        description: ""
    });

    useEffect(() => {
        loadRooms();
    }, []);

    const loadRooms = async () => {

        try {

            const response = await getAllRooms();
            setRooms(response.data);

        } catch (error) {

            console.error(error);

        }
    };

    const handleChange = (e) => {

        setRoom({
            ...room,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addRoom(room);

            alert("Room Added Successfully");

            loadRooms();

            setRoom({
                roomNumber: "",
                roomType: "",
                capacity: "",
                pricePerNight: "",
                roomStatus: "AVAILABLE",
                description: ""
            });

        } catch (error) {

            console.error(error);

        }

    };

    const filteredRooms = rooms.filter((r) =>
        r.roomNumber?.toLowerCase().includes(search.toLowerCase()) ||
        r.roomType?.toLowerCase().includes(search.toLowerCase()) ||
        r.roomStatus?.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <Layout>

            <div className="container-fluid">

                {/* Header */}

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="fw-bold mb-1">
                            Room Management
                        </h2>

                        <p className="text-muted">
                            Manage hotel rooms and availability
                        </p>

                    </div>

                    <div className="card shadow-sm border-0 bg-warning text-dark">

                        <div className="card-body text-center">

                            <h3 className="fw-bold mb-0">
                                {rooms.length}
                            </h3>

                            <small>Total Rooms</small>

                        </div>

                    </div>

                </div>

                {/* Add Room */}

                <div className="card shadow border-0 mb-4">

                    <div className="card-header bg-dark text-white">

                        <h5 className="mb-0">
                            Add New Room
                        </h5>

                    </div>

                    <div className="card-body">

                        <form onSubmit={handleSubmit}>

                            <div className="row">

                                <div className="col-md-3 mb-3">

                                    <label className="form-label fw-semibold">
                                        Room Number
                                    </label>

                                    <input
                                        type="text"
                                        name="roomNumber"
                                        className="form-control"
                                        value={room.roomNumber}
                                        onChange={handleChange}
                                        placeholder="101"
                                        required
                                    />

                                </div>

                                <div className="col-md-3 mb-3">

                                    <label className="form-label fw-semibold">
                                        Room Type
                                    </label>

                                    <select
                                        name="roomType"
                                        className="form-select"
                                        value={room.roomType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="STANDARD">STANDARD</option>
                                        <option value="DELUXE">DELUXE</option>
                                        <option value="SUITE">SUITE</option>
                                    </select>

                                </div>

                                <div className="col-md-2 mb-3">

                                    <label className="form-label fw-semibold">
                                        Capacity
                                    </label>

                                    <input
                                        type="number"
                                        name="capacity"
                                        className="form-control"
                                        value={room.capacity}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-2 mb-3">

                                    <label className="form-label fw-semibold">
                                        Price
                                    </label>

                                    <input
                                        type="number"
                                        name="pricePerNight"
                                        className="form-control"
                                        value={room.pricePerNight}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-2 mb-3">

                                    <label className="form-label fw-semibold">
                                        Status
                                    </label>

                                    <select
                                        name="roomStatus"
                                        className="form-select"
                                        value={room.roomStatus}
                                        onChange={handleChange}
                                    >
                                        <option value="AVAILABLE">AVAILABLE</option>
                                        <option value="OCCUPIED">OCCUPIED</option>
                                        <option value="BOOKED">BOOKED</option>
                                        <option value="MAINTENANCE">MAINTENANCE</option>
                                    </select>

                                </div>

                                <div className="col-md-10 mb-3">

                                    <label className="form-label fw-semibold">
                                        Description
                                    </label>

                                    <textarea
                                        rows="2"
                                        name="description"
                                        className="form-control"
                                        value={room.description}
                                        onChange={handleChange}
                                        placeholder="Room description..."
                                    />

                                </div>

                                <div className="col-md-2 d-grid mb-3">

                                    <label className="form-label">&nbsp;</label>

                                    <button
                                        className="btn btn-warning fw-bold"
                                        type="submit"
                                    >
                                        Add Room
                                    </button>

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

                {/* Room List */}

                <div className="card shadow border-0">

                    <div className="card-header bg-white">

                        <div className="row align-items-center">

                            <div className="col-md-6">

                                <h5 className="mb-0">
                                    Room List
                                </h5>

                            </div>

                            <div className="col-md-6">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search room..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />

                            </div>

                        </div>

                    </div>

                    <div className="card-body p-0">

                        <div className="table-responsive">

                            <table className="table table-hover align-middle mb-0">

                                <thead className="table-dark">

                                    <tr>

                                        <th>ID</th>
                                        <th>Room No.</th>
                                        <th>Type</th>
                                        <th>Capacity</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Description</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {filteredRooms.length > 0 ? (

                                        filteredRooms.map((room) => (

                                            <tr key={room.roomId}>

                                                <td>

                                                    <span className="badge bg-secondary">
                                                        #{room.roomId}
                                                    </span>

                                                </td>

                                                <td className="fw-bold">
                                                    {room.roomNumber}
                                                </td>

                                                <td>

                                                    <span className="badge bg-primary">
                                                        {room.roomType}
                                                    </span>

                                                </td>

                                                <td>
                                                    {room.capacity} Guests
                                                </td>

                                                <td className="fw-bold text-success">
                                                    ₹{room.pricePerNight}
                                                </td>

                                                <td>

                                                    <span
                                                        className={`badge ${
                                                            room.roomStatus === "AVAILABLE"
                                                                ? "bg-success"
                                                                : room.roomStatus === "BOOKED"
                                                                ? "bg-warning text-dark"
                                                                : room.roomStatus === "OCCUPIED"
                                                                ? "bg-danger"
                                                                : "bg-secondary"
                                                        }`}
                                                    >
                                                        {room.roomStatus}
                                                    </span>

                                                </td>

                                                <td className="text-muted">
                                                    {room.description}
                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan="7"
                                                className="text-center py-5 text-muted"
                                            >
                                                No Rooms Found
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

export default Rooms;