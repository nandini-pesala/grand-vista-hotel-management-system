import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";

import {
    getAllMenuItems,
    addMenuItem
} from "../../services/foodService";

function FoodMenuManagement() {

    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState("");

    const [food, setFood] = useState({
        foodName: "",
        category: "",
        price: ""
    });

    useEffect(() => {
        loadFoodItems();
    }, []);

    const loadFoodItems = async () => {

        try {

            const response = await getAllMenuItems();

            setFoods(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleChange = (e) => {

        setFood({
            ...food,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addMenuItem(food);

            alert("Food Item Added Successfully");

            loadFoodItems();

            setFood({
                foodName: "",
                category: "",
                price: ""
            });

        } catch (error) {

            console.error(error);

        }

    };

    const filteredFoods = foods.filter((item) =>
        item.foodName?.toLowerCase().includes(search.toLowerCase()) ||
        item.category?.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <Layout>

            <div className="container-fluid">

                {/* Header */}

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="fw-bold mb-1">
                            Food Menu Management
                        </h2>

                        <p className="text-muted">
                            Manage hotel restaurant menu items
                        </p>

                    </div>

                    <div className="card shadow-sm border-0 bg-warning">

                        <div className="card-body text-center">

                            <h3 className="fw-bold mb-0">
                                {foods.length}
                            </h3>

                            <small>Total Food Items</small>

                        </div>

                    </div>

                </div>

                {/* Add Food */}

                <div className="card shadow border-0 mb-4">

                    <div className="card-header bg-dark text-white">

                        <h5 className="mb-0">
                            Add Food Item
                        </h5>

                    </div>

                    <div className="card-body">

                        <form onSubmit={handleSubmit}>

                            <div className="row">

                                <div className="col-md-4 mb-3">

                                    <label className="form-label fw-semibold">
                                        Food Name
                                    </label>

                                    <input
                                        type="text"
                                        name="foodName"
                                        className="form-control"
                                        placeholder="Enter Food Name"
                                        value={food.foodName}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label fw-semibold">
                                        Category
                                    </label>

                                    <select
                                        name="category"
                                        className="form-select"
                                        value={food.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="STARTERS">STARTERS</option>
                                        <option value="MAIN COURSE">MAIN COURSE</option>
                                        <option value="BIRYANI">BIRYANI</option>
                                        <option value="FAST FOOD">FAST FOOD</option>
                                        <option value="DESSERT">DESSERT</option>
                                        <option value="BEVERAGES">BEVERAGES</option>
                                    </select>

                                </div>

                                <div className="col-md-2 mb-3">

                                    <label className="form-label fw-semibold">
                                        Price
                                    </label>

                                    <input
                                        type="number"
                                        name="price"
                                        className="form-control"
                                        placeholder="₹"
                                        value={food.price}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-2 d-grid mb-3">

                                    <label className="form-label">
                                        &nbsp;
                                    </label>

                                    <button
                                        type="submit"
                                        className="btn btn-warning fw-bold"
                                    >
                                        Add Item
                                    </button>

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

                {/* Food List */}

                <div className="card shadow border-0">

                    <div className="card-header bg-white">

                        <div className="row align-items-center">

                            <div className="col-md-6">

                                <h5 className="mb-0">
                                    Food Menu
                                </h5>

                            </div>

                            <div className="col-md-6">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search food or category..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                    </div>

                    <div className="card-body p-0">

                        <div className="table-responsive">

                            <table className="table table-hover align-middle mb-0">

                                <thead className="table-dark">

                                    <tr>

                                        <th>ID</th>
                                        <th>Food Name</th>
                                        <th>Category</th>
                                        <th>Price</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {filteredFoods.length > 0 ? (

                                        filteredFoods.map((food) => (

                                            <tr key={food.foodId}>

                                                <td>

                                                    <span className="badge bg-secondary">
                                                        #{food.foodId}
                                                    </span>

                                                </td>

                                                <td className="fw-bold">
                                                    {food.foodName}
                                                </td>

                                                <td>

                                                    <span className="badge bg-info text-dark">
                                                        {food.category}
                                                    </span>

                                                </td>

                                                <td className="fw-bold text-success">
                                                    ₹ {food.price}
                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan="4"
                                                className="text-center py-5 text-muted"
                                            >
                                                No Food Items Found
                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default FoodMenuManagement;