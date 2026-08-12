import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
    FaHotel,
    FaBed,
    FaUtensils,
    FaWifi,
    FaParking,
    FaHeadset,
    FaUsers,
    FaAward
} from "react-icons/fa";

function About() {

    const facilities = [
        {
            icon: <FaBed size={35} color="#FBBF24" />,
            title: "Luxury Rooms & Suites"
        },
        {
            icon: <FaUtensils size={35} color="#FBBF24" />,
            title: "Multi-Cuisine Restaurant"
        },
        {
            icon: <FaUsers size={35} color="#FBBF24" />,
            title: "Conference Hall"
        },
        {
            icon: <FaHotel size={35} color="#FBBF24" />,
            title: "Room Service"
        },
        {
            icon: <FaHeadset size={35} color="#FBBF24" />,
            title: "24/7 Customer Support"
        },
        {
            icon: <FaWifi size={35} color="#FBBF24" />,
            title: "Free High-Speed WiFi"
        },
        {
            icon: <FaParking size={35} color="#FBBF24" />,
            title: "Parking Facility"
        },
        {
            icon: <FaAward size={35} color="#FBBF24" />,
            title: "Premium Hospitality"
        }
    ];

    return (

        <>

            <Navbar />

            {/* Hero Section */}

            <section
                className="text-white d-flex align-items-center"
                style={{
                    height: "60vh",
                    background:
                        "linear-gradient(rgba(15,23,42,.75),rgba(15,23,42,.75)),url('https://images.unsplash.com/photo-1566073771259-6a8506099945') center/cover"
                }}
            >

                <div className="container text-center">

                    <h1
                        className="display-3 fw-bold"
                    >
                        About Grand Vista Hotel
                    </h1>

                    <p
                        className="lead mt-3"
                    >
                        Luxury • Comfort • Hospitality
                    </p>

                </div>

            </section>

            {/* About */}

            <section className="container py-5">

                <div className="row align-items-center g-5">

                    <div className="col-lg-6">

                        <img
                            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
                            className="img-fluid shadow-lg rounded-4"
                            alt="Hotel"
                        />

                    </div>

                    <div className="col-lg-6">

                        <span
                            className="badge px-3 py-2 mb-3"
                            style={{
                                background: "#FBBF24",
                                color: "#0F172A"
                            }}
                        >
                            WHO WE ARE
                        </span>

                        <h2
                            className="fw-bold mb-4"
                        >
                            Welcome to Grand Vista Hotel
                        </h2>

                        <p
                            className="text-muted fs-5"
                        >

                            Grand Vista Hotel is a luxury hospitality destination
                            providing world-class accommodation, fine dining,
                            premium room services and exceptional customer care.

                        </p>

                        <p
                            className="text-muted"
                        >

                            Every guest is welcomed with unmatched comfort,
                            elegant interiors, modern facilities and professional
                            hospitality to create unforgettable memories.

                        </p>

                    </div>

                </div>

            </section>

            {/* Statistics */}

            <section
                className="py-5"
                style={{
                    background: "#F8FAFC"
                }}
            >

                <div className="container">

                    <div className="row text-center">

                        <div className="col-md-3">

                            <h1 className="text-warning fw-bold">
                                250+
                            </h1>

                            <p>Luxury Rooms</p>

                        </div>

                        <div className="col-md-3">

                            <h1 className="text-warning fw-bold">
                                20K+
                            </h1>

                            <p>Happy Guests</p>

                        </div>

                        <div className="col-md-3">

                            <h1 className="text-warning fw-bold">
                                15+
                            </h1>

                            <p>Years Experience</p>

                        </div>

                        <div className="col-md-3">

                            <h1 className="text-warning fw-bold">
                                ★★★★★
                            </h1>

                            <p>Guest Rating</p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Mission & Vision */}

            <section className="container py-5">

                <div className="row g-4">

                    <div className="col-lg-6">

                        <div className="glass-card p-5 h-100">

                            <h3 className="text-warning mb-4">

                                Our Mission

                            </h3>

                            <p className="fs-5">

                                To provide memorable hospitality experiences
                                through exceptional service, comfort and luxury.

                            </p>

                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="glass-card p-5 h-100">

                            <h3 className="text-warning mb-4">

                                Our Vision

                            </h3>

                            <p className="fs-5">

                                To become the most trusted and preferred luxury
                                hotel brand delivering excellence in hospitality.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Facilities */}

            <section
                className="container py-5"
            >

                <div className="text-center mb-5">

                    <h2
                        className="fw-bold text-warning"
                    >
                        Our Facilities
                    </h2>

                    <p className="text-muted">

                        Everything you need for a luxurious stay.

                    </p>

                </div>

                <div className="row g-4">

                    {facilities.map((facility, index) => (

                        <div
                            className="col-lg-3 col-md-6"
                            key={index}
                        >

                            <div
                                className="glass-card text-center p-4 h-100"
                            >

                                <div className="mb-3">

                                    {facility.icon}

                                </div>

                                <h5>

                                    {facility.title}

                                </h5>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            <Footer />

        </>

    );

}

export default About;