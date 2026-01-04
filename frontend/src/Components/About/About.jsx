import React from 'react'
import './About.css'
import play_icon from '../../assets/play-icon.png'
import gallery_10 from '../../assets/gallery-10.png'
import { Link } from 'react-router-dom'

const About = ({ setPlayState }) => {
  return (
    <div className='about'>

      {/* LEFT */}
      <div className='about-left'>
        <img src={gallery_10} alt="Goldstrike Operations" className='about-img' />
        <img
          src={play_icon}
          alt="Play Video"
          className='play-icon'
          onClick={() => setPlayState(true)}
        />
      </div>

      {/* RIGHT */}
      <div className='about_right'>
        <h3>About Us</h3>
        <h2>From the Earth to the World: Supplying Quality Minerals</h2>

        <p>
          Goldstrike Enterprise Limited is a trusted name in the mining and global
          trade of precious and industrial minerals, focused on gold, silver,
          diamonds, and other high-value resources.
        </p>

        <p>
          We are committed to ethical sourcing, quality assurance, and transparent
          supply chains that meet international standards.
        </p>

        {/* PARTNER */}
        <div className="home-partner">
          <h4>Strategic UK Partner</h4>
          <p>
            Our operations are strengthened by our UK-based parent partner,
            <strong> Equinox Metal Partners</strong>, providing global market
            access, regulatory compliance, and trade execution expertise.
          </p>
          {/* CTA BUTTON */}
          <Link to="/about" className="about-cta-btn">
            Explore More About Us
          </Link>
        </div>

        {/* LEADERSHIP */}
        <div className="home-leadership">
          <h4>Management</h4>

          <div className="leader-mini">
            <strong>Mr. Sukhram Parkash</strong>
            <span>Chief Executive Officer (CEO)</span>
            <p>
                            Email:{" "}
                            <a href="mailto:ram@equinoxmetalpartners.com">
                                ram@equinoxmetalpartners.com
                            </a>
                        </p>
                    
          </div>

          <div className="leader-mini">
            <strong>Mr. Francis Otundo</strong>
            <span>Managing Director</span>
          </div>

          {/* CTA BUTTON */}
          <Link to="/about" className="about-cta-btn">
            Explore More About Us
          </Link>
        </div>

      </div>
    </div>
  )
}

export default About



