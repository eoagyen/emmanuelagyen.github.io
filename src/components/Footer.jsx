import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

      <div className="footer-top">

        <div>
          <h3>Emmanuel Obeng Agyen</h3>

          <p>
            Building a better tomorrow with data.
          </p>
        </div>

        <div className="footer-icons">
          <a
            href="https://linkedin.com/in/emmanuelagyen"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/eoagyen"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a href="mailto:emmanuelagyen@gmail.com">
            <FaEnvelope />
          </a>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2026 Emmanuel Obeng Agyen.
          All rights reserved.
        </p>

        <p>
          Data Analyst | Data Scientist
        </p>
      </div>
      </div>
    </footer>
  );
}
