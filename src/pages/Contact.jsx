import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSubmitted(false);

    const formData = new FormData(e.target);

    const enquiryData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://new-era-school.onrender.com/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      setSubmitted(true);
      e.target.reset();
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-banner">
        <div className="contact-banner-content">
          <p>CONTACT US</p>

          <h1>We Would Love to Hear From You</h1>

          <span>
            Have a question? Get in touch with New Era Public School.
          </span>
        </div>
      </section>

      {/* INTRO */}
      <section className="contact-intro">
        <p className="contact-small-title">GET IN TOUCH</p>

        <h2>
          Let's Stay
          <span> Connected</span>
        </h2>

        <p>
          Whether you are a parent, student or visitor, our school team is
          here to help you with your questions and enquiries.
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section className="contact-details">

        <div className="contact-card">
          <div className="contact-icon">📍</div>

          <h3>Visit Us</h3>

          <p>
            Makodiya, Indore,
            <br />
            Madhya Pradesh, India
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">☎</div>

          <h3>Call Us</h3>

          <p>
            626292921
            <br />
            Monday – Saturday
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">✉</div>

          <h3>Email Us</h3>

          <p>
            newerapublicschool@gmail.com
            <br />
            We reply as soon as possible.
          </p>
        </div>

      </section>

      {/* FORM + INFORMATION */}
      <section className="contact-main" id="enquiry-form">

        {/* FORM */}
        <div className="contact-form-box">

          <p className="contact-small-title">SEND AN ENQUIRY</p>

          <h2>How Can We Help?</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows="5"
                name="message"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Send Enquiry →"}
            </button>

            {submitted && (
              <p className="success-message">
                Your enquiry has been submitted successfully.
              </p>
            )}

            {error && (
              <p className="error-message">
                {error}
              </p>
            )}

          </form>

        </div>

        {/* SCHOOL OFFICE */}
        <div className="contact-info-box">

          <div className="contact-info-icon">🏫</div>

          <h3>School Office</h3>

          <p>
            For admissions, academics, transport or general enquiries,
            please contact the school office during working hours.
          </p>

          <div className="office-detail">
            <strong>Office Hours</strong>
            <span>Monday – Saturday</span>
            <span>9:00 AM – 4:00 PM</span>
          </div>

          <div className="office-detail">
            <strong>Address</strong>
            <span>Makodiya, Indore</span>
            <span>Madhya Pradesh, India</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;