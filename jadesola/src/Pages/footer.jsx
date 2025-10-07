import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-heading">Connect with me</h3>
            <div className="footer-icons">
              <a href="https://www.linkedin.com/in/ayegbajeje-jadesola-9b3611252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  target="_blank" className="footer-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/olamidej85" target="_blank" className="footer-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:olamidejayde@gmail.com" target="_blank"  className="footer-link">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://x.com/jadesola8560?s=21" target="_blank"  className="footer-link">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-text">Ready to build something amazing?</p>
            <a href="https://calendly.com/olamidejayde/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-btn">
              Schedule a Call
            </a>
          </div>
        </div>

            <p className="footer-copy">
          © 2024 Jadesola's Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
