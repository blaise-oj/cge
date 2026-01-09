import React, { useState, useEffect } from "react";
import "./Preparations.css";
import { Link } from "react-router-dom";
import white_arrow from "../../assets/white-arrow.png";

import g31 from "../../assets/g31.png";
import g32 from "../../assets/g32.png";
import g33 from "../../assets/g33.png";
import g34 from "../../assets/g34.png";

const processes = [
  {
    title: "Secure Gold Handling",
    image: g31,
    description:
      "Our gold handling process is built on precision, security, and transparency, ensuring every consignment is protected from the point of origin to final destination.",
  },
  {
    title: "Insured Gold Logistics",
    image: g32,
    description:
      "We work with trusted global logistics partners to provide fully insured gold transportation by land, sea, and air, supported by advanced tracking systems.",
  },
  {
    title: "Controlled Storage & Vaulting",
    image: g33,
    description:
      "Gold is stored in secure, controlled environments designed to preserve purity and value, with sealed packaging, vault security, and continuous monitoring.",
  },
  {
    title: "Compliance & Export Preparation",
    image: g34,
    description:
      "Before dispatch, all gold undergoes strict quality checks, documentation verification, and compliance procedures aligned with international trade regulations.",
  },
];

const Preparations = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processes.length);
    }, 10000); // 10 seconds for a faster carousel
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="preparations">
      {/* Header */}
      <div className="prep-header">
        <h2>Gold Handling & Export Preparation</h2>
        <p>
          We follow strict international standards to ensure secure handling,
          storage, and delivery of gold to global markets.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="prep-image">
        {processes.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.title}
            className={`carousel-img ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Cards Carousel */}
      <div className="prep-cards">
        {processes.map((item, index) => (
          <div
            key={index}
            className={`prep-card ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.image} alt={item.title} className="card-img" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link to="/products">
        <button className="btn dark-btn">
          Explore Our Gold <img src={white_arrow} alt="arrow" />
        </button>
      </Link>
    </section>
  );
};

export default Preparations;