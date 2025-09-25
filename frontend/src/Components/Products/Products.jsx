import React from 'react'
import './Products.css'
import { Link } from "react-router-dom"
import white_arrow from '../../assets/white-arrow.png'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_4 from '../../assets/program-4.png'
import program_5 from '../../assets/program-5.png'
import program_6 from '../../assets/program-6.png'
import program_7 from '../../assets/program-7.png'
import program_8 from '../../assets/program-8.png'
import program_9 from '../../assets/program-9.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import brass from '../../assets/brass.png'
import gallery_11 from '../../assets/gallery-11.png'
import platinum from '../../assets/platinum.png'


const Products = () => {
    return (
        <div className='products'>
            <div className='product'>
                <img src={program_1} alt="Gold Ores" />
                <div className='caption'>
                    
                    <p>Gold Ores</p>
                </div>
                <div className='product-info'>
                    <h3>Gold Ores</h3>
                    <p>Premium-grade gold ores sourced responsibly and refined to meet international market demands.</p>
                </div>
            </div>

            <div className='product'>
                <img src={program_2} alt="Aluminium" />
                <div className='caption'>
                    
                    <p>Aluminium</p>
                </div>
                <div className='product-info'>
                    <h3>Aluminium</h3>
                    <p>Lightweight yet durable aluminium, trusted worldwide for aerospace, construction, and industrial use.</p>
                </div>
            </div>

            <div className='product'>
                <img src={program_3} alt="Silver" />
                <div className='caption'>
                    
                    <p>Silver</p>
                </div>
                <div className='product-info'>
                    <h3>Silver</h3>
                    <p>Refined silver of exceptional purity, used in jewelry, technology, and global trade networks.</p>
                </div>
            </div>

            <div className='product'>
                <img src={program_4} alt="Copper" />
                <div className='caption'>
                    
                    <p>Copper</p>
                </div>
                <div className='product-info'>
                    <h3>Copper</h3>
                    <p>High-conductivity copper essential for wiring, power systems, and industrial applications worldwide.</p>
                </div>
            </div>

            <div className='product'>
                <img src={program_6} alt="Steel" />
                <div className='caption'>
                    
                    <p>Steel</p>
                </div>
                <div className='product-info'>
                    <h3>Steel</h3>
                    <p>Strong, reliable steel engineered for construction, automotive, and heavy industries.</p>
                </div>
            </div>

            <div className='product'>
                <img src={program_7} alt="Aluminium Scrap" />
                <div className='caption'>
                    
                    <p>Aluminium Scrap</p>
                </div>
                <div className='product-info'>
                    <h3>Aluminium Scrap</h3>
                    <p>Sustainable aluminium scrap solutions for recycling and eco-friendly industrial reuse.</p>
                </div>
            </div>

            <div className='product'>
                <img src={brass} alt="Brass" />
                <div className='caption'>
                    
                    <p>Brass</p>
                </div>
                <div className='product-info'>
                    <h3>Brass</h3>
                    <p>Timeless brass with strength and elegance, ideal for architecture, design, and artistry.</p>
                </div>
            </div>

            <div className='product'>
                <img src={gallery_11} alt="Diamonds" />
                <div className='caption'>
                    
                    <p>Diamonds</p>
                </div>
                <div className='product-info'>
                    <h3>Diamonds</h3>
                    <p>Ethically sourced diamonds that reflect luxury, brilliance, and enduring value.</p>
                </div>
            </div>
            <div className='product'>
                <img src={platinum} alt="Platinum" />
                <div className='caption'>
                    
                    <p>Platinum</p>
                </div>
                <div className='product-info'>
                    <h3>Platinum</h3>
                    <p>Rare and highly valuable platinum, trusted for luxury jewelry, automotive technology, and global trade.</p>
                </div>
            </div>

            <Link to="/products">
                <button className="btn dark-btn">
                    Explore more <img src={white_arrow} alt="arrow" />
                </button>
            </Link>

        </div>
    )
}

export default Products
