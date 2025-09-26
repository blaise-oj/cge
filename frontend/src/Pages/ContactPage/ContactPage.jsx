import React from "react";
import "./ContactPage.css";
import phone_icon from "../../assets/phone-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import whatsapp from "../../assets/whatsapp.png";

const ContactPage = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "88783ec1-b5dc-4ce6-84bd-808151faf7a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      {/* Intro */}
      <div className="contact-header">
        <h1>Contact Aurumark Company Enterprise</h1>
        <p>
          At <strong>Aurumark Company Enterprise</strong>, we value open
          communication with our clients, partners, and stakeholders. Whether
          you’re looking to explore our mineral exports, request a partnership,
          or simply ask a question, we’re here to assist you promptly and
          professionally.
        </p>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="info-card">
          <img src={mail_icon} alt="Email" />
          <h3>Email Us</h3>
          <p>
            General Inquiries:{" "}
            <a href="mailto:info@aurumarkenterprise.com">
              info@aurumarkenterprise.com
            </a>
          </p>
        </div>

        <div className="info-card">
          <img src={phone_icon} alt="Phone" />
          <h3>Call Us</h3>
          <p>
            <a href="tel:+254102913538">+254 102 913 538</a>
          </p>
          <p>Always available</p>
        </div>

        <div className="info-card">
          <img src={location_icon} alt="Location" />
          <h3>Visit Us</h3>
          <p>Lusaka Rd, Nairobi, Kenya</p>
          <a
            href="https://www.google.com/maps/place/Lusaka+Rd,+Nairobi,+Kenya"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        {/* WhatsApp */}
        <div className="info-card">
          <img src={whatsapp} alt="WhatsApp" />
          <h3>WhatsApp</h3>
          <p>
            <a
              href="https://wa.me/254102913538"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us on WhatsApp
            </a>
          </p>
        </div>

        {/* Instagram */}
        <div className="info-card">
          <img src={instagram} alt="Instagram" />
          <h3>Instagram</h3>
          <p>
            <a
              href="https://instagram.com/aurumarkenterprise"
              target="_blank"
              rel="noopener noreferrer"
            >
              @aurumarkenterprise
            </a>
          </p>
        </div>

        {/* X (Twitter) */}
        <div className="info-card">
          <img src={twitter} alt="X" />
          <h3>Follow us on X</h3>
          <p>
            <a
              href="https://x.com/aurumarkenterprise"
              target="_blank"
              rel="noopener noreferrer"
            >
              @aurumarkenterprise
            </a>
          </p>
        </div>

        {/* Facebook */}
        <div className="info-card">
          <img src={facebook} alt="Facebook" />
          <h3>Facebook</h3>
          <p>
            <a
              href="https://facebook.com/aurumarkenterprise"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aurumark Enterprise
            </a>
          </p>
        </div>
      </div>


      {/* Form */}
      <div className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Email Address</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Phone Number</label>
          <input type="text" name="phone" placeholder="Enter your phone number" />

          <label>Subject</label>
          <select name="subject" required>
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnerships">Partnerships</option>
            <option value="Mineral Exports">Mineral Exports</option>
            <option value="Customer Support">Customer Support</option>
          </select>

          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Write your message here"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="arrow" />
          </button>
          <span className="form-result">{result}</span>
        </form>
      </div>

      {/* Map */}
      <div className="map-section">
        <h2>Our Location</h2>
        <iframe
          title="Aurumark Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.79707246046!2d36.836707210093664!3d-1.2963907356308497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f111648341cf7%3A0xefeff333f8c93995!2sLusaka%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1756479894112!5m2!1sen!2ske"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ContactPage;


