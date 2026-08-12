import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    getCustomerOrders,
    getOrderDetails
} from "../../services/foodService";

function FoodOrders() {

    const user =
        JSON.parse(localStorage.getItem("user"));

    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {

        try {

            const response =
    await getCustomerOrders(user.customerId);

const updatedOrders = await Promise.all(

    response.data.map(async (order) => {

        const details =
            await getOrderDetails(order.orderId);

        return {

            ...order,

            details: details.data

        };

    })

);

setOrders(updatedOrders);

        } catch (error) {

            console.error(error);

        }

    };

    const filteredOrders =
        orders.filter(order =>

            order.orderId
                .toString()
                .includes(search)

        );

    const pending =
        orders.filter(
            o => o.orderStatus === "PENDING"
        ).length;

    const preparing =
        orders.filter(
            o => o.orderStatus === "PREPARING"
        ).length;

    const delivered =
        orders.filter(
            o =>

                o.orderStatus === "DELIVERED" ||

                o.orderStatus === "COMPLETED"

        ).length;

    const getBadge = (status) => {

        switch (status) {

            case "PENDING":
                return "bg-warning text-dark";

            case "PREPARING":
                return "bg-primary";

            case "READY":
                return "bg-info";

            case "DELIVERED":
                return "bg-success";

            case "COMPLETED":
                return "bg-success";

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
                        🍽️ My Food Orders
                    </h2>

                    <p className="mb-0">
                        Track all your restaurant orders placed during your stay.
                    </p>

                </div>

            </div>

            {/* Statistics */}

            <div className="row mb-4">

                <div className="col-lg-3 col-md-6 mb-3">

                    <div className="card border-0 shadow">

                        <div className="card-body text-center">

                            <h6 className="text-muted">
                                Total Orders
                            </h6>

                            <h2 className="text-primary fw-bold">
                                {orders.length}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6 mb-3">

                    <div className="card border-0 shadow">

                        <div className="card-body text-center">

                            <h6 className="text-muted">
                                Pending
                            </h6>

                            <h2 className="text-warning fw-bold">
                                {pending}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6 mb-3">

                    <div className="card border-0 shadow">

                        <div className="card-body text-center">

                            <h6 className="text-muted">
                                Preparing
                            </h6>

                            <h2 className="text-primary fw-bold">
                                {preparing}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6 mb-3">

                    <div className="card border-0 shadow">

                        <div className="card-body text-center">

                            <h6 className="text-muted">
                                Delivered
                            </h6>

                            <h2 className="text-success fw-bold">
                                {delivered}
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

                        placeholder="Search by Order ID..."

                        value={search}

                        onChange={(e) =>
                            setSearch(e.target.value)
                        }

                    />

                </div>

            </div>

            {/* Orders Table */}

            <div
                className="card shadow border-0"
                style={{
                    borderRadius: "18px"
                }}
            >

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead className="table-dark">

                               <tr>

    <th>Order ID</th>

    <th>Food Items</th>

    <th>Status</th>

    <th>Total Amount</th>

</tr>

                            </thead>

                            <tbody>

                                {filteredOrders.length > 0 ? (

                                    filteredOrders.map(order => (

                                        <tr key={order.orderId}>

    <td className="fw-bold">

        #{order.orderId}

    </td>

    <td>

        {order.details?.map(detail => (

            <div
                key={detail.orderDetailId}
                className="mb-2 border rounded p-2 bg-light"
            >

                <strong>

                    {detail.menuItem.foodName}

                </strong>

                <br />

                Qty : {detail.quantity}

                <br />

                ₹{detail.subtotal}

            </div>

        ))}

    </td>

    <td>

        <span className={`badge ${getBadge(order.orderStatus)}`}>

            {order.orderStatus}

        </span>

    </td>

    <td>

        <span className="fw-bold text-success">

            ₹{order.totalAmount}

        </span>

    </td>

</tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="3"
                                            className="text-center py-5 text-muted"
                                        >

                                            <h5>

                                                No Food Orders Found

                                            </h5>

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

export default FoodOrders;              

