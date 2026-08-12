import { useEffect, useState } from "react";

import Layout from "../../layouts/Layout";

import {
    getFoodStatistics
} from "../../services/managerService";

import {
    FaUtensils,
    FaClock,
    FaFire,
    FaCheckCircle,
    FaTruck,
    FaChartBar
} from "react-icons/fa";

function FoodStatistics() {

    const [stats, setStats] = useState({

        PENDING: 0,
        PREPARING: 0,
        READY: 0,
        DELIVERED: 0

    });

    useEffect(() => {

        loadStatistics();

    }, []);

    const loadStatistics = async () => {

        try {

            const response =
                await getFoodStatistics();

            setStats({

                PENDING: response.data?.PENDING || 0,

                PREPARING: response.data?.PREPARING || 0,

                READY: response.data?.READY || 0,

                DELIVERED: response.data?.DELIVERED || 0

            });

        } catch (error) {

            console.error(error);

        }

    };

    const totalOrders =
        stats.PENDING +
        stats.PREPARING +
        stats.READY +
        stats.DELIVERED;

    const getPercentage = (value) => {

        if (totalOrders === 0) {
            return 0;
        }

        return ((value / totalOrders) * 100).toFixed(1);

    };

    return (

        <Layout>

            <div className="container-fluid">

                {/* Page Header */}

                <div
                    className="card border-0 shadow-lg mb-4"
                    style={{
                        borderRadius: "20px",
                        background:
                            "linear-gradient(135deg, #0F172A, #1E3A8A)",
                        color: "white"
                    }}
                >

                    <div className="card-body p-4">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h2 className="fw-bold mb-2">

                                    🍽️ Food Order Statistics

                                </h2>

                                <p className="mb-0 opacity-75">

                                    Monitor food orders across different processing stages.

                                </p>

                            </div>

                            <div
                                style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "16px",
                                    background:
                                        "rgba(255,255,255,0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "30px"
                                }}
                            >

                                <FaChartBar />

                            </div>

                        </div>

                    </div>

                </div>


                {/* Total Orders */}

                <div
                    className="card border-0 shadow mb-4"
                    style={{
                        borderRadius: "18px"
                    }}
                >

                    <div className="card-body p-4">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h6 className="text-muted fw-semibold">

                                    TOTAL FOOD ORDERS

                                </h6>

                                <h1 className="fw-bold text-primary mb-0">

                                    {totalOrders}

                                </h1>

                                <small className="text-muted">

                                    Across all order statuses

                                </small>

                            </div>

                            <div
                                style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "16px",
                                    background: "#DBEAFE",
                                    color: "#2563EB",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "28px"
                                }}
                            >

                                <FaUtensils />

                            </div>

                        </div>

                    </div>

                </div>


                {/* Statistics Cards */}

                <div className="row g-4 mb-4">

                    {/* Pending */}

                    <div className="col-md-3">

                        <div
                            className="card border-0 shadow h-100"
                            style={{
                                borderRadius: "18px"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <h6 className="text-muted fw-semibold">

                                            PENDING

                                        </h6>

                                        <h2 className="fw-bold text-warning mb-1">

                                            {stats.PENDING}

                                        </h2>

                                        <small className="text-muted">

                                            {getPercentage(stats.PENDING)}% of orders

                                        </small>

                                    </div>

                                    <div
                                        style={{
                                            width: "58px",
                                            height: "58px",
                                            borderRadius: "15px",
                                            background: "#FEF3C7",
                                            color: "#D97706",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "25px"
                                        }}
                                    >

                                        <FaClock />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Preparing */}

                    <div className="col-md-3">

                        <div
                            className="card border-0 shadow h-100"
                            style={{
                                borderRadius: "18px"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <h6 className="text-muted fw-semibold">

                                            PREPARING

                                        </h6>

                                        <h2 className="fw-bold text-info mb-1">

                                            {stats.PREPARING}

                                        </h2>

                                        <small className="text-muted">

                                            {getPercentage(stats.PREPARING)}% of orders

                                        </small>

                                    </div>

                                    <div
                                        style={{
                                            width: "58px",
                                            height: "58px",
                                            borderRadius: "15px",
                                            background: "#CFFAFE",
                                            color: "#0891B2",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "25px"
                                        }}
                                    >

                                        <FaFire />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Ready */}

                    <div className="col-md-3">

                        <div
                            className="card border-0 shadow h-100"
                            style={{
                                borderRadius: "18px"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <h6 className="text-muted fw-semibold">

                                            READY

                                        </h6>

                                        <h2 className="fw-bold text-primary mb-1">

                                            {stats.READY}

                                        </h2>

                                        <small className="text-muted">

                                            {getPercentage(stats.READY)}% of orders

                                        </small>

                                    </div>

                                    <div
                                        style={{
                                            width: "58px",
                                            height: "58px",
                                            borderRadius: "15px",
                                            background: "#DBEAFE",
                                            color: "#2563EB",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "25px"
                                        }}
                                    >

                                        <FaCheckCircle />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Delivered */}

                    <div className="col-md-3">

                        <div
                            className="card border-0 shadow h-100"
                            style={{
                                borderRadius: "18px"
                            }}
                        >

                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <h6 className="text-muted fw-semibold">

                                            DELIVERED

                                        </h6>

                                        <h2 className="fw-bold text-success mb-1">

                                            {stats.DELIVERED}

                                        </h2>

                                        <small className="text-muted">

                                            {getPercentage(stats.DELIVERED)}% of orders

                                        </small>

                                    </div>

                                    <div
                                        style={{
                                            width: "58px",
                                            height: "58px",
                                            borderRadius: "15px",
                                            background: "#DCFCE7",
                                            color: "#16A34A",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "25px"
                                        }}
                                    >

                                        <FaTruck />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Order Distribution */}

                <div
                    className="card border-0 shadow mb-4"
                    style={{
                        borderRadius: "18px"
                    }}
                >

                    <div className="card-body p-4">

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <div>

                                <h4 className="fw-bold mb-1">

                                    Order Distribution

                                </h4>

                                <p className="text-muted mb-0">

                                    Current distribution of food orders.

                                </p>

                            </div>

                            <FaChartBar
                                style={{
                                    fontSize: "28px",
                                    color: "#1E3A8A"
                                }}
                            />

                        </div>


                        {/* Pending Progress */}

                        <div className="mb-4">

                            <div className="d-flex justify-content-between mb-2">

                                <span className="fw-semibold">

                                    Pending

                                </span>

                                <span className="text-warning fw-bold">

                                    {getPercentage(stats.PENDING)}%

                                </span>

                            </div>

                            <div
                                className="progress"
                                style={{
                                    height: "10px",
                                    borderRadius: "10px"
                                }}
                            >

                                <div
                                    className="progress-bar bg-warning"
                                    style={{
                                        width:
                                            `${getPercentage(stats.PENDING)}%`,
                                        borderRadius: "10px"
                                    }}
                                />

                            </div>

                        </div>


                        {/* Preparing Progress */}

                        <div className="mb-4">

                            <div className="d-flex justify-content-between mb-2">

                                <span className="fw-semibold">

                                    Preparing

                                </span>

                                <span className="text-info fw-bold">

                                    {getPercentage(stats.PREPARING)}%

                                </span>

                            </div>

                            <div
                                className="progress"
                                style={{
                                    height: "10px",
                                    borderRadius: "10px"
                                }}
                            >

                                <div
                                    className="progress-bar bg-info"
                                    style={{
                                        width:
                                            `${getPercentage(stats.PREPARING)}%`,
                                        borderRadius: "10px"
                                    }}
                                />

                            </div>

                        </div>


                        {/* Ready Progress */}

                        <div className="mb-4">

                            <div className="d-flex justify-content-between mb-2">

                                <span className="fw-semibold">

                                    Ready

                                </span>

                                <span className="text-primary fw-bold">

                                    {getPercentage(stats.READY)}%

                                </span>

                            </div>

                            <div
                                className="progress"
                                style={{
                                    height: "10px",
                                    borderRadius: "10px"
                                }}
                            >

                                <div
                                    className="progress-bar bg-primary"
                                    style={{
                                        width:
                                            `${getPercentage(stats.READY)}%`,
                                        borderRadius: "10px"
                                    }}
                                />

                            </div>

                        </div>


                        {/* Delivered Progress */}

                        <div>

                            <div className="d-flex justify-content-between mb-2">

                                <span className="fw-semibold">

                                    Delivered

                                </span>

                                <span className="text-success fw-bold">

                                    {getPercentage(stats.DELIVERED)}%

                                </span>

                            </div>

                            <div
                                className="progress"
                                style={{
                                    height: "10px",
                                    borderRadius: "10px"
                                }}
                            >

                                <div
                                    className="progress-bar bg-success"
                                    style={{
                                        width:
                                            `${getPercentage(stats.DELIVERED)}%`,
                                        borderRadius: "10px"
                                    }}
                                />

                            </div>

                        </div>

                    </div>

                </div>


                {/* Summary Table */}

                <div
                    className="card border-0 shadow"
                    style={{
                        borderRadius: "18px",
                        overflow: "hidden"
                    }}
                >

                    <div className="card-body p-0">

                        <div className="p-4 border-bottom">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <h4 className="fw-bold mb-1">

                                        Food Order Summary

                                    </h4>

                                    <p className="text-muted mb-0">

                                        Overview of all food order statuses.

                                    </p>

                                </div>

                                <span className="badge bg-primary px-3 py-2">

                                    {totalOrders} Orders

                                </span>

                            </div>

                        </div>


                        <div className="table-responsive">

                            <table className="table table-hover align-middle mb-0">

                                <thead
                                    style={{
                                        background: "#1F2937",
                                        color: "white"
                                    }}
                                >

                                    <tr>

                                        <th className="px-4 py-3">

                                            Status

                                        </th>

                                        <th className="py-3">

                                            Total Orders

                                        </th>

                                        <th className="py-3">

                                            Percentage

                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>

                                        <td className="px-4">

                                            <span className="badge bg-warning text-dark px-3 py-2">

                                                Pending

                                            </span>

                                        </td>

                                        <td className="fw-bold">

                                            {stats.PENDING}

                                        </td>

                                        <td>

                                            {getPercentage(stats.PENDING)}%

                                        </td>

                                    </tr>


                                    <tr>

                                        <td className="px-4">

                                            <span className="badge bg-info px-3 py-2">

                                                Preparing

                                            </span>

                                        </td>

                                        <td className="fw-bold">

                                            {stats.PREPARING}

                                        </td>

                                        <td>

                                            {getPercentage(stats.PREPARING)}%

                                        </td>

                                    </tr>


                                    <tr>

                                        <td className="px-4">

                                            <span className="badge bg-primary px-3 py-2">

                                                Ready

                                            </span>

                                        </td>

                                        <td className="fw-bold">

                                            {stats.READY}

                                        </td>

                                        <td>

                                            {getPercentage(stats.READY)}%

                                        </td>

                                    </tr>


                                    <tr>

                                        <td className="px-4">

                                            <span className="badge bg-success px-3 py-2">

                                                Delivered

                                            </span>

                                        </td>

                                        <td className="fw-bold">

                                            {stats.DELIVERED}

                                        </td>

                                        <td>

                                            {getPercentage(stats.DELIVERED)}%

                                        </td>

                                    </tr>


                                    <tr
                                        style={{
                                            background: "#F8FAFC"
                                        }}
                                    >

                                        <td className="px-4 fw-bold">

                                            Total Orders

                                        </td>

                                        <td className="fw-bold text-primary">

                                            {totalOrders}

                                        </td>

                                        <td className="fw-bold">

                                            100%

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default FoodStatistics;