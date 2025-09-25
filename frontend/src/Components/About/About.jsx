import React from 'react'
import './About.css'
import play_icon from '../../assets/play-icon.png'
import gallery_10 from '../../assets/gallery-10.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={gallery_10} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
      </div>
      <div className='about_right'>
        <h3>About Us</h3>
        <h2>From the Earth to the World: Supplying Quality Minerals</h2>
        <p>
          Aurumark Company Enterprise is a trusted name in the mining and global trade
          of precious and industrial minerals, with a strong focus on gold, silver,
          diamonds, and other valuable resources.
          <br /> We are dedicated to responsible and ethical sourcing, ensuring that every
          mineral we trade is processed and delivered with the highest standards of
          quality and sustainability.
          <br /> Guided by integrity, innovation, and excellence, we provide our partners
          and clients with not only premium products but also transparent and
          dependable services.
          <br /> By combining advanced mining practices with international trade expertise,
          Aurumark Company Enterprise continues to position itself as a reliable
          partner in connecting resource-rich regions to markets across the globe.
        </p>
      </div>

    </div>
  )
}

export default About
