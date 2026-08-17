import "./HeroSlider.css";
function HeroSlider() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-tag">WELCOME TO NEW ERA PUBLIC SCHOOL</p>

        <h1>
          Shaping Young Minds
          <br />
          For A Brighter Future
        </h1>

        <p className="hero-description">
          A nurturing learning environment where students discover their
          potential, build confidence, and prepare for a successful future.
        </p>

        <div className="hero-buttons">
          <a href="#about" className="btn-primary">
            Discover Our School
          </a>

          <a href="#admissions" className="btn-secondary">
            Admissions
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
          alt="New Era Public School campus"
        />
      </div>
    </section>
  );
}

export default HeroSlider;