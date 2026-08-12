import { useNavigate } from "react-router-dom";

function TopNavbar() {

    const navigate = useNavigate();

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    const handleLogout = () => {

        localStorage.removeItem(
            "user"
        );

        navigate("/");
    };

    return (

        <div
            className="shadow p-3 d-flex justify-content-between align-items-center"
            style={{
                background: "#FFFFFF"
            }}
        >

            <div>

                <h4 className="mb-0">
                    Dashboard
                </h4>

                <small>
                    Logged in as:
                    {" "}
                    {user?.role}
                </small>

            </div>

            <button
                className="btn btn-warning"
                onClick={handleLogout}
            >
                Logout
            </button>

        </div>
    );
}

export default TopNavbar;