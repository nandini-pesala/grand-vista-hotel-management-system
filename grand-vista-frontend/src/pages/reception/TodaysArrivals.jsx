import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";
import { getTodaysArrivals } from "../../services/bookingService";

function TodaysArrivals() {

    const [arrivals, setArrivals] = useState([]);

    useEffect(() => {

        loadArrivals();

    }, []);

    const loadArrivals = async () => {

        try {

            const response = await getTodaysArrivals();

            setArrivals(
                Array.isArray(response.data)
                    ? response.data
                    : []
            );

        } catch (error) {

            console.error(error);

            setArrivals([]);

        }

    };

    return (

        <Layout>

            {/* Header */}

            <div
                className="card border-0 shadow-lg mb-4"
                style={{
                    background:
                        "linear-gradient(135deg,#065F46,#10B981)",
                    borderRadius: "20px",
                    color: "white"
                }}
            >

                <div className="card-body p-4">

                    <h2 className="fw-bold">
                        📅 Today's Arrivals
                    </h2>

                    <p className="mb-0">
                        Customers scheduled to check in today.
                    </p>

                </div>

            </div>

            {/* Statistics */}

            <div className="row mb-4">

                <div className="col-md-4">

                    <div
                        className="card border-0 shadow"
                        style={{
                            borderRadius: "18px"
                        }}
                    >

                        <div className="card-body d-flex justify-content-between align-items-center">

                            <div>

                                <h6 className="text-muted">
                                    TODAY'S ARRIVALS
                                </h6>

                                <h1 className="fw-bold text-success">
                                    {arrivals.length}
                                </h1>

                            </div>

                            <div
                                style={{
                                    width: 75,
                                    height: 75,
                                    borderRadius: "50%",
                                    background: "#D1FAE5",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "35px"
                                }}
                            >
                                🏨
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Table */}

            <div
                className="card border-0 shadow-lg"
                style={{
                    borderRadius: "18px"
                }}
            >

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead className="table-dark">

                                <tr>

                                    <th>Booking ID</th>
                                    <th>Customer</th>
                                    <th>Room Number</th>

                                </tr>

                            </thead>

                            <tbody>

                                {arrivals.length > 0 ? (

                                    arrivals.map(item => (

                                        <tr key={item.bookingId}>

                                            <td>
                                                <strong>
                                                    #{item.bookingId}
                                                </strong>
                                            </td>

                                            <td>
                                                {item.customer?.customerName}
                                            </td>

                                            <td>

                                                <span className="badge bg-primary px-3 py-2">

                                                    Room {item.room?.roomNumber}

                                                </span>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="3"
                                            className="text-center py-5"
                                        >

                                            <div
                                                style={{
                                                    fontSize: "60px"
                                                }}
                                            >
                                                📅
                                            </div>

                                            <h4 className="text-muted">

                                                No Arrivals Today

                                            </h4>

                                            <p className="text-secondary">

                                                There are no customer arrivals scheduled for today.

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

export default TodaysArrivals;