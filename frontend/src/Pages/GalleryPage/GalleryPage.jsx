import React from "react";
import "./GalleryPage.css";


import copper_scrap from "../../assets/copper-scrap.png";
import copper_cathodes from "../../assets/copper-cathodes.png";
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_4 from '../../assets/program-4.png'
import program_5 from '../../assets/program-5.png'
import program_6 from '../../assets/program-6.png'
import program_7 from '../../assets/program-7.png'
import program_8 from '../../assets/program-8.png'
import program_9 from '../../assets/program-9.png'
import aluminium_beverage from '../../assets/aluminium-beverage.png'
import gallery_5 from '../../assets/gallery-5.png'
import gallery_6 from '../../assets/gallery-6.png'
import gallery_7 from '../../assets/gallery-7.png'
import gallery_8 from '../../assets/gallery-8.png'
import gallery_9 from '../../assets/gallery-9.png'
import gallery_10 from '../../assets/gallery-10.png'
import gallery_11 from '../../assets/gallery-11.png'
import gallery_12 from '../../assets/gallery-12.png'
import gallery_13 from '../../assets/gallery-13.png'


const images = [
  copper_scrap,
  copper_cathodes,
  program_1,
  program_2,
  program_3,
  program_4,
  program_5,
  program_6,
  program_7,
  program_8,
  program_9,
  aluminium_beverage,
  gallery_5,
  gallery_6,
  gallery_7,
  gallery_8,
  gallery_9,
  gallery_10,
  gallery_11,
  gallery_12,
  gallery_13
  
];

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-card">
            <img src={img} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;

