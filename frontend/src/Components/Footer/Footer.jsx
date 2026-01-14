import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Logo / About */}
        <div className="footer-col">
          <h3 className="footer-logo">Goldstrike Enterprise Limited</h3>
          <p className="footer-about">
            Goldstrike Enterprise Limited is a trusted enterprise in the global
            trade of precious and industrial minerals. We are committed to
            ethical sourcing, sustainable practices, and delivering lasting
            value to our partners and clients.
          </p>
          <p className="footer-tagline">“From the Earth to the World.”</p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products & Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 - Leadership & Partnership */}
        <div className="footer-col">
          <h4>Management</h4>
          <p><strong>Mr. Sukhram Parkash</strong><br />CEO <p>
            Email:{" "}
            <a href="mailto:ram@equinoxmetalpartners.com">
              ram@equinoxmetalpartners.com
            </a>
          </p></p>
          <p><strong>Mr. Francis Otundo</strong><br />Managing Director</p>
          Email:{" "}
          <a href="mailto:info@goldstrikeenterprise.com">
            info@goldstrikeenterprise.com
          </a>

          <h4 className="footer-subtitle">Strategic Partner</h4>
          <p>
            <strong>Equinox Metal Partners</strong><br />
            Dubai, United Arab Emirates (UAE)
          </p>
          <p>
            <a href="mailto:ram@equinoxmetalpartners.com">
              ram@equinoxmetalpartners.com
            </a>
          </p>
        </div>

        {/* Column 4 - Contact & Socials */}
        <div className="footer-col">
          <h4>Contact</h4>

          <p>
            Email:{" "}
            <a href="mailto:info@goldstrikeenterprise.com">
              info@goldstrikeenterprise.com
            </a>
          </p>

          <p>
            Phone:{" "}
            <a href="tel:+254102913538">
              +254 102 913 538
            </a>
          </p>

          <div className="socials">
            <a
              href="https://www.facebook.com/profile.php?id=61582791081492"
              target="_blank"
              rel="noopener noreferrer"
              className="social facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://x.com/@AurumarkE15952"
              target="_blank"
              rel="noopener noreferrer"
              className="social x"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://instagram.com/goldstrikeenterprise"
              target="_blank"
              rel="noopener noreferrer"
              className="social instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/254102913538"
              target="_blank"
              rel="noopener noreferrer"
              className="social whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Goldstrike Enterprise Limited. All rights reserved.
        </p>
      </div>
    </footer >
  );
};

export default Footer;
