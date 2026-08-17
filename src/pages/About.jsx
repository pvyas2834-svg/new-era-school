import React, { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page" ref={sectionRef}>

      {/* PAGE HERO */}
      <section className="page-banner">
        <div>
          <p>ABOUT OUR SCHOOL</p>
          <h1>About New Era Public School</h1>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="about-intro">

        <div className="about-text reveal">

          <p className="small-title">
            WHO WE ARE
          </p>

          <h2>
            Building Strong Foundations for a
            <span> Bright Future</span>
          </h2>

          <p>
            New Era Public School is committed to providing quality
            education in a safe, supportive and inspiring environment.
            Our aim is to develop students academically, socially and
            personally.
          </p>

          <p>
            We believe that education is not limited to textbooks.
            It is about developing curiosity, confidence, discipline,
            creativity and responsible citizenship.
          </p>

          <button className="about-btn">
            Learn More →
          </button>

        </div>


        {/* VISION */}
        <div className="about-box reveal">

          <div className="about-box-icon">
            🎓
          </div>

          <h3>
            Our Vision
          </h3>

          <p>
            To nurture confident, responsible and capable young
            individuals who are prepared to contribute positively
            to society.
          </p>

        </div>

      </section>


      {/* OUR EDUCATIONAL INITIATIVE */}
      <section className="academy-section">

        <div className="academy-content reveal">

          <p className="small-title">
            OUR EDUCATIONAL INITIATIVE
          </p>

          <h2>
            New Era Future IAS Academy
            <span> – Kshipra</span>
          </h2>

          <p>
            New Era Future IAS Academy, Kshipra is an educational
            initiative associated with the New Era group, focused on
            providing quality guidance and a strong foundation for
            competitive examinations.
          </p>

          <p>
            The academy aims to encourage disciplined learning,
            conceptual understanding and continuous academic growth,
            helping students prepare confidently for their future goals.
          </p>

          <a
            href="https://www.google.com/search?q=New+Era+Future+IAS+Academy+Kshipra"
            target="_blank"
            rel="noopener noreferrer"
            className="academy-btn"
          >
            Know More →
          </a>

        </div>


        <div className="academy-card reveal">

          <div className="academy-icon">
            🎓
          </div>

          <h3>
            New Era Future IAS Academy
          </h3>

          <p>
            Kshipra
          </p>

          <div className="academy-line"></div>

          <span>
            Learning • Guidance • Future
          </span>

        </div>

      </section>


      {/* MISSION */}
      <section className="mission-section">

        <div className="mission-card reveal">

          <div className="mission-icon">
            🎯
          </div>

          <h3>
            Our Mission
          </h3>

          <p>
            To provide meaningful learning experiences that encourage
            students to explore, learn and grow with confidence.
          </p>

        </div>


        <div className="mission-card reveal">

          <div className="mission-icon">
            🌱
          </div>

          <h3>
            Our Values
          </h3>

          <p>
            Discipline, respect, honesty, compassion, creativity and
            continuous learning form the foundation of our school culture.
          </p>

        </div>


        <div className="mission-card reveal">

          <div className="mission-icon">
            ⭐
          </div>

          <h3>
            Our Goal
          </h3>

          <p>
            To create an environment where every student gets
            opportunities to discover their strengths and achieve
            their potential.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;