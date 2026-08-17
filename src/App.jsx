import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Admissions from "./pages/Admissions";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";


function Home() {
  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-left">
          <span>📍 Makodiya, Indore, Madhya Pradesh</span>
          <span>☎ 6261292921</span>
          <span>✉ newerapublicschoolnps@gmail.com</span>
        </div>
      </div>


      {/* NAVBAR */}
      <header className="navbar">

        <Link to="/" className="school-logo">

          <img
  src="/school-logo.png"
  alt="New Era Public School Logo"
  className="school-logo-image"
/>

          <div className="school-name">
            <h2>NEW ERA</h2>
            <h3>PUBLIC SCHOOL</h3>
            <p>Nurturing Tomorrow's Leaders</p>
          </div>

        </Link>


        <nav className="nav-links">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>

        </nav>


        <Link
          to="/contact#enquiry-form"
          className="enquiry-btn"
        >
          Enquiry Now
        </Link>

      </header>


      {/* HERO */}
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="welcome-text">
            Welcome to
          </div>

          <h1>
            New Era
            <br />
            Public School
          </h1>

          <p>
            Quality education, good values and a safe learning environment
            <br />
            to help every student learn and grow.
          </p>


          <div className="hero-buttons">

            <button className="primary-btn">
              Discover More <span>→</span>
            </button>

            <Link
              to="/admissions"
              className="outline-btn"
            >
              Admissions Open 2025-26
            </Link>

          </div>

        </div>

      </section>


      {/* DIRECTOR MESSAGE */}
      <section className="principal-section">

        <div className="principal-image-box">

          <img
            src="/principal.png"
            alt="Director of New Era Public School"
          />

        </div>


        <div className="principal-content">

          <p className="principal-small-title">
            DIRECTOR'S MESSAGE
          </p>

          <h2>
            Guiding Young Minds
          </h2>

          <p>
            At New Era Public School, we believe every child has the
            potential to do great things. Our aim is to provide a caring
            environment where students learn with confidence, grow with
            good values and become ready for a bright future.
          </p>


          <div className="principal-name">

            <strong>Mr. Harpal Sir</strong>

            <span>
              Director, New Era Public School
            </span>

          </div>

        </div>

      </section>


      {/* FEATURE STRIP */}
      <section className="feature-strip">

        <div className="feature">

          <div className="feature-icon">
            🎓
          </div>

          <div>
            <h4>Quality Education</h4>
            <p>MP Board</p>
          </div>

        </div>


        <div className="feature">

          <div className="feature-icon">
            ♧
          </div>

          <div>
            <h4>Experienced Faculty</h4>
            <p>Dedicated Educators</p>
          </div>

        </div>


        <div className="feature">

          <div className="feature-icon">
            🏆
          </div>

          <div>
            <h4>Fun & Activities</h4>
            <p>Sports, Arts & Cultural Events</p>
          </div>

        </div>


        <div className="feature">

          <div className="feature-icon">
            🏫
          </div>

          <div>
            <h4>Good Facilities</h4>
            <p>Clean Classrooms & School Facilities</p>
          </div>

        </div>


        <div className="feature">

          <div className="feature-icon">
            🛡
          </div>

          <div>
            <h4>Safe & Secure</h4>
            <p>Child Friendly Campus</p>
          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="why-section">

        <div className="section-heading">

          <h2>
            Why Choose New Era?
          </h2>

          <div className="gold-line"></div>

        </div>


        <div className="why-cards">

          <div className="why-card">

            <div className="card-icon blue-icon">
              ▱
            </div>

            <h3>
              Academic Excellence
            </h3>

            <p>
              Strong focus on learning and academic growth.
            </p>

          </div>


          <div className="why-card">

            <div className="card-icon gold-icon">
              ☆
            </div>

            <h3>
              All Round Development
            </h3>

            <p>
              Focus on sports, arts, culture and personality development.
            </p>

          </div>


          <div className="why-card">

            <div className="card-icon blue-icon">
              ♧
            </div>

            <h3>
              Good Values
            </h3>

            <p>
              Teaching discipline, respect and responsibility.
            </p>

          </div>


          <div className="why-card">

            <div className="card-icon green-icon">
              ⌂
            </div>

            <h3>
              Sports & Activities
            </h3>

            <p>
              Encouraging students to take part in sports, arts and activities.
            </p>

          </div>


          <div className="why-card">

            <div className="card-icon red-icon">
              ♡
            </div>

            <h3>
              Caring Environment
            </h3>

            <p>
              Safe, supportive and inclusive environment for every child.
            </p>

          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="stats-section">

        <div className="stat">

          <div className="stat-icon">
            🏫
          </div>

          <div>
            <strong>15+</strong>
            <span>Years of Excellence</span>
          </div>

        </div>


        <div className="stat">

          <div className="stat-icon">
            ♧
          </div>

          <div>
            <strong>700+</strong>
            <span>Happy Students</span>
          </div>

        </div>


        <div className="stat">

          <div className="stat-icon">
            👨‍🏫
          </div>

          <div>
            <strong>25+</strong>
            <span>Experienced Teachers</span>
          </div>

        </div>


        <div className="stat">

          <div className="stat-icon">
            🏅
          </div>

          <div>
            <strong>15+</strong>
            <span>Awards & Achievements</span>
          </div>

        </div>

      </section>

    </>
  );
}


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/facilities"
          element={<Facilities />}
        />

        <Route
          path="/admissions"
          element={<Admissions />}
        />

        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>

  );
}


export default App;