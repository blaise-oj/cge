import React from "react";
import "./GalleryPage.css";

import copper_scrap from "../../assets/copper-scrap.png";
import copper_cathodes from "../../assets/copper-cathodes.png";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_4 from "../../assets/program-4.png";
import program_5 from "../../assets/program-5.png";
import program_6 from "../../assets/program-6.png";
import program_7 from "../../assets/program-7.png";
import program_8 from "../../assets/program-8.png";
import program_9 from "../../assets/program-9.png";
import aluminium_beverage from "../../assets/aluminium-beverage.png";
import gallery_5 from "../../assets/gallery-5.png";
import gallery_6 from "../../assets/gallery-6.png";
import gallery_7 from "../../assets/gallery-7.png";
import gallery_8 from "../../assets/gallery-8.png";
import gallery_9 from "../../assets/gallery-9.png";
import gallery_10 from "../../assets/gallery-10.png";
import gallery_11 from "../../assets/gallery-11.png";
import gallery_12 from "../../assets/gallery-12.png";
import gallery_13 from "../../assets/gallery-13.png";

// Add structured data: each image has title + description
const images = [
  { src: copper_scrap, title: "Copper Scrap", desc: "High-quality recycled copper scrap for global export." },
  { src: copper_cathodes, title: "Copper Cathodes", desc: "99.99% purity copper cathodes for industrial use." },
  { src: program_1, title: "Gold Bullion", desc: "Refined gold bullion bars meeting global standards." },
  { src: program_2, title: "Gold Nuggets", desc: "Ethically sourced raw gold nuggets." },
  { src: program_3, title: "Silver Bars", desc: "Premium silver bars for trade and investment." },
  { src: program_4, title: "Diamond Stones", desc: "Rough and polished diamonds for trade." },
  { src: program_5, title: "Bauxite", desc: "Raw bauxite ores for aluminium production." },
  { src: program_6, title: "Iron Ore", desc: "High-grade iron ore for steel industries." },
  { src: program_7, title: "Aluminium Scrap", desc: "Processed aluminium scrap for reuse and recycling." },
  { src: program_8, title: "Zinc Ingots", desc: "Zinc ingots supplied for global manufacturing." },
  { src: program_9, title: "Industrial Minerals", desc: "Trusted supply of essential industrial minerals." },
  { src: aluminium_beverage, title: "Aluminium Beverage Cans", desc: "Recyclable aluminium cans for sustainable packaging." },
  { src: gallery_5, title: "Mining Operations", desc: "On-ground mineral extraction processes." },
  { src: gallery_6, title: "Logistics", desc: "Secure logistics and global delivery network." },
  { src: gallery_7, title: "Processing Plant", desc: "Modern mineral processing facilities." },
  { src: gallery_8, title: "Trade Hub", desc: "Our international trading connections." },
  { src: gallery_9, title: "Warehouse", desc: "Secure mineral storage facilities." },
  { src: gallery_10, title: "Export Packaging", desc: "Safe and efficient export packaging solutions." },
  { src: gallery_11, title: "Quality Control", desc: "Strict quality checks before export." },
  { src: gallery_12, title: "Partnerships", desc: "Strong partnerships with global clients." },
  { src: gallery_13, title: "Sustainability", desc: "Commitment to ethical and sustainable mining." },
];

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <h1>Our Gallery</h1>
      <p className="gallery-intro">
        Explore highlights from <strong>Goldstrike Enterprise Limited</strong> – showcasing our
        minerals, operations, and commitment to global trade.
      </p>
      <div className="gallery-grid">
        {images.map((item, index) => (
          <div key={index} className="gallery-card">
            <img src={item.src} alt={item.title} />
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
