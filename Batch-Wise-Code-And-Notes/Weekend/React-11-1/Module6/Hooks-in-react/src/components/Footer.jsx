
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="logo">
            DevSpace<span>.</span>
          </Link>
          <p>
            Building thoughtful digital experiences,
            one idea at a time.
          </p>
        </div>

        <div className="footer-navigation">
          <h4>EXPLORE</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-connect">
          <h4>HAVE AN IDEA?</h4>
          <Link to="/contact" className="footer-cta">
            Let's make it happen ↗
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DevSpace. All rights reserved.</p>
        <p>Designed with curiosity. Built with purpose.</p>
      </div>
    </footer>
  );
}

export default Footer;
