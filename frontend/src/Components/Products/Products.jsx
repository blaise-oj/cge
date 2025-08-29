import React from 'react'
import './Products.css'
import {Link} from "react-router-dom"
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


const Products = () => {
    return (
        <div className='products'>
            <div className='product'>
                <img src={program_1} alt="" />
                <div className='caption'>
                    <img src={program_icon_1} alt="" />
                    <p>Gold Ores</p>
                </div>
                <div className='product-info'>
                <h3>Gold Ores</h3>
                <p>High-quality gold ores mined and refined for global trade.</p>
                </div>
            </div>
            <div className='product'>
                <img src={program_2} alt="" />
                <div className='caption'>
                    <img src={program_icon_2} alt="" />
                    <p>Aluminium metals</p>
                </div>
                <div className='product-info'>
                <h3>Aluminium</h3>
                <p>Durable and lightweight aluminium metals for construction and industry.</p>
                </div>
            </div>
            <div className='product'>
                <img src={program_3} alt="" />
                <div className='caption'>
                    <img src={program_icon_3} alt="" />
                    <p>Silver</p>
                </div>
                <div className='product-info'>
                <h3>Silver</h3>
                <p>Refined silver used in jewelry, electronics, and global trade.</p>
                </div>
            </div>
            <div className='product'>
                <img src={program_4} alt="" />
                <div className='caption'>
                    <img src={program_icon_3} alt="" />
                    <p>Silver</p>
                </div>
                <div className='product-info'>
                <h3>Copper</h3>
                <p>High-grade copper essential for wiring, construction, and technology.</p>
                </div>
            </div>
            <div className='product'>
                <img src={program_5} alt="" />
                <div className='caption'>
                    <img src={program_icon_3} alt="" />
                    <p>Copper</p>
                </div>
                <div className='product-info'>
                <h3>Copper</h3>
                <p>Reliable copper metals ideal for wiring, power, and construction needs.</p>
                </div>
            </div>
            <div className='product'>
                <img src={program_6} alt="" />
                <div className='caption'>
                    <img src={program_icon_3} alt="" />
                    <p>Steel</p>
                </div>
                <div className='product-info'>
                <h3>Steel</h3>
                <p>High-quality steel for construction, manufacturing, and industrial use.</p>
                </div>
            </div>
            <div className='product'>
                <img src={program_7} alt="" />
                <div className='caption'>
                    <img src={program_icon_3} alt="" />
                    <p>Aluminium Scrap</p>
                </div>
                <div className='product-info'>
                <h3>Aluminium scrap</h3>
                <p>Reliable supply of aluminium scrap for recycling and industrial reuse.</p>
                </div>
            </div>
            <div className='product'>
                <img src={brass} alt="" />
                <div className='caption'>
                    <img src={program_icon_3} alt="" />
                    <p>Brass</p>
                </div>
                <div className='product-info'>
                <h3>Brass</h3>
                <p>Elegant brass crafted with precision and timeless style.</p>
                </div>
            </div>
            <div className='product'>
                <img src={gallery_11} alt="" />
                <div className='caption'>
                    <img src={program_icon_3} alt="" />
                    <p>Diamonds</p>
                </div>
                <div className='product-info'>
                <h3>Diamonds</h3>
                <p>Exquisite diamond that embody luxury, beauty, and timeless elegance.</p>
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
