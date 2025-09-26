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
    desc: "Our logistics ensure safe, secure, and timely metal transportation across long distances. With reinforced containers, tracking systems, and trusted partners, every shipment is delivered efficiently and transparently by land, sea, or air."
  },
  {
    src: gallery_3,
    desc: "We store ores under optimal conditions to preserve quality and prevent damage. With specialized packaging, metals are protected from corrosion, impact, and the environment—ensuring every shipment arrives safe and intact."
  },
  {
    src: gallery_4,
    desc: "Copper is stored under controlled conditions to prevent oxidation. Using pallets, protective wrapping, and climate-aware storage, we keep it safe, organized, and ready for dispatch."
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