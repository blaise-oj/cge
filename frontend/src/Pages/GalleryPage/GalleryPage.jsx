import React from "react";
import "./GalleryPage.css";

// Gold-focused images
import g1 from "../../assets/g1.png";
import g2 from "../../assets/g2.png";
import g3 from "../../assets/g3.png";
import g4 from "../../assets/g4.png";
import g5 from "../../assets/g5.png";
import g6 from "../../assets/g6.png";
import g7 from "../../assets/g7.png";
import g8 from "../../assets/g8.png";
import g9 from "../../assets/g9.png";
import g10 from "../../assets/g10.png";
import g11 from "../../assets/g11.png";
import g12 from "../../assets/g12.png";
import g13 from "../../assets/g13.png";
import g14 from "../../assets/g14.png";
import g15 from "../../assets/g15.png";
import g16 from "../../assets/g16.png";
import g17 from "../../assets/g17.png";
import g18 from "../../assets/g18.png";
import g19 from "../../assets/g19.png";
import g20 from "../../assets/g20.png";
import g21 from "../../assets/g21.png";
import g22 from "../../assets/g22.png";
import g23 from "../../assets/g23.png";
import g24 from "../../assets/g24.png";
import g25 from "../../assets/g25.png";
import g26 from "../../assets/g26.png";
import g27 from "../../assets/g27.png";
import g28 from "../../assets/g28.png";
import g29 from "../../assets/g29.png";
import g30 from "../../assets/g30.png";
import g31 from "../../assets/g31.png";
import g32 from "../../assets/g32.png";
import g33 from "../../assets/g33.png";

// Pure image gallery array
const goldGallery = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
  g21, g22, g23, g24, g25, g26, g27, g28, g29, g30,
  g31, g32, g33
];

const GalleryPage = () => {
  return (
    <section className="gallery-page">
      {/* Minimal luxury header */}
      <header className="gallery-header">
        <h1>Gold Gallery</h1>
        <p className="gallery-subtitle">
          A curated visual archive of our <strong>gold products, sourcing,
            processing, and international trade operations.</strong><br/> Showcasing excellence in gold trading, ethical sourcing,
  secure handling, and global distribution.<br/>Where gold meets craftsmanship, responsibility, and
  world-class trade standards..
        </p>
        <span className="gallery-tagline">
          Precision • Purity • Trust • Global Reach
        </span>
      </header>

      {/* Image Grid */}
      <div className="gallery-grid">
        {goldGallery.map((img, index) => (
          <figure key={index} className="gallery-item">
            <img
              src={img}
              alt={`Gold Gallery ${index + 1}`}
              loading="lazy"
            />
            <span className="gold-shine" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
