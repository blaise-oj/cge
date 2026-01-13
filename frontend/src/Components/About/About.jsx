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
        <img src={gallery_10} alt="Goldstrike Gold Operations" className='about-img' />
        <img
          src={play_icon}
          alt="Play Video"
          className='play-icon'
          onClick={() => setPlayState(true)}
        />
      </div>

      {/* RIGHT */}
      <div className='about_right'>
        <h3>About Goldstrike</h3>
        <h2>Trusted Gold Buying & Selling for Global Markets</h2>

        <p>
          <strong>Goldstrike Enterprise Limited</strong> is a specialized gold trading
          company engaged in the responsible <strong>buying, handling, and selling of
            gold</strong> to local and international markets. We work closely with
          licensed miners, suppliers, refiners, and institutional buyers to facilitate
          secure and transparent gold transactions.
        </p>

        <p>
          Our operations cover the full gold trade cycle—from sourcing and purchasing,
          to quality verification, secure storage, logistics, and compliant export.
          Every transaction is conducted in line with international standards, ensuring
          fairness, traceability, and long-term value for all partners involved.
        </p>

        {/* PARTNER */}
        <div className="home-partner">
          <h4>Strategic International Partnership</h4>
          <p>
            We are supported by our DUBAI-based strategic partner,
            <strong> Equinox Metal Partners</strong>, enabling access to global buyers,
            refined market intelligence, regulatory compliance, and efficient trade
            execution across international gold markets.
          </p>

          <Link to="/about" className="about-cta-btn">
            Learn More About Our Trading Model
          </Link>
        </div>

        {/* LEADERSHIP */}
        <div className="home-leadership">
          <h4>Leadership & Management</h4>

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
            <p>
              Email:{" "}
              <a href="mailto:info@goldstrikeenterprise.com">
                info@goldstrikeenterprise.com
              </a>
            </p>
          </div>

          <Link to="/about" className="about-cta-btn">
            Learn more about us
          </Link>
        </div>
      </div>

    </div>
  )
}

export default About
