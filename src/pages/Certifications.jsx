import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Certifications() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Certifications</h1>

        <ul>
          <li>Microsoft Azure Fundamentals (AZ-900)</li>
          <li>Power BI Certification</li>
          <li>Data Science Certification</li>
          <li>Machine Learning Certification</li>
        </ul>
      </div>

      <Footer />
    </>
  );
}