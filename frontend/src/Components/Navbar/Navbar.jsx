import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.scrollY > 20);
    });
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);
  const closeMenu = () => setMobileMenu(false);

  const isHome = location.pathname === "/";
  const navClass = `container ${sticky || !isHome ? 'dark-nav' : ''}`;

  return (
    <>
      <nav className={navClass}>
        {/* Logo + Company Name together */}
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
          <span className="company-name">Aurumark Company<br/> Enterprise</span>
        </div>

        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/products" onClick={closeMenu}>Products & Services</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <img 
          src={menu_icon} 
          alt="Menu" 
          className="menu-icon" 
          onClick={toggleMenu} 
        />
      </nav>

      {mobileMenu && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
