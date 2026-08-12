import { Link } from "react-router-dom";
import {
    FaUser,
    FaHotel
} from "react-icons/fa";

function Navbar() {

    return (

        <nav
            className="navbar navbar-expand-lg navbar-dark shadow-sm"
            style={{
                background: "#0F172A",
                padding: "14px 0"
            }}
        >

            <div className="container">

                {/* Logo */}

                <Link
                    to="/"
                    className="navbar-brand d-flex align-items-center fw-bold"
                    style={{
                        color: "#FBBF24",
                        fontSize: "1.9rem",
                        textDecoration: "none"
                    }}
                >

                    <FaHotel
                        size={38}
                        style={{
                            marginRight: "12px",
                            color: "#FBBF24"
                        }}
                    />

                    <span>Grand Vista Hotel</span>

                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="nav"
                >

                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/services">
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/contact">
                                Contact
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/register">
                                Register
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="loginDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                  Sign In
              </a>
              <ul className="dropdown-menu dropdown-menu-end login-menu">
                <li>
                  <Link
                      className="dropdown-item login-item"
                      to="/customer-login"
                  >
                    <FaUser />
                    <span>Customer Login</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item login-item"
                    to="/employee-login"
                  >
                    <FaUser />
                    <span>Employee Login</span>
                  </Link>
                </li> 
                <li>
                  <Link
                    className="dropdown-item login-item"
                    to="/admin-login"
                  >
                    <FaUser />
                    <span>Admin Login</span>
                  </Link>
                  </li>
               </ul>
             </li>

                    </ul>

                </div>

            </div>

        </nav>

    );
}

export default Navbar;