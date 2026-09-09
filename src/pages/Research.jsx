import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Research() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Research</h1>

        <h2>
          A Comparative Study of Deep Learning
          Techniques for Glaucoma Detection
          Using Fundus Images
        </h2>

        <p>
          Comparative evaluation of CNNs,
          Vision Transformers and Hybrid Models
          using the AIROGS dataset.
        </p>
      </div>

      <Footer />
    </>
  );
}