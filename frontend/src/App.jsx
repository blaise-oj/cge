import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Components/ScrollToTop.jsx";

// Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Preparations from './Components/Preparations/Preparations';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
// Pages
import HomePage from './Pages/HomePage/HomePage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import GalleryPage from './Pages/GalleryPage/GalleryPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutPage from './Pages/AboutPage/AboutPage';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <div className="container">
                <Title subTitle="Minerals & products" title="A Closer Look" />
                <Products />
                <About setPlayState={setPlayState} />
                <Title subTitle="Consignment Preparation" title="Minerals and Storage" />
                <Preparations />
                <Title subTitle="Testimonials" title="What Our Clients Say" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get In Touch" />
                <Contact />
              </div>
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </div>
          }
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>


      <Footer />
    </Router>
  );
};

export default App;

