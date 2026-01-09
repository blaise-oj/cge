import React from 'react'
import './Products.css'
import { Link } from "react-router-dom"
import white_arrow from '../../assets/white-arrow.png'

import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import g3 from '../../assets/g3.png'
import g4 from '../../assets/g4.png'
import g5 from '../../assets/g5.png'
import g6 from '../../assets/g6.png'
import g7 from '../../assets/g7.png'
import g8 from '../../assets/g8.png'
import g9 from '../../assets/g9.png'
import g10 from '../../assets/g10.png'
import g26 from '../../assets/g26.png'
import g27 from '../../assets/g27.png'
import g28 from '../../assets/g28.png'
import g29 from '../../assets/g29.png'
import g30 from '../../assets/g30.png'


const Products = () => {
  return (
    <div className='products'>

      <div className='product'>
        <img src={g8} alt="Gold Ore" />
        <div className='caption'>
          <p>Gold Ore</p>
        </div>
        <div className='product-info'>
          <h3>Gold Ore</h3>
          <p>
            High-grade gold ore responsibly mined and prepared for further
            processing to meet international gold production standards.
          </p>
        </div>
      </div>

      <div className='product'>
        <img src={g26} alt="Gold Concentrates" />
        <div className='caption'>
          <p>Gold Concentrates</p>
        </div>
        <div className='product-info'>
          <h3>Gold Concentrates</h3>
          <p>
            Carefully processed gold concentrates with enhanced purity,
            optimized for efficient refining and export markets.
          </p>
        </div>
      </div>

      <div className='product'>
        <img src={g27} alt="Raw Gold Nuggets" />
        <div className='caption'>
          <p>Gold Nuggets</p>
        </div>
        <div className='product-info'>
          <h3>Raw Gold Nuggets</h3>
          <p>
            Naturally formed gold nuggets valued for their authenticity,
            rarity, and high market demand.
          </p>
        </div>
      </div>

      <div className='product'>
        <img src={g28} alt="Gold Doré Bars" />
        <div className='caption'>
          <p>Gold Doré Bars</p>
        </div>
        <div className='product-info'>
          <h3>Gold Doré Bars</h3>
          <p>
            Semi-refined gold doré bars produced to international standards
            and ready for final refining or direct trade.
          </p>
        </div>
      </div>

      <div className='product'>
        <img src={g5} alt="Refined Gold Bars" />
        <div className='caption'>
          <p>Refined Gold Bars</p>
        </div>
        <div className='product-info'>
          <h3>Refined Gold Bars</h3>
          <p>
            High-purity refined gold bars suitable for investment,
            institutional buyers, and global bullion markets.
          </p>
        </div>
      </div>

      <div className='product'>
        <img src={g29} alt="Investment Gold" />
        <div className='caption'>
          <p>Investment Gold</p>
        </div>
        <div className='product-info'>
          <h3>Investment-Grade Gold</h3>
          <p>
            Secure and reliable investment-grade gold designed for long-term
            value preservation and wealth growth.
          </p>
        </div>
      </div>

      <div className='product'>
        <img src={g7} alt="Industrial Gold" />
        <div className='caption'>
          <p>Industrial Gold</p>
        </div>
        <div className='product-info'>
          <h3>Industrial Gold Supply</h3>
          <p>
            Gold supplied for specialized industrial and technological
            applications requiring consistent quality and purity.
          </p>
        </div>
      </div>

      <div className='product'>
        <img src={g30} alt="Ethical Gold" />
        <div className='caption'>
          <p>Ethical Gold</p>
        </div>
        <div className='product-info'>
          <h3>Ethically Sourced Gold</h3>
          <p>
            Responsibly mined gold sourced with transparency, sustainability,
            and compliance with international ethical standards.
          </p>
        </div>
      </div>

      <div className='product'>
        <img src={g10} alt="Custom Gold Supply" />
        <div className='caption'>
          <p>Custom Gold Supply</p>
        </div>
        <div className='product-info'>
          <h3>Custom & Bulk Gold Supply</h3>
          <p>
            Flexible gold supply solutions tailored to client specifications,
            bulk orders, and international trade requirements.
          </p>
        </div>
      </div>

      <Link to="/products">
        <button className="btn dark-btn">
          Explore Our Gold <img src={white_arrow} alt="arrow" />
        </button>
      </Link>

    </div>
  )
}

export default Products
