import React from 'react'
import './About.css'
import play_icon from '../../assets/play-icon.png'
import gallery_10 from '../../assets/gallery-10.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={gallery_10} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about_right'>
            <h3>About Us</h3>
            <h2>From the Earth to the World: Supplying Quality Minerals</h2>
            <p>COSKA Group Enterprise is a global leader in the mining and trading of precious and industrial minerals, including gold, silver, aluminum, diamonds, and other valuable ores.
              <br/> With a strong international presence, we are committed to responsibly sourcing, processing, and delivering high-quality minerals to clients worldwide.
              <br/> Our operations are built on trust, integrity, and excellence, ensuring that our partners and customers receive not only premium products but also reliable and transparent services.
              <br/> By combining advanced mining techniques with global trade expertise, COSKA Group Enterprise continues to strengthen its reputation as a trusted partner in the global metals and minerals industry.</p>
        </div>
      
    </div>
  )
}

export default About
