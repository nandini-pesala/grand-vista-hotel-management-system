import { useState } from "react";
import Layout from "../../layouts/Layout";
import { addFeedback } from "../../services/feedbackService";

function Feedback() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const [feedback, setFeedback] = useState({
        customerId: user?.customerId || "",
        rating: 0,
        comments: ""
    });

    const handleChange = (e) => {

        setFeedback({
            ...feedback,
            [e.target.name]: e.target.value
        });

    };

    const handleRating = (value) => {

        setFeedback({
            ...feedback,
            rating: value
        });

    };

    const submitFeedback = async (e) => {

        e.preventDefault();

        try {

            await addFeedback(feedback);

            alert("Thank you for your valuable feedback!");

            setFeedback({
                customerId: user?.customerId || "",
                rating: 0,
                comments: ""
            });

        } catch (error) {

            console.error(error);

            alert("Failed to submit feedback.");

        }

    };

    return (

        <Layout>

            {/* Header */}

            <div
                className="card border-0 shadow-lg mb-4"
                style={{
                    background:
                        "linear-gradient(135deg,#0F172A,#1E3A8A)",
                    color: "white",
                    borderRadius: "18px"
                }}
            >

                <div className="card-body p-4">

                    <h2 className="fw-bold">

                        ⭐ Customer Feedback

                    </h2>

                    <p className="mb-0">

                        Your experience helps us improve our hospitality and provide better service.

                    </p>

                </div>

            </div>

            {/* Feedback Form */}

            <div
                className="card border-0 shadow-lg"
                style={{
                    borderRadius: "18px"
                }}
            >

                <div className="card-body p-5">

                    <h4 className="fw-bold mb-4 text-primary">

                        Share Your Experience

                    </h4>

                    <form onSubmit={submitFeedback}>

                        {/* Rating */}

                        <div className="mb-4">

                            <label className="fw-bold mb-3">

                                Rate Your Stay

                            </label>

                            <div>

                                {[1,2,3,4,5].map((star)=>(
                                    <span

                                        key={star}

                                        onClick={() =>
                                            handleRating(star)
                                        }

                                        style={{
                                            fontSize:"35px",
                                            cursor:"pointer",
                                            color:
                                                star <= feedback.rating
                                                    ? "#FFD700"
                                                    : "#D1D5DB",
                                            transition:"0.3s"
                                        }}

                                    >

                                        ★

                                    </span>
                                ))}

                            </div>

                            <small className="text-muted">

                                Click the stars to rate your experience.

                            </small>

                        </div>

                        {/* Comments */}

                        <div className="mb-4">

                            <label className="fw-bold mb-2">

                                Comments

                            </label>

                            <textarea

                                className="form-control"

                                rows="6"

                                name="comments"

                                value={feedback.comments}

                                onChange={handleChange}

                                placeholder="Tell us about your stay, room comfort, food, staff service, cleanliness, or anything you'd like us to improve..."

                                required

                            />

                            <div className="text-end mt-2 text-muted">

                                {feedback.comments.length} Characters

                            </div>

                        </div>

                        {/* Submit */}

                        <div className="text-center">

                            <button

                                type="submit"

                                className="btn btn-warning btn-lg px-5 fw-bold"

                                style={{
                                    borderRadius:"10px"
                                }}

                            >

                                ⭐ Submit Feedback

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </Layout>

    );

}

export default Feedback;