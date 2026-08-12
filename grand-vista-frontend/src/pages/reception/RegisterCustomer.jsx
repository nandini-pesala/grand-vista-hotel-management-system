import { useState } from "react";
import Layout from "../../layouts/Layout";
import { registerCustomer } from "../../services/customerService";

function RegisterCustomer() {

    const [customer, setCustomer] = useState({
        customerName: "",
        email: "",
        password: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {

        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await registerCustomer(customer);

            alert("Customer Registered Successfully");

            setCustomer({
                customerName: "",
                email: "",
                password: "",
                phone: "",
                address: ""
            });

        } catch (error) {

            console.error(error);

            alert("Registration Failed");
        }
    };

   return (

    <Layout>

        {/* Header */}

        <div
            className="card border-0 shadow-lg mb-4"
            style={{
                background: "linear-gradient(135deg,#0F172A,#1E3A8A)",
                color: "white",
                borderRadius: "20px"
            }}
        >

            <div className="card-body p-4">

                <h2 className="fw-bold mb-2">
                    👤 Register Customer
                </h2>

                <p className="mb-0">
                    Create a new customer account for hotel bookings.
                </p>

            </div>

        </div>

        {/* Registration Form */}

        <div
            className="card border-0 shadow"
            style={{
                borderRadius: "20px"
            }}
        >

            <div className="card-body p-5">

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-6 mb-4">

                            <label className="form-label fw-bold">
                                Customer Name
                            </label>

                            <input
                                type="text"
                                name="customerName"
                                className="form-control form-control-lg"
                                placeholder="Enter Customer Name"
                                value={customer.customerName}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-4">

                            <label className="form-label fw-bold">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Email"
                                value={customer.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-6 mb-4">

                            <label className="form-label fw-bold">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                className="form-control form-control-lg"
                                placeholder="Enter Password"
                                value={customer.password}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-4">

                            <label className="form-label fw-bold">
                                Mobile Number
                            </label>

                            <input
                                type="text"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone Number"
                                value={customer.phone}
                                onChange={handleChange}
                                maxLength="10"
                                required
                            />

                        </div>

                    </div>

                    <div className="mb-4">

                        <label className="form-label fw-bold">
                            Address
                        </label>

                        <textarea
                            rows="4"
                            name="address"
                            className="form-control"
                            placeholder="Enter Customer Address"
                            value={customer.address}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="text-end">

                        <button
                            type="submit"
                            className="btn btn-warning btn-lg px-5 fw-bold shadow"
                            style={{
                                borderRadius: "12px"
                            }}
                        >
                            👤 Register Customer
                        </button>

                    </div>

                </form>

            </div>

        </div>

    </Layout>

);
}

export default RegisterCustomer;