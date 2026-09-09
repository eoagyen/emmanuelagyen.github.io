import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div>
          <h1>Emmanuel Obeng Agyen</h1>

          <h2>
            Data Scientist | Machine Learning Engineer |
            Biomedical Engineer
          </h2>

          <p>
            Building AI solutions that improve healthcare,
            education and business outcomes.
          </p>

          <button>View Projects</button>
        </div>

        <img
          src="/profile.jpg"
          alt="profile"
          className="hero-image"
        />
      </section>

      <section className="stats">
        <div>250+ Students Trained</div>
        <div>150+ Staff Trained</div>
        <div>588+ DigiCAP Learners</div>
        <div>5+ Major Projects</div>
      </section>

      <Footer />
    </>
  );
}