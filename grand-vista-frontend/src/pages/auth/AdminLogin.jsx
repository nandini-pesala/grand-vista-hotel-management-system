import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../services/authService";
import Navbar from "../../components/Navbar";

function AdminLogin() {


const navigate = useNavigate();

const [formData, setFormData] = useState({
    email: "",
    password: ""
});

const handleChange = (e) => {

    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const response =
            await adminLogin(formData);

        const user = response.data;

        if (user.role === "ADMIN") {

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

            navigate("/admin-dashboard");

        } else {

            alert(
                "Access Denied. Admin Login Only"
            );
        }

    } catch (error) {

        console.error(error);

        alert(
            "Invalid Email or Password"
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
                width: "400px",
                color: "white"
            }}
        >

            <h2
                className="text-center mb-4"
                style={{
                    color: "#FBBF24"
                }}
            >
                Admin Login
            </h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-warning w-100"
                >
                    Login
                </button>

            </form>

        </div>

    </div>
    </>
);


}

export default AdminLogin;
