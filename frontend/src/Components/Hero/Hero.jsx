import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Goldstrike Enterprise Limited</h1>
        <p>
          A Trusted Partner in Responsible Gold Sourcing, Trading, and Export. <br />
          Supplying and Buying High-Quality Gold to Global Markets with Integrity and Excellence.
        </p>
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
