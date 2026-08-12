import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
    FaBed,
    FaUtensils,
    FaConciergeBell,
    FaBroom,
    FaUsers,
    FaHeadset,
    FaCheckCircle
} from "react-icons/fa";

function Services() {

    const services = [

        {
            title: "Room Booking",
            icon: <FaBed size={45} color="#FBBF24" />,
            description:
                "Book luxury rooms with modern interiors and premium amenities for a comfortable stay."
        },

        {
            title: "Restaurant",
            icon: <FaUtensils size={45} color="#FBBF24" />,
            description:
                "Enjoy delicious multi-cuisine dishes prepared by our professional chefs."
        },

        {
            title: "Room Service",
            icon: <FaConciergeBell size={45} color="#FBBF24" />,
            description:
                "Fast and reliable 24/7 room service delivered directly to your room."
        },

        {
            title: "Housekeeping",
            icon: <FaBroom size={45} color="#FBBF24" />,
            description:
                "Daily professional cleaning to ensure hygiene and maximum comfort."
        },

        {
            title: "Conference Hall",
            icon: <FaUsers size={45} color="#FBBF24" />,
            description:
                "Modern conference halls equipped for meetings, seminars and events."
        },

        {
            title: "24/7 Support",
            icon: <FaHeadset size={45} color="#FBBF24" />,
            description:
                "Our hospitality team is available around the clock to assist every guest."
        }

    ];

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

                        Our Services

                    </h1>

                    <p className="lead">

                        Luxury Hospitality • Exceptional Comfort • Premium Experience

                    </p>

                </div>

            </section>

            {/* Services */}

            <section className="container py-5">

                <div className="text-center mb-5">

                    <span
                        className="badge px-3 py-2 mb-3"
                        style={{
                            background: "#FBBF24",
                            color: "#0F172A"
                        }}
                    >
                        PREMIUM SERVICES
                    </span>

                    <h2 className="fw-bold">

                        Everything You Need For A Perfect Stay

                    </h2>

                    <p className="text-muted fs-5">

                        Experience world-class hospitality with our premium services.

                    </p>

                </div>

                <div className="row g-4">

                    {services.map((service, index) => (

                        <div
                            className="col-lg-4 col-md-6"
                            key={index}
                        >

                            <div
                                className="glass-card p-4 text-center h-100"
                            >

                                <div className="mb-4">

                                    {service.icon}

                                </div>

                                <h4 className="text-warning mb-3">

                                    {service.title}

                                </h4>

                                <p className="text-muted">

                                    {service.description}

                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            {/* Why Choose */}

            <section
                className="py-5"
                style={{
                    background: "#F8FAFC"
                }}
            >

                <div className="container">

                    <div className="text-center mb-5">

                        <h2 className="fw-bold text-warning">

                            Why Choose Our Services?

                        </h2>

                    </div>

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="mb-4">

                                <FaCheckCircle
                                    color="#FBBF24"
                                    className="me-2"
                                />

                                Luxury Rooms with Premium Comfort

                            </div>

                            <div className="mb-4">

                                <FaCheckCircle
                                    color="#FBBF24"
                                    className="me-2"
                                />

                                Professional Hospitality Staff

                            </div>

                            <div className="mb-4">

                                <FaCheckCircle
                                    color="#FBBF24"
                                    className="me-2"
                                />

                                Fast Room & Restaurant Service

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="mb-4">

                                <FaCheckCircle
                                    color="#FBBF24"
                                    className="me-2"
                                />

                                Modern Conference Facilities

                            </div>

                            <div className="mb-4">

                                <FaCheckCircle
                                    color="#FBBF24"
                                    className="me-2"
                                />

                                24×7 Customer Support

                            </div>

                            <div className="mb-4">

                                <FaCheckCircle
                                    color="#FBBF24"
                                    className="me-2"
                                />

                                Safe, Clean & Hygienic Environment

                            </div>

                        </div>

                    </div>

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

                        Experience Luxury Like Never Before

                    </h2>

                    <p className="lead mb-4">

                        Stay with us and enjoy world-class hospitality and unforgettable memories.

                    </p>

                    <button
                        className="btn btn-warning btn-lg px-5 fw-bold"
                    >

                        Explore Our Rooms

                    </button>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Services;