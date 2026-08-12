import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    getCustomerBookings
} from "../../services/bookingService";

import {
    getFinalBill,
    createPayment,
    downloadInvoice
} from "../../services/paymentService";

function Payment() {

    const user =
        JSON.parse(localStorage.getItem("user"));

    const [bookings, setBookings] = useState([]);

    const [bill, setBill] = useState(null);

    const [paymentMethod, setPaymentMethod] =
        useState("UPI");

    useEffect(() => {

        loadBookings();

    }, []);

    const loadBookings = async () => {

        try{

            const response =
                await getCustomerBookings(
                    user.customerId
                );

            setBookings(response.data);

        }
        catch(error){

            console.error(error);
        }
    };

    const viewBill = async (bookingId) => {

    try{

        const response =
            await getFinalBill(bookingId);

        setBill(response.data);

    }
    catch(error){

        console.error(error);

        alert("Unable to load bill.");

    }

};

    const makePayment = async () => {

    try{

        await createPayment({

            bookingId: bill.bookingId,

            customerId: user.customerId,

            paymentMethod

        });

        alert("Payment Successful");

        // Reload bill to update paid status
        viewBill(bill.bookingId);

    }
    catch(error){

        console.error(error);

        alert("Payment already completed.");

    }

};

    const invoice = async () => {

        try{

            const response =
                await downloadInvoice(
                    bill.bookingId
                );

            const url =
                window.URL.createObjectURL(
                    new Blob([response.data])
                );

            const link =
                document.createElement("a");

            link.href = url;

            link.download =
                `Invoice_${bill.bookingId}.pdf`;

            link.click();

        }
        catch(error){

            console.error(error);
        }
    };

    return(

        <Layout>

    {/* Header */}

    <div
        className="card border-0 shadow-lg mb-4"
        style={{
            background:
                "linear-gradient(135deg,#0F172A,#1E3A8A)",
            borderRadius: "18px",
            color: "white"
        }}
    >

        <div className="card-body p-4">

            <h2 className="fw-bold">
                💳 Payment Center
            </h2>

            <p className="mb-0">
                View bills, complete payments and download invoices.
            </p>

        </div>

    </div>

    {/* Statistics */}

    <div className="row mb-4">

        <div className="col-md-4">

            <div className="card shadow border-0">

                <div className="card-body text-center">

                    <h6>Total Bookings</h6>

                    <h2 className="text-primary">

                        {bookings.length}

                    </h2>

                </div>

            </div>

        </div>

        <div className="col-md-4">

            <div className="card shadow border-0">

                <div className="card-body text-center">

                    <h6>Paid Bills</h6>

                    <h2 className="text-success">

                        {
                            bookings.filter(b=>b.bookingStatus==="CHECKED_OUT").length
                        }

                    </h2>

                </div>

            </div>

        </div>

        <div className="col-md-4">

            <div className="card shadow border-0">

                <div className="card-body text-center">

                    <h6>Pending Bills</h6>

                    <h2 className="text-warning">

                        {
                            bookings.filter(b=>b.bookingStatus!=="CHECKED_OUT").length
                        }

                    </h2>

                </div>

            </div>

        </div>

    </div>

    {/* Booking Table */}

    <div className="card shadow border-0 mb-4">

        <div className="card-body">

            <h4 className="mb-3">
                Booking Payments
            </h4>

            <div className="table-responsive">

                <table className="table table-hover align-middle">

                    <thead className="table-dark">

                        <tr>

                            <th>Booking ID</th>

                            <th>Room</th>

                            <th>Status</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {bookings.map((booking)=>(

                            <tr key={booking.bookingId}>

                                <td>

                                    #{booking.bookingId}

                                </td>

                                <td>

                                    {booking.room?.roomNumber}

                                </td>

                                <td>

                                    <span
                                        className={`badge ${
                                            booking.bookingStatus==="CHECKED_OUT"
                                            ? "bg-success"
                                            : booking.bookingStatus==="CANCELLED"
                                            ? "bg-danger"
                                            : "bg-warning text-dark"
                                        }`}
                                    >

                                        {booking.bookingStatus}

                                    </span>

                                </td>

                                <td>

                                    <button

                                        className="btn btn-primary btn-sm"

                                        onClick={()=>
                                            viewBill(
                                                booking.bookingId
                                            )
                                        }

                                    >

                                        View Bill

                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    </div>

    {/* Final Bill */}

    {bill && (

        <div
            className="card border-0 shadow-lg"
            style={{
                borderRadius:"18px"
            }}
        >

            <div className="card-header bg-primary text-white">

                <h3 className="mb-0">

                    Final Bill

                </h3>

            </div>

            <div className="card-body">

                <div className="row">

                    <div className="col-md-6">

                        <table className="table">

                            <tbody>

                                <tr>

                                    <th>Booking ID</th>

                                    <td>#{bill.bookingId}</td>

                                </tr>

                                <tr>

                                    <th>Customer</th>

                                    <td>{bill.customerName}</td>

                                </tr>

                                <tr>

                                    <th>Room</th>

                                    <td>{bill.roomNumber}</td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                    <div className="col-md-6">

                        <table className="table">

                            <tbody>

                                <tr>

                                    <th>Room Charges</th>

                                    <td>

                                        ₹ {bill.roomCharges}

                                    </td>

                                </tr>

                                <tr>

                                    <th>Food Charges</th>

                                    <td>

                                        ₹ {bill.foodCharges}

                                    </td>

                                </tr>

                                <tr>

                                    <th>Other Charges</th>

                                    <td>

                                        ₹ {bill.otherCharges}

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                <div
                    className="alert alert-warning text-center mt-3"
                >

                    <h3>

                        Total Amount

                    </h3>

                    <h1
                        className="text-success fw-bold"
                    >

                        ₹ {bill.totalAmount}

                    </h1>

                </div>

                <div className="row mt-4">

                    <div className="col-md-6">

                        <label className="fw-bold">

                            Payment Method

                        </label>

                        <select

                            className="form-select"

                            value={paymentMethod}

                            onChange={(e)=>

                                setPaymentMethod(
                                    e.target.value
                                )

                            }

                        >

                            <option>UPI</option>

                            <option>Credit Card</option>

                            <option>Debit Card</option>

                            <option>Cash</option>

                        </select>

                    </div>

                    <div className="col-md-6 d-flex align-items-end">

                        <h5>

                            Status :

                            {" "}

                            {bill.paid ?

                                <span className="badge bg-success">

                                    PAID

                                </span>

                                :

                                <span className="badge bg-danger">

                                    PENDING

                                </span>

                            }

                        </h5>

                    </div>

                </div>

                <div className="mt-4 d-flex gap-3">

                    {bill.paid ?

                        <button
                            className="btn btn-success btn-lg"
                            disabled
                        >

                            ✔ Payment Completed

                        </button>

                        :

                        <button

                            className="btn btn-success btn-lg"

                            onClick={makePayment}

                        >

                            💳 Pay Now

                        </button>

                    }

                    <button

                        className="btn btn-primary btn-lg"

                        onClick={invoice}

                    >

                        📥 Download Invoice

                    </button>

                </div>

            </div>

        </div>

    )}

</Layout>

    );

}

export default Payment;