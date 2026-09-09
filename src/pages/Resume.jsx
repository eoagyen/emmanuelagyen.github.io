import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Resume</h1>

        <button>Download CV</button>
      </div>

      <Footer />
    </>
  );
}