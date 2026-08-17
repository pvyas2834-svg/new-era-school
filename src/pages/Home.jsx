import "./Home.css";
import schoolImage from "../assets/school.jpeg";

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <img src={schoolImage} alt="New Era Public School" />

        <div className="home-overlay">
          <h1>Welcome to New Era Public School</h1>
          <p>Makodiya, Indore | MP Board</p>
        </div>
      </section>
    </div>
  );
}

export default Home;