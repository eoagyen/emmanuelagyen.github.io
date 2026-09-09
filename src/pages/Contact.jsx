import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Contact</h1>

        <form className="contact-form">
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <textarea placeholder="Message"></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}