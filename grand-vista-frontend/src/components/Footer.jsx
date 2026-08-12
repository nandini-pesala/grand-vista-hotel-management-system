import {
    FaHotel,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer
            className="text-white pt-5 pb-3"
            style={{
                background: "#0F172A"
            }}
        >

            <div className="container">

                <div className="row gy-5">

                    {/* Hotel Info */}

                    <div className="col-lg-4">

                        <div className="d-flex align-items-center mb-3">

                            <FaHotel
                                size={34}
                                color="#FBBF24"
                            />

                            <h3
                                className="ms-3 fw-bold"
                                style={{
                                    color: "#FBBF24"
                                }}
                            >
                                Grand Vista
                            </h3>

                        </div>

                        <p
                            className="text-light"
                            style={{
                                lineHeight: "30px"
                            }}
                        >

                            Experience luxury, elegance, and world-class
                            hospitality at Grand Vista Hotel. We are committed
                            to making every stay comfortable and unforgettable.

                        </p>

                        <div className="d-flex mt-4">

                            <div className="social-icon">
                                <FaFacebookF />
                            </div>

                            <div className="social-icon">
                                <FaInstagram />
                            </div>

                            <div className="social-icon">
                                <FaTwitter />
                            </div>

                            <div className="social-icon">
                                <FaLinkedinIn />
                            </div>

                        </div>

                    </div>

                    {/* Quick Links */}

                    <div className="col-lg-4">

                        <h4
                            className="mb-4"
                            style={{
                                color: "#FBBF24"
                            }}
                        >
                            Quick Links
                        </h4>

                        <ul className="footer-links">

                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to="/services">
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link to="/register">
                                    Register
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div className="col-lg-4">

                        <h4
                            className="mb-4"
                            style={{
                                color: "#FBBF24"
                            }}
                        >
                            Contact Us
                        </h4>

                        <p>

                            <FaMapMarkerAlt
                                color="#FBBF24"
                                className="me-2"
                            />

                            Nellore, Andhra Pradesh

                        </p>

                        <p>

                            <FaPhoneAlt
                                color="#FBBF24"
                                className="me-2"
                            />

                            +91 9876543210

                        </p>

                        <p>

                            <FaEnvelope
                                color="#FBBF24"
                                className="me-2"
                            />

                            grandvista@gmail.com

                        </p>

                        <hr
                            style={{
                                borderColor: "#334155"
                            }}
                        />

                        <h6
                            style={{
                                color: "#FBBF24"
                            }}
                        >
                            Reception

                        </h6>

                        <small>
                            Open 24 Hours • 7 Days a Week
                        </small>

                    </div>

                </div>

                <hr
                    className="my-4"
                    style={{
                        borderColor: "#334155"
                    }}
                />

                <div
                    className="d-flex justify-content-between align-items-center flex-wrap"
                >

                    <small>

                        © 2026 Grand Vista Hotel Management System.
                        All Rights Reserved.

                    </small>

                    <small>

                        Designed with ❤ for Luxury Hospitality

                    </small>

                </div>

            </div>

        </footer>

    );

}

export default Footer;