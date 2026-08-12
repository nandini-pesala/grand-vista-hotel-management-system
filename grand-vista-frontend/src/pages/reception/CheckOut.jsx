import { useState } from "react";

import Layout from "../../layouts/Layout";
import { checkOut } from "../../services/bookingService";

function CheckOut() {

    const [bookingId, setBookingId] = useState("");

    const handleCheckOut = async () => {

        if (!bookingId) {
            alert("Please enter Booking ID");
            return;
        }

        try {

            const response = await checkOut(bookingId);

            alert(response.data);

            setBookingId("");

        } catch (error) {

            console.error(error);

            alert("Check Out Failed");

        }

    };

    return (

        <Layout>

            {/* Header */}

            <div
                className="card border-0 shadow-lg mb-4"
                style={{
                    background:
                        "linear-gradient(135deg,#7F1D1D,#DC2626)",
                    borderRadius: "20px",
                    color: "white"
                }}
            >

                <div className="card-body p-4">

                    <h2 className="fw-bold mb-2">
                        🚪 Check Out Customer
                    </h2>

                    <p className="mb-0">
                        Complete customer checkout and send the room for housekeeping.
                    </p>

                </div>

            </div>

            {/* Check Out Card */}

            <div
                className="card border-0 shadow-lg"
                style={{
                    borderRadius: "20px"
                }}
            >

                <div className="card-body p-5">

                    <div className="text-center mb-4">

                        <div
                            style={{
                                width: "90px",
                                height: "90px",
                                borderRadius: "50%",
                                background: "#FEE2E2",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "auto",
                                fontSize: "45px"
                            }}
                        >
                            🚪
                        </div>

                        <h3 className="mt-3 fw-bold">
                            Customer Check Out
                        </h3>

                        <p className="text-muted">
                            Enter the Booking ID to check out the customer.
                        </p>

                    </div>

                    <div className="mb-4">

                        <label className="fw-semibold mb-2">
                            Booking ID
                        </label>

                        <input
                            type="number"
                            className="form-control form-control-lg"
                            placeholder="Enter Booking ID"
                            value={bookingId}
                            onChange={(e) =>
                                setBookingId(e.target.value)
                            }
                            style={{
                                borderRadius: "12px"
                            }}
                        />

                    </div>

                    <div className="text-center">

                        <button
                            className="btn btn-danger btn-lg px-5"
                            style={{
                                borderRadius: "12px",
                                fontWeight: "600"
                            }}
                            onClick={handleCheckOut}
                        >
                            🚪 Check Out Customer
                        </button>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default CheckOut;