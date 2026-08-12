import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
    FaBed,
    FaUtensils,
    FaConciergeBell,
    FaBroom,
    FaGlassCheers,
    FaHeadset
} from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

<section
    className="d-flex align-items-center"
    style={{
        minHeight: "80vh",
        background:
            "linear-gradient(rgba(10,20,40,.65), rgba(10,20,40,.65)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945') center/cover no-repeat",
        position: "relative"
    }}
>

    <div className="container">

        <div className="row align-items-center">

            <div className="col-lg-7 text-white">

                <span
                    className="badge px-3 py-2 mb-3"
                    style={{
                        background: "#FBBF24",
                        color: "#0F172A",
                        fontSize: "14px"
                    }}
                >
                    ★ Luxury Hotel Since 2010
                </span>

                <h1
                    className="fw-bold mb-4"
                    style={{
                        fontSize: "65px",
                        lineHeight: "75px"
                    }}
                >
                    Grand Vista Hotel
                </h1>

                <p
                    className="lead mb-4"
                    style={{
                        maxWidth: "600px"
                    }}
                >
                    Luxury Stay Experience
                </p>

                <div className="d-flex gap-3">

                    <Link
                        to="/register"
                        className="btn btn-warning btn-lg fw-bold px-4"
                    >
                        Book Now
                    </Link>

                    <Link
                        to="/about"
                        className="btn btn-outline-light btn-lg px-4"
                    >
                        Explore
                    </Link>

                </div>

            </div>

        </div>

    </div>

</section>
                    <div
    className="container"
    style={{
        marginTop: "-70px",
        position: "relative",
        zIndex: 5
    }}
>

    <div className="row g-4">

        <div className="col-lg-3 col-md-6">

            <div
                className="card border-0 shadow-lg text-center p-4"
                style={{ borderRadius: "20px" }}
            >

                <h2
                    className="fw-bold"
                    style={{ color: "#FBBF24" }}
                >
                    250+
                </h2>

                <p className="mb-0">
                    Luxury Rooms
                </p>

            </div>

        </div>

        <div className="col-lg-3 col-md-6">

            <div
                className="card border-0 shadow-lg text-center p-4"
                style={{ borderRadius: "20px" }}
            >

                <h2
                    className="fw-bold"
                    style={{ color: "#FBBF24" }}
                >
                    20K+
                </h2>

                <p className="mb-0">
                    Happy Guests
                </p>

            </div>

        </div>

        <div className="col-lg-3 col-md-6">

            <div
                className="card border-0 shadow-lg text-center p-4"
                style={{ borderRadius: "20px" }}
            >

                <h2
                    className="fw-bold"
                    style={{ color: "#FBBF24" }}
                >
                    15+
                </h2>

                <p className="mb-0">
                    Years Experience
                </p>

            </div>

        </div>

        <div className="col-lg-3 col-md-6">

            <div
                className="card border-0 shadow-lg text-center p-4"
                style={{ borderRadius: "20px" }}
            >

                <h2
                    className="fw-bold"
                    style={{ color: "#FBBF24" }}
                >
                    24/7
                </h2>

                <p className="mb-0">
                    Customer Support
                </p>

            </div>

        </div>

    </div>

</div>
    {/* About Section */}

<section
    className="container py-5"
>

    <div
        className="row align-items-center g-5"
    >

        {/* Left Image */}

        <div className="col-lg-6">

            <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900"
                className="img-fluid shadow-lg"
                alt="Hotel"
                style={{
                    borderRadius: "25px",
                    height: "500px",
                    width: "100%",
                    objectFit: "cover"
                }}
            />

        </div>

        {/* Right Content */}

        <div className="col-lg-6">

            <span
                className="badge px-3 py-2 mb-3"
                style={{
                    background: "#FBBF24",
                    color: "#0F172A"
                }}
            >
                ABOUT US
            </span>

            <h2
                className="fw-bold mb-4"
                style={{
                    color: "#0F172A",
                    fontSize: "42px"
                }}
            >
                Welcome to Grand Vista Hotel
            </h2>

            <p
                className="text-secondary fs-5"
            >
                Grand Vista Hotel offers luxurious accommodation,
                premium dining, conference facilities,
                housekeeping, room service and world-class hospitality.
            </p>

            <div className="row mt-4">

                <div className="col-6 mb-4">

                    <h3
                        className="fw-bold text-warning"
                    >
                        250+
                    </h3>

                    <p className="text-muted">
                        Luxury Rooms
                    </p>

                </div>

                <div className="col-6 mb-4">

                    <h3
                        className="fw-bold text-warning"
                    >
                        20K+
                    </h3>

                    <p className="text-muted">
                        Happy Guests
                    </p>

                </div>

                <div className="col-6">

                    <h3
                        className="fw-bold text-warning"
                    >
                        15+
                    </h3>

                    <p className="text-muted">
                        Years of Excellence
                    </p>

                </div>

                <div className="col-6">

                    <h3
                        className="fw-bold text-warning"
                    >
                        ★★★★★
                    </h3>

                    <p className="text-muted">
                        Guest Rating
                    </p>

                </div>

            </div>

            <Link
                to="/about"
                className="btn btn-warning btn-lg mt-3 px-4"
            >
                Discover More
            </Link>

        </div>

    </div>

</section>
                {/* Featured Rooms */}

<section
    className="container py-5"
>

    <div className="text-center mb-5">

        <span
            className="badge px-3 py-2 mb-3"
            style={{
                background: "#FBBF24",
                color: "#0F172A"
            }}
        >
            OUR ROOMS
        </span>

        <h2
            className="fw-bold"
            style={{
                color: "#0F172A",
                fontSize: "42px"
            }}
        >
            Featured Rooms
        </h2>

        <p className="text-muted">
            Choose from our luxurious collection of rooms designed for comfort and elegance.
        </p>

    </div>

    <div className="row g-4">

        {/* Deluxe Room */}

        <div className="col-lg-4">

            <div
                className="card border-0 shadow-lg h-100"
                style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    transition: ".4s"
                }}
            >

                <img
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900"
                    alt="Deluxe Room"
                    style={{
                        height: "250px",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body">

                    <span className="badge bg-warning text-dark mb-3">
                        Popular Choice
                    </span>

                    <h4 className="fw-bold">
                        Deluxe Room
                    </h4>

                    <p className="text-muted">
                        Comfortable room with modern amenities.
                    </p>

                    <div className="d-flex justify-content-between align-items-center">

                        <h4 className="text-warning fw-bold">
                            ₹3,500
                        </h4>

                        <Link
                            to="/register"
                            className="btn btn-warning"
                        >
                            Book Now
                        </Link>

                    </div>

                </div>

            </div>

        </div>

        {/* Suite Room */}

        <div className="col-lg-4">

            <div
                className="card border-0 shadow-lg h-100"
                style={{
                    borderRadius: "20px",
                    overflow: "hidden"
                }}
            >

                <img
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900"
                    alt="Suite Room"
                    style={{
                        height: "250px",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body">

                    <span className="badge bg-success mb-3">
                        Luxury
                    </span>

                    <h4 className="fw-bold">
                        Suite Room
                    </h4>

                    <p className="text-muted">
                        Spacious suite with luxury facilities.
                    </p>

                    <div className="d-flex justify-content-between align-items-center">

                        <h4 className="text-warning fw-bold">
                            ₹6,500
                        </h4>

                        <Link
                            to="/register"
                            className="btn btn-warning"
                        >
                            Book Now
                        </Link>

                    </div>

                </div>

            </div>

        </div>

        {/* Presidential Suite */}

        <div className="col-lg-4">

            <div
                className="card border-0 shadow-lg h-100"
                style={{
                    borderRadius: "20px",
                    overflow: "hidden"
                }}
            >

                <img
                    src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900"
                    alt="Presidential Suite"
                    style={{
                        height: "250px",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body">

                    <span className="badge bg-danger mb-3">
                        Premium
                    </span>

                    <h4 className="fw-bold">
                        Presidential Suite
                    </h4>

                    <p className="text-muted">
                        Premium experience with exclusive services.
                    </p>

                    <div className="d-flex justify-content-between align-items-center">

                        <h4 className="text-warning fw-bold">
                            ₹12,000
                        </h4>

                        <Link
                            to="/register"
                            className="btn btn-warning"
                        >
                            Book Now
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>
                    {/* Services */}

<section
    className="py-5"
    style={{
        background: "#f8fafc"
    }}
>

    <div className="container">

        <div className="text-center mb-5">

            <span
                className="badge px-3 py-2 mb-3"
                style={{
                    background: "#FBBF24",
                    color: "#0F172A"
                }}
            >
                OUR SERVICES
            </span>

            <h2
                className="fw-bold"
                style={{
                    fontSize: "42px",
                    color: "#0F172A"
                }}
            >
                Luxury Services
            </h2>

            <p className="text-muted">
                Everything you need for an unforgettable stay.
            </p>

        </div>

        <div className="row g-4">

            {/* Room Booking */}

            <div className="col-lg-4 col-md-6">

                <div className="service-card">

                    <div className="service-icon">
                        <FaBed size={40}/>
                    </div>

                    <h4>Room Booking</h4>

                    <p>
                        Book luxury rooms instantly with premium comfort.
                    </p>

                </div>

            </div>

            {/* Restaurant */}

            <div className="col-lg-4 col-md-6">

                <div className="service-card">

                    <div className="service-icon">
                        <FaUtensils size={40}/>
                    </div>

                    <h4>Restaurant</h4>

                    <p>
                        Fine dining with international cuisine.
                    </p>

                </div>

            </div>

            {/* Room Service */}

            <div className="col-lg-4 col-md-6">

                <div className="service-card">

                    <div className="service-icon">
                        <FaConciergeBell size={40}/>
                    </div>

                    <h4>Room Service</h4>

                    <p>
                        24/7 room service delivered quickly.
                    </p>

                </div>

            </div>

            {/* Housekeeping */}

            <div className="col-lg-4 col-md-6">

                <div className="service-card">

                    <div className="service-icon">
                        <FaBroom size={40}/>
                    </div>

                    <h4>Housekeeping</h4>

                    <p>
                        Professional cleaning every day.
                    </p>

                </div>

            </div>

            {/* Conference Hall */}

            <div className="col-lg-4 col-md-6">

                <div className="service-card">

                    <div className="service-icon">
                        <FaGlassCheers size={40}/>
                    </div>

                    <h4>Conference Hall</h4>

                    <p>
                        Modern halls for meetings and events.
                    </p>

                </div>

            </div>

            {/* Support */}

            <div className="col-lg-4 col-md-6">

                <div className="service-card">

                    <div className="service-icon">
                        <FaHeadset size={40}/>
                    </div>

                    <h4>24/7 Support</h4>

                    <p>
                        Always available to assist our guests.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>
                {/* Why Choose Us */}

<section className="container py-5">

    <div className="row align-items-center g-5">

        {/* Left Side */}

        <div className="col-lg-6">

            <span
                className="badge px-3 py-2 mb-3"
                style={{
                    background: "#FBBF24",
                    color: "#0F172A"
                }}
            >
                WHY CHOOSE US
            </span>

            <h2
                className="fw-bold mb-4"
                style={{
                    color: "#0F172A",
                    fontSize: "42px"
                }}
            >
                Experience Luxury Like Never Before
            </h2>

            <p className="text-muted fs-5">

                Grand Vista Hotel offers luxurious accommodation,
                premium dining, conference facilities,
                housekeeping, room service and world-class hospitality.

            </p>

            <div className="row mt-4">

                <div className="col-md-6 mb-4">

                    <div className="feature-item">

                        ✔ Luxury Rooms

                    </div>

                </div>

                <div className="col-md-6 mb-4">

                    <div className="feature-item">

                        ✔ Free High-Speed WiFi

                    </div>

                </div>

                <div className="col-md-6 mb-4">

                    <div className="feature-item">

                        ✔ Swimming Pool

                    </div>

                </div>

                <div className="col-md-6 mb-4">

                    <div className="feature-item">

                        ✔ Restaurant & Cafe

                    </div>

                </div>

                <div className="col-md-6 mb-4">

                    <div className="feature-item">

                        ✔ Conference Hall

                    </div>

                </div>

                <div className="col-md-6 mb-4">

                    <div className="feature-item">

                        ✔ 24×7 Room Service

                    </div>

                </div>

            </div>

        </div>

        {/* Right Side */}

        <div className="col-lg-6">

            <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200"
                className="img-fluid shadow-lg"
                alt="Luxury Hotel"
                style={{
                    borderRadius: "25px",
                    height: "550px",
                    width: "100%",
                    objectFit: "cover"
                }}
            />

        </div>

    </div>

</section>
                {/* Luxury Gallery */}

<section
    className="py-5"
    style={{
        background: "#F8FAFC"
    }}
>

    <div className="container">

        <div className="text-center mb-5">

            <span
                className="badge px-3 py-2 mb-3"
                style={{
                    background: "#FBBF24",
                    color: "#0F172A"
                }}
            >
                HOTEL GALLERY
            </span>

            <h2
                className="fw-bold"
                style={{
                    color: "#0F172A",
                    fontSize: "42px"
                }}
            >
                Explore Grand Vista
            </h2>

            <p className="text-muted fs-5">
                Discover the elegance and luxury of our hotel through our gallery.
            </p>

        </div>

        <div className="row g-4">

            {/* Image 1 */}

            <div className="col-lg-4 col-md-6">

                <div className="gallery-card">

                    <img
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
                        className="img-fluid"
                        alt="Hotel Exterior"
                    />

                    <div className="gallery-overlay">
                        Hotel Exterior
                    </div>

                </div>

            </div>

            {/* Image 2 */}

            <div className="col-lg-4 col-md-6">

                <div className="gallery-card">

                    <img
                        src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900"
                        className="img-fluid"
                        alt="Luxury Room"
                    />

                    <div className="gallery-overlay">
                        Luxury Room
                    </div>

                </div>

            </div>

            {/* Image 3 */}

            <div className="col-lg-4 col-md-6">

                <div className="gallery-card">

                    <img
                        src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900"
                        className="img-fluid"
                        alt="Restaurant"
                    />

                    <div className="gallery-overlay">
                        Fine Dining
                    </div>

                </div>

            </div>

            {/* Image 4 */}

            <div className="col-lg-4 col-md-6">

                <div className="gallery-card">

                    <img
                        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900"
                        className="img-fluid"
                        alt="Swimming Pool"
                    />

                    <div className="gallery-overlay">
                        Swimming Pool
                    </div>

                </div>

            </div>

            {/* Image 5 */}

            <div className="col-lg-4 col-md-6">

                <div className="gallery-card">

                    <img
                        src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=900"
                        className="img-fluid"
                        alt="Lobby"
                    />

                    <div className="gallery-overlay">
                        Hotel Lobby
                    </div>

                </div>

            </div>

            {/* Image 6 */}

            <div className="col-lg-4 col-md-6">

                <div className="gallery-card">

                    <img
                        src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=900"
                        className="img-fluid"
                        alt="Suite"
                    />

                    <div className="gallery-overlay">
                        Presidential Suite
                    </div>

                </div>

            </div>

        </div>

    </div>

</section>
                {/* Testimonials */}

<section className="container py-5">

    <div className="text-center mb-5">

        <span
            className="badge px-3 py-2 mb-3"
            style={{
                background: "#FBBF24",
                color: "#0F172A"
            }}
        >
            TESTIMONIALS
        </span>

        <h2
            className="fw-bold"
            style={{
                fontSize: "42px",
                color: "#0F172A"
            }}
        >
            What Our Guests Say
        </h2>

        <p className="text-muted fs-5">
            Hear from guests who have experienced the luxury and hospitality of Grand Vista Hotel.
        </p>

    </div>

    <div className="row g-4">

        {/* Review 1 */}

        <div className="col-lg-4">

            <div className="testimonial-card">

                <div className="d-flex align-items-center mb-4">

                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        className="testimonial-img"
                        alt=""
                    />

                    <div className="ms-3">

                        <h5 className="mb-1">
                            Rahul Kumar
                        </h5>

                        <small className="text-muted">
                            Business Traveler
                        </small>

                    </div>

                </div>

                <div className="text-warning mb-3">

                    ★★★★★

                </div>

                <p>

                    Excellent hospitality and luxurious stay experience.
                    Rooms were spotless and the staff was extremely helpful.

                </p>

            </div>

        </div>

        {/* Review 2 */}

        <div className="col-lg-4">

            <div className="testimonial-card">

                <div className="d-flex align-items-center mb-4">

                    <img
                        src="https://randomuser.me/api/portraits/women/65.jpg"
                        className="testimonial-img"
                        alt=""
                    />

                    <div className="ms-3">

                        <h5 className="mb-1">
                            Priya Sharma
                        </h5>

                        <small className="text-muted">
                            Family Vacation
                        </small>

                    </div>

                </div>

                <div className="text-warning mb-3">

                    ★★★★★

                </div>

                <p>

                    Best hotel service with amazing food quality.
                    Highly recommended for family vacations.

                </p>

            </div>

        </div>

        {/* Review 3 */}

        <div className="col-lg-4">

            <div className="testimonial-card">

                <div className="d-flex align-items-center mb-4">

                    <img
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        className="testimonial-img"
                        alt=""
                    />

                    <div className="ms-3">

                        <h5 className="mb-1">
                            Arjun Reddy
                        </h5>

                        <small className="text-muted">
                            Corporate Guest
                        </small>

                    </div>

                </div>

                <div className="text-warning mb-3">

                    ★★★★★

                </div>

                <p>

                    Conference hall was excellent and the service exceeded our expectations.
                    Definitely visiting again.

                </p>

            </div>

        </div>

    </div>

</section>

      <Footer />
    </>
  );
}

export default Home;