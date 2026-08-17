import React from "react";
import "./Facilities.css";

function Facilities() {
  return (
    <div className="facilities-page">

      {/* HERO */}
      <section className="facilities-banner">
        <div>
          <p>OUR FACILITIES</p>
          <h1>Everything for a Better Learning Experience</h1>
          <span>
            Modern facilities designed to support learning, creativity and growth.
          </span>
        </div>
      </section>

      {/* INTRO */}
      <section className="facilities-intro">

        <div>
          <p className="facility-small-title">OUR CAMPUS</p>

          <h2>
            A Campus Designed
            <span> for Every Student</span>
          </h2>

          <p>
            New Era Public School provides a comfortable, safe and
            stimulating environment where students can learn, explore
            and develop their abilities.
          </p>

          <p>
            From modern classrooms to sports and learning spaces,
            our facilities support both academic and personal growth.
          </p>
        </div>

        <div className="facility-highlight">
          <div className="facility-highlight-icon">🏫</div>
          <h3>Modern Campus</h3>
          <p>
            A safe and student-friendly environment built for
            learning and development.
          </p>
        </div>

      </section>

      {/* FACILITY CARDS */}
      <section className="facility-section">

        <div className="facility-heading">
          <p>EXPLORE OUR CAMPUS</p>
          <h2>Our Facilities</h2>
          <div></div>
        </div>

        <div className="facility-cards">

          <div className="facility-card">
            <div className="facility-icon">📚</div>
            <h3>Library</h3>
            <p>
              A well-equipped library encouraging reading,
              research and independent learning.
            </p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">💻</div>
            <h3>Computer Lab</h3>
            <p>
              Modern computer facilities helping students
              develop digital and technical skills.
            </p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">🧪</div>
            <h3>Science Labs</h3>
            <p>
              Practical learning spaces where students can
              explore scientific concepts.
            </p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">⚽</div>
            <h3>Sports Facilities</h3>
            <p>
              Spaces that encourage physical fitness,
              teamwork and sportsmanship.
            </p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">🎨</div>
            <h3>Arts & Activities</h3>
            <p>
              Opportunities for students to express creativity
              through art, culture and activities.
            </p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">🛡️</div>
            <h3>Safe Campus</h3>
            <p>
              A secure and supportive environment where
              students can learn with confidence.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Facilities;