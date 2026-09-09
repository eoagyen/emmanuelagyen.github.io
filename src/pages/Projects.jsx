import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  const projects = [
    "Glaucoma Detection Using Deep Learning",
    "Power BI Analytics Dashboard",
    "Azure Data Engineering",
    "SQL Automation",
    "Medical Image Classification",
    "EDA Project"
  ];

  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Projects</h1>

        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project}>
              <h3>{project}</h3>
              <button>View Project</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}