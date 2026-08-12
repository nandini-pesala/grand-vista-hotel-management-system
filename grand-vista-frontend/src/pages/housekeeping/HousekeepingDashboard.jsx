import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import DashboardCard from "../../components/DashboardCard";
import { getCleaningRequests }
from "../../services/housekeepingService";

function HousekeepingDashboard() {

    const [pending,
    setPending] = useState(0);

    useEffect(() => {

        loadData();

    }, []);

    const loadData = async () => {

        const response =
        await getCleaningRequests();

        setPending(
            response.data.length
        );
    };

   return (

        <Layout>

            {/* Page Header */}

            <div
                className="card border-0 shadow-lg mb-4"
                style={{
                    background:
                        "linear-gradient(135deg, #0F172A, #1E3A8A)",
                    borderRadius: "20px",
                    color: "white"
                }}
            >

                <div className="card-body p-4">

                    <h2 className="fw-bold mb-2">
                        👨 House Keeping Dashboard
                    </h2>

                    <p className="mb-0">
                        Maintains room cleanliness and hygiene.
                    </p>

                </div>

            </div>


            {/* Order Statistics */}

            <div className="row g-4">

                {/* Pending */}

                <div className="col-md-4">

                    <div
                        className="card border-0 shadow-lg h-100"
                        style={{
                            borderRadius: "20px",
                            borderLeft: "6px solid #F59E0B"
                        }}
                    >

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>

                                    <p
                                        className="text-muted mb-2 fw-semibold"
                                        style={{
                                            letterSpacing: "0.5px"
                                        }}
                                    >
                                        PENDING CLEANING
                                    </p>

                                    <h1
                                        className="fw-bold mb-0"
                                        style={{
                                            fontSize: "48px"
                                        }}
                                    >
                                        {pending}
                                    </h1>

                                    <p className="text-muted mt-2 mb-0">
                                        Rooms are ready for cleaning.
                                    </p>

                                </div>

                                <div
                                    style={{
                                        width: "75px",
                                        height: "75px",
                                        borderRadius: "50%",
                                        background: "#FEF3C7",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "36px"
                                    }}
                                >
                                    🧹
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );
}

export default HousekeepingDashboard;