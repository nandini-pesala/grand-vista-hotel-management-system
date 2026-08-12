import { useEffect, useState } from "react";
import {
    FaUsers,
    FaMapMarkerAlt,
    FaUserPlus,
    FaSearch
} from "react-icons/fa";

import Layout from "../../layouts/Layout";
import { getAllCustomers } from "../../services/adminService";

function Customers() {

    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {

        try {

            const response = await getAllCustomers();

            setCustomers(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const filteredCustomers = customers.filter(customer =>

        customer.customerName
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        customer.phone.includes(search)

    );

    const uniqueCities =
        new Set(
            customers.map(c => c.address)
        ).size;

    return (

        <Layout>

            <h2 className="fw-bold mb-4">
                Customer Management
            </h2>

            {/* Summary Cards */}

            <div className="row mb-4">

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0 bg-primary text-white">

                        <div className="card-body">

                            <h6>

                                <FaUsers className="me-2"/>

                                Total Customers

                            </h6>

                            <h2>

                                {customers.length}

                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0 bg-success text-white">

                        <div className="card-body">

                            <h6>

                                <FaMapMarkerAlt className="me-2"/>

                                Cities

                            </h6>

                            <h2>

                                {uniqueCities}

                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0 bg-warning">

                        <div className="card-body">

                            <h6>

                                <FaUserPlus className="me-2"/>

                                Latest Customer

                            </h6>

                            <h5>

                                {
                                    customers.length > 0
                                    ? customers[customers.length-1].customerName
                                    : "-"
                                }

                            </h5>

                        </div>

                    </div>

                </div>

            </div>

            {/* Search */}

            <div className="card shadow mb-4">

                <div className="card-body">

                    <div className="input-group">

                        <span className="input-group-text">

                            <FaSearch/>

                        </span>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search customer..."
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                        />

                    </div>

                </div>

            </div>

            {/* Table */}

            <div className="card shadow">

                <div className="card-header bg-dark text-white">

                    <h4 className="mb-0">

                        Customer List

                    </h4>

                </div>

                <div className="card-body p-0">

                    <table className="table table-hover table-striped mb-0">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>

                                <th>Customer</th>

                                <th>Phone</th>

                                <th>Address</th>

                            </tr>

                        </thead>

                        <tbody>

                        {

                            filteredCustomers.length > 0 ?

                            filteredCustomers.map(customer => (

                                <tr key={customer.customerId}>

                                    <td>

                                        {customer.customerId}

                                    </td>

                                    <td>

                                        <div className="d-flex align-items-center">

                                            <div
                                                className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
                                                style={{
                                                    width:"40px",
                                                    height:"40px",
                                                    fontWeight:"bold"
                                                }}
                                            >

                                                {
                                                    customer.customerName
                                                    .charAt(0)
                                                    .toUpperCase()
                                                }

                                            </div>

                                            <div>

                                                <strong>

                                                    {customer.customerName}

                                                </strong>

                                            </div>

                                        </div>

                                    </td>

                                    <td>

                                        {customer.phone}

                                    </td>

                                    <td>

                                        {customer.address}

                                    </td>

                                </tr>

                            ))

                            :

                            <tr>

                                <td
                                    colSpan="4"
                                    className="text-center py-5"
                                >

                                    No Customers Found

                                </td>

                            </tr>

                        }

                        </tbody>

                    </table>

                </div>

            </div>

        </Layout>

    );

}

export default Customers;