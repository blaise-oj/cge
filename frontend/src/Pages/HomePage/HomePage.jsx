import React, { useState } from "react";

// Components (go up 2 levels to reach src, then into Components)
import Hero from "../../Components/Hero/Hero";
import Products from "../../Components/Products/Products";
import Title from "../../Components/Title/Title";
import About from "../../Components/About/About";
import Preparations from "../../Components/Preparations/Preparations";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Contact from "../../Components/Contact/Contact";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";

const HomePage = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Hero />
      <div className="container">
        <Title subTitle="Minerals & products" title="What We Have" />
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
  );
};

export default HomePage;

