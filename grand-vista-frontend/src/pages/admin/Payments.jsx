import { useEffect, useState } from "react";
import { FaMoneyBillWave, FaCreditCard, FaCheckCircle } from "react-icons/fa";

import Layout from "../../layouts/Layout";
import { getRevenue, getAllPayments } from "../../services/paymentService";

function Payments() {

    const [payments, setPayments] = useState([]);
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {
        loadPayments();
        loadRevenue();
    }, []);

    const loadPayments = async () => {
        try {
            const response = await getAllPayments();
            setPayments(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loadRevenue = async () => {
        try {
            const response = await getRevenue();
            setRevenue(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <Layout>

            <h2 className="mb-4 fw-bold">
                Reports & Payments
            </h2>

            {/* Dashboard Cards */}

            <div className="row mb-4">

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0 bg-success text-white">

                        <div className="card-body">

                            <h6>
                                <FaMoneyBillWave className="me-2" />
                                Total Revenue
                            </h6>

                            <h2 className="fw-bold">
                                ₹ {revenue}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0 bg-primary text-white">

                        <div className="card-body">

                            <h6>
                                <FaCreditCard className="me-2" />
                                Total Payments
                            </h6>

                            <h2 className="fw-bold">
                                {payments.length}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0 bg-warning">

                        <div className="card-body">

                            <h6>
                                <FaCheckCircle className="me-2" />
                                Successful Payments
                            </h6>

                            <h2 className="fw-bold">
                                {
                                    payments.filter(
                                        payment =>
                                            payment.paymentStatus === "SUCCESS"
                                    ).length
                                }
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

            {/* Payment Table */}
            <h2 className="mb-4">
                        Payment Management
                    </h2>

            <div className="card shadow">

                <div className="card-header bg-dark text-white">

                </div>

                <div className="card-body p-0">

                    <table className="table table-hover table-striped mb-0">

                        <thead className="table-dark">

                            <tr>
                                <th>ID</th>
                                <th>Booking ID</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>

                        </thead>

                        <tbody>

                            {payments.length > 0 ? (

                                payments.map((payment) => (

                                    <tr key={payment.paymentId}>

                                        <td>{payment.paymentId}</td>

                                        <td>
                                            {payment.booking?.bookingId}
                                        </td>

                                        <td className="fw-bold text-success">
                                            ₹{payment.amount}
                                        </td>

                                        <td>

                                            <span
                                                className={
                                                    payment.paymentStatus === "SUCCESS"
                                                        ? "badge bg-success"
                                                        : "badge bg-danger"
                                                }
                                            >
                                                {payment.paymentStatus}
                                            </span>

                                        </td>

                                        <td>
                                            {new Date(
                                                payment.paymentDate
                                            ).toLocaleString()}
                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="5"
                                        className="text-center py-4"
                                    >
                                        No Payments Found
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </Layout>

    );
}

export default Payments;