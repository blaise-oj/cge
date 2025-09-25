import React, { useState, useEffect } from 'react'
import './Preparations.css'
import {Link} from "react-router-dom"
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import white_arrow from '../../assets/white-arrow.png'

const slides = [
  {
    src: gallery_1,
    desc: "Our metal shipment services are designed with clients in mind—offering reliability, safety, and smooth delivery right to your preferred location."
  },
  {
    src: gallery_2,
    desc: "Our logistics process is designed to guarantee the safe and secure transportation of metals across long distances. We use reinforced containers, advanced tracking systems, and trusted freight partners to ensure every shipment is protected against risks and delivered on time. Whether by land, sea, or air, our clients can rely on us for safe, efficient, and transparent delivery."
  },
  {
    src: gallery_3,
    desc: "We ensure that the ores are stored under optimal conditions to preserve its quality and prevent damage. Our specialized packaging solutions are designed to protect the metal from corrosion, impact, and environmental factors during transit, guaranteeing that every shipment reaches its destination safely and in excellent condition."
  },
  {
    src: gallery_4,
    desc: "Copper is stored in our warehouses under carefully controlled conditions to preserve its quality and prevent oxidation. We use specialized pallets, protective wrapping, and climate-conscious environments to ensure the metal remains free from contamination or damage. With strict inventory management systems, we provide secure, organized, and efficient storage until dispatch."
  }
];

const Preparations = () => {
  const [current, setCurrent] = useState(0);

  // Auto play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className='preparations'>
      <div className='slider'>
        <button className="arrow left" onClick={prevSlide}><FaArrowLeft /></button>

        {/* Render all images with active class */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-wrapper ${index === current ? "active" : ""}`}
          >
            <img
              src={slide.src}
              alt="mineral shipment"
              className="slide-img"
            />
            <p className="slide-desc">{slide.desc}</p>
          </div>
        ))}

        <button className="arrow right" onClick={nextSlide}><FaArrowRight /></button>
      </div>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      <Link to="/products">
          <button className="btn dark-btn">
            Explore more <img src={white_arrow} alt="arrow" />
          </button>
          </Link>
    </div>
  )
}

export default Preparations