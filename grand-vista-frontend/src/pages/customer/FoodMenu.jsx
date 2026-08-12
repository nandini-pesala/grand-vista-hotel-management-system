import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";

import {
    getAllMenuItems,
    placeOrder
} from "../../services/foodService";

function FoodMenu() {

    const user =
        JSON.parse(localStorage.getItem("user"));

    const [menu, setMenu] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadMenu();
    }, []);

    const loadMenu = async () => {

        try {

            const response =
                await getAllMenuItems();

            setMenu(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const orderFood = async (foodId) => {

        const roomNumber =
            Number(prompt("Enter Room Number"));

        if (!roomNumber) return;

        const quantity =
            Number(prompt("Enter Quantity"));

        if (!quantity) return;

        try {

            await placeOrder({

                customerId: user.customerId,

                roomNumber,

                foodId,

                quantity

            });

            alert("Food Order Placed Successfully 🍽️");

        } catch (error) {

            console.error(error);

        }

    };

    const filteredMenu = menu.filter(item =>

        item.foodName
            .toLowerCase()
            .includes(search.toLowerCase())

        ||

        item.category
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <Layout>

            {/* Header */}

            <div
                className="card border-0 shadow-lg mb-4"
                style={{
                    background:
                        "linear-gradient(135deg,#0F172A,#1E3A8A)",
                    borderRadius: "20px",
                    color: "white"
                }}
            >

                <div className="card-body p-4">

                    <h2 className="fw-bold">
                        🍽️ Grand Vista Restaurant
                    </h2>

                    <p className="mb-0">
                        Enjoy delicious meals prepared by our professional chefs.
                    </p>

                </div>

            </div>

            {/* Search */}

            <div className="card shadow border-0 mb-4">

                <div className="card-body">

                    <div className="row align-items-center">

                        <div className="col-md-8">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Food..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                        </div>

                        <div className="col-md-4 text-end">

                            <span
                                className="badge bg-warning text-dark p-3 fs-6"
                            >

                                Total Items :
                                {" "}
                                {filteredMenu.length}

                            </span>

                        </div>

                    </div>

                </div>

            </div>

            {/* Food Cards */}

            <div className="row">

                {filteredMenu.map(item => (

                    <div
                        className="col-lg-4 col-md-6 mb-4"
                        key={item.foodId}
                    >

                        <div
                            className="card border-0 shadow h-100"
                            style={{
                                borderRadius: "20px",
                                transition: "0.3s"
                            }}
                        >

                            <div className="card-body">

                                <div className="d-flex justify-content-between">

                                    <h4
                                        className="fw-bold"
                                    >
                                        {item.foodName}
                                    </h4>

                                    <span
                                        className="badge bg-primary"
                                    >
                                        {item.category}
                                    </span>

                                </div>

                                <hr />

                                <h2
                                    className="text-success fw-bold"
                                >
                                    ₹{item.price}
                                </h2>

                                <small
                                    className="text-muted"
                                >
                                    Freshly prepared using premium ingredients.
                                </small>

                            </div>

                            <div
                                className="card-footer bg-white border-0"
                            >

                                <button

                                    className="btn btn-warning w-100 fw-bold"

                                    onClick={() =>
                                        orderFood(item.foodId)
                                    }

                                >

                                    🛒 Order Now

                                </button>

                            </div>

                        </div>

                    </div>

                ))}

                {filteredMenu.length === 0 && (

                    <div className="text-center mt-5">

                        <h4 className="text-muted">

                            No Food Items Found

                        </h4>

                    </div>

                )}

            </div>

        </Layout>

    );

}

export default FoodMenu;