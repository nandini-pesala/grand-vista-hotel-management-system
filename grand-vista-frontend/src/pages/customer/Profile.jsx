import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import {
    getCustomerById,
    updateCustomer
} from "../../services/customerService";

import {
    FaUser,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaCheckCircle,
    FaEdit
} from "react-icons/fa";

function Profile() {

    const user = JSON.parse(localStorage.getItem("user"));

    const [customer, setCustomer] = useState({
        customerName: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {

        try {

            const response =
                await getCustomerById(user.userId);

            setCustomer(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {

        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });

    };

    const updateProfile = async (e) => {

        e.preventDefault();

        try {

            await updateCustomer(
                customer.user.userId,
                customer
            );

            alert("Profile Updated Successfully");

            loadProfile();

        } catch (error) {
            console.error(error);
        }
    };

    return (

        <Layout>

            {/* Profile Header */}

            <div
                className="card border-0 shadow-lg mb-4"
                style={{
                    borderRadius: "20px",
                    background:
                        "linear-gradient(135deg,#0f172a,#1e3a8a)"
                }}
            >

                <div className="card-body p-4 text-white">

                    <div className="d-flex justify-content-between align-items-center flex-wrap">

                        <div>

                            <h2 className="fw-bold">
                                My Profile
                            </h2>

                            <p className="mb-0 text-light">
                                Welcome back,
                                <span
                                    style={{
                                        color: "#FFD700",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {" "}{customer.customerName}
                                </span>
                            </p>

                        </div>

                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                width: "90px",
                                height: "90px",
                                background: "#FFD700",
                                color: "#0f172a",
                                fontSize: "34px",
                                fontWeight: "bold"
                            }}
                        >
                            {customer.customerName?.charAt(0)}
                        </div>

                    </div>

                </div>

            </div>

            <div className="row">

                {/* Left Side */}

                <div className="col-lg-5 mb-4">

                    <div
                        className="card border-0 shadow"
                        style={{
                            borderRadius: "18px"
                        }}
                    >

                        <div className="card-body">

                            <h4
                                className="mb-4 fw-bold"
                                style={{
                                    color: "#0f172a"
                                }}
                            >
                                Personal Information
                            </h4>

                            <div className="mb-4 d-flex">

                                <FaUser
                                    className="me-3 mt-1 text-warning"
                                />

                                <div>

                                    <small className="text-muted">
                                        Full Name
                                    </small>

                                    <h6 className="fw-bold">
                                        {customer.customerName}
                                    </h6>

                                </div>

                            </div>

                            <div className="mb-4 d-flex">

                                <FaEnvelope
                                    className="me-3 mt-1 text-primary"
                                />

                                <div>

                                    <small className="text-muted">
                                        Email
                                    </small>

                                    <h6>
                                        {customer.user?.email}
                                    </h6>

                                </div>

                            </div>

                            <div className="mb-4 d-flex">

                                <FaPhone
                                    className="me-3 mt-1 text-success"
                                />

                                <div>

                                    <small className="text-muted">
                                        Phone Number
                                    </small>

                                    <h6>
                                        {customer.phone}
                                    </h6>

                                </div>

                            </div>

                            <div className="mb-4 d-flex">

                                <FaMapMarkerAlt
                                    className="me-3 mt-1 text-danger"
                                />

                                <div>

                                    <small className="text-muted">
                                        Address
                                    </small>

                                    <h6>
                                        {customer.address}
                                    </h6>

                                </div>

                            </div>

                            <div className="mb-4 d-flex">

                                <FaCheckCircle
                                    className="me-3 mt-1 text-success"
                                />

                                <div>

                                    <small className="text-muted">
                                        Account Status
                                    </small>

                                    <br />

                                    <span
                                        className="badge bg-success px-3 py-2"
                                    >
                                        {customer.user?.status}
                                    </span>

                                </div>

                            </div>

                            <div className="d-flex">

                                <FaCalendarAlt
                                    className="me-3 mt-1 text-secondary"
                                />

                                <div>

                                    <small className="text-muted">
                                        Registered On
                                    </small>

                                    <h6>
                                        {customer.registrationDate?.substring(0,10)}
                                    </h6>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <div className="col-lg-7">

                    <div
                        className="card border-0 shadow"
                        style={{
                            borderRadius: "18px"
                        }}
                    >

                        <div className="card-body">

                            <h4
                                className="fw-bold mb-4"
                                style={{
                                    color: "#0f172a"
                                }}
                            >
                                <FaEdit className="me-2" />
                                Update Profile
                            </h4>

                            <form onSubmit={updateProfile}>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="customerName"
                                        value={customer.customerName}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Phone Number
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={customer.phone}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Address
                                    </label>

                                    <textarea
                                        rows="4"
                                        className="form-control"
                                        name="address"
                                        value={customer.address}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <button
                                    className="btn btn-warning px-5 py-2 fw-bold"
                                >
                                    Update Profile
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default Profile;