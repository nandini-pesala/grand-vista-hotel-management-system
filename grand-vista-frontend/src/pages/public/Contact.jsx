import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock
} from "react-icons/fa";

function Contact() {

    return (

        <>

            <Navbar />

            {/* Hero */}

            <section
                className="text-white d-flex align-items-center"
                style={{
                    height: "55vh",
                    background:
                        "linear-gradient(rgba(15,23,42,.75),rgba(15,23,42,.75)),url('https://images.unsplash.com/photo-1566073771259-6a8506099945') center/cover"
                }}
            >

                <div className="container text-center">

                    <h1 className="display-3 fw-bold">

                        Contact Us

                    </h1>

                    <p className="lead">

                        We'd love to hear from you

                    </p>

                </div>

            </section>

            {/* Contact Section */}

            <section className="container py-5">

                <div className="row g-5">

                    {/* Contact Form */}

                    <div className="col-lg-7">

                        <div className="glass-card p-5">

                            <span
                                className="badge px-3 py-2 mb-3"
                                style={{
                                    background: "#FBBF24",
                                    color: "#0F172A"
                                }}
                            >
                                CONTACT FORM
                            </span>

                            <h2 className="fw-bold mb-4">

                                Send Us a Message

                            </h2>

                            <form>

                                <div className="row">

                                    <div className="col-md-6 mb-4">

                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Your Name"
                                        />

                                    </div>

                                    <div className="col-md-6 mb-4">

                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            placeholder="Email Address"
                                        />

                                    </div>

                                </div>

                                <div className="mb-4">

                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Subject"
                                    />

                                </div>

                                <div className="mb-4">

                                    <textarea
                                        rows="6"
                                        className="form-control"
                                        placeholder="Write your message..."
                                    ></textarea>

                                </div>

                                <button
                                    className="btn btn-warning btn-lg px-5 fw-bold"
                                >

                                    Send Message

                                </button>

                            </form>

                        </div>

                    </div>

                    {/* Contact Details */}

                    <div className="col-lg-5">

                        <div className="glass-card p-5 mb-4">

                            <h3
                                className="text-warning mb-4"
                            >

                                Hotel Information

                            </h3>

                            <div className="d-flex mb-4">

                                <FaMapMarkerAlt
                                    size={24}
                                    color="#FBBF24"
                                />

                                <div className="ms-3">

                                    <h6>Address</h6>

                                    <p className="text-muted">

                                        Nellore,
                                        Andhra Pradesh,
                                        India

                                    </p>

                                </div>

                            </div>

                            <div className="d-flex mb-4">

                                <FaPhoneAlt
                                    size={22}
                                    color="#FBBF24"
                                />

                                <div className="ms-3">

                                    <h6>Phone</h6>

                                    <p className="text-muted">

                                        +91 9876543210

                                    </p>

                                </div>

                            </div>

                            <div className="d-flex mb-4">

                                <FaEnvelope
                                    size={22}
                                    color="#FBBF24"
                                />

                                <div className="ms-3">

                                    <h6>Email</h6>

                                    <p className="text-muted">

                                        grandvista@gmail.com

                                    </p>

                                </div>

                            </div>

                            <div className="d-flex">

                                <FaClock
                                    size={22}
                                    color="#FBBF24"
                                />

                                <div className="ms-3">

                                    <h6>Reception</h6>

                                    <p className="text-muted">

                                        Open 24 Hours

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Google Map */}

            <section className="container pb-5">

                <div className="glass-card overflow-hidden">

                    <iframe
                        title="Hotel Location"
                        src="https://maps.google.com/maps?q=Nellore%20Andhra%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="420"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                </div>

            </section>

            {/* CTA */}

            <section
                className="py-5 text-center text-white"
                style={{
                    background:
                        "linear-gradient(135deg,#0F172A,#1E3A8A)"
                }}
            >

                <div className="container">

                    <h2 className="fw-bold mb-3">

                        Need Help Planning Your Stay?

                    </h2>

                    <p className="lead mb-4">

                        Our hospitality team is available 24×7 to assist you.

                    </p>

                    <button
                        className="btn btn-warning btn-lg px-5 fw-bold"
                    >

                        Contact Reception

                    </button>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Contact;