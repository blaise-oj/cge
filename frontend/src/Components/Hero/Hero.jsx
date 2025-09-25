import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import white_arrow from '../../assets/white-arrow.png'
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className= 'hero container'>
        <div className='hero-text'>
            <h1>AURUMARK COMPANY ENTERPRISE<br/> Metals and Minerals</h1>
            <p>Trusted International Partners in Mining & Trade</p>
            <Link to="/products">
          <button className="btn dark-btn">
            Explore more <img src={white_arrow} alt="arrow" />
          </button>
          </Link>
        </div>
      
    </div>
  )
}

export default Hero
