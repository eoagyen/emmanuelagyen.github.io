import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>About Me</h1>

        <p>
          I am a Data Scientist and Biomedical Engineer
          passionate about machine learning, healthcare
          AI and data-driven decision making.
        </p>

        <h2>Education</h2>

        <ul>
          <li>MSc Computer Science - University of Ghana</li>
          <li>BSc Biomedical Engineering - First Class</li>
        </ul>

        <h2>Skills</h2>

        <div className="skills">
          <span>Python</span>
          <span>SQL</span>
          <span>Power BI</span>
          <span>Azure</span>
          <span>PyTorch</span>
        </div>
      </div>

      <Footer />
    </>
  );
}