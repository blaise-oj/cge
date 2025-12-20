import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Logo / About */}
        <div className="footer-col">
          <h3 className="footer-logo">Goldstrike Enterprise Limited</h3>
          <p className="footer-about">
            Goldstrike Enterprise Limited is a trusted enterprise in the global trade of precious
            and industrial minerals. We are committed to ethical sourcing,
            sustainable practices, and delivering lasting value to our partners
            and clients. Our focus on integrity and innovation positions us as
            a reliable link between resource-rich regions and the global market.
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
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 - Policies */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Column 4 - Contact & Socials */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: info@aurumarkenterprise.com</p>
          <p>Phone: +254 102 913 538</p>
          <div className="socials">
            <a
              href="https://www.facebook.com/profile.php?id=61582791081492"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/@AurumarkE15952"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/aurumarkenterprise"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/254102913538"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Goldstrike Enterprise Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

