import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { registerCustomer } from "../../services/authService";

function Register() {

const navigate = useNavigate();

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

        alert(
            "Registration Successful"
        );

        navigate(
            "/customer-login"
        );

    } catch (error) {

        console.error(error);

        alert(
            "Registration Failed"
        );
    }
};

return (
    <>
    <Navbar />

    <div
        className="d-flex justify-content-center align-items-center"
        style={{
            minHeight: "88.5vh",
            background:
                "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945') center/cover"
        }}
    >

        <div
            className="glass-cards p-4"
            style={{
                width: "500px",
                color: "white"
            }}
        >

            <h2
                className="text-center mb-4"
                style={{
                    color: "#FBBF24"
                }}
            >
                Customer Registration
            </h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <input
                        type="text"
                        name="customerName"
                        className="form-control"
                        placeholder="Customer Name"
                        value={customer.customerName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={customer.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={customer.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        maxLength="10"
                        value={customer.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <textarea
                        name="address"
                        className="form-control"
                        rows="3"
                        placeholder="Address"
                        value={customer.address}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn btn-warning w-100"
                >
                    Register
                </button>

            </form>

            <p className="text-center mt-3">

                Already have an account?

                <Link
                    to="/customer-login"
                    className="ms-2 text-warning"
                >
                    Login Here
                </Link>

            </p>

        </div>

    </div>
    </>
);


}

export default Register;
