import React from "react";
import "./ProductsPage.css";
import { motion } from "framer-motion";

// GOLD IMAGES
import g1 from "../../assets/g1.png";
import g2 from "../../assets/g2.png";
import g3 from "../../assets/g3.png";
import g4 from "../../assets/g4.png";
import g5 from "../../assets/g5.png";
import g6 from "../../assets/g6.png";
import g7 from "../../assets/g7.png";
import g8 from "../../assets/g8.png";
import g9 from "../../assets/g9.png";
import g10 from "../../assets/g10.png";
import g13 from "../../assets/g13.png";
import g26 from "../../assets/g26.png";
import g27 from "../../assets/g27.png";
import g28 from "../../assets/g28.png";
import g29 from "../../assets/g29.png";
import g30 from "../../assets/g30.png";
import g35 from "../../assets/g35.png";
import g36 from "../../assets/g36.png";
import g37 from "../../assets/g37.png";
import g38 from "../../assets/g38.png";
import g42 from "../../assets/g42.png";
import g43 from "../../assets/g43.png";

const products = [
  {
    img: g28,
    title: "Gold Doré Bars",
    desc: "Unrefined gold doré bars sourced directly from mining operations, suitable for international refining and export."
  },
  {
    img: g5,
    title: "Refined Gold Bars",
    desc: "High-purity refined gold bars meeting international standards, available in multiple weights for investment and trade."
  },
  {
    img: g26,
    title: "Gold Nuggets",
    desc: "Naturally occurring gold nuggets sourced responsibly from artisanal and licensed miners."
  },
  {
    img: g35,
    title: "Gold Dust",
    desc: "Carefully collected gold dust prepared for aggregation, refining, and secure bulk trading."
  },
  {
    img: g36,
    title: "Gold Ore",
    desc: "Selected gold-bearing ore supplied to approved processing and refining facilities."
  },
  {
    img: g29,
    title: "Investment Gold",
    desc: "Gold products structured for investors seeking secure value preservation and long-term growth."
  },
  {
    img: g37,
    title: "Bulk Gold Supply",
    desc: "Large-volume gold supply for refiners, financial institutions, and industrial buyers."
  },
  {
    img: g38,
    title: "Artisanal Gold",
    desc: "Ethically sourced gold from small-scale miners, supporting responsible mining communities."
  },
  {
    img: g13,
    title: "Custom Gold Orders",
    desc: "Tailored gold sourcing solutions based on purity, volume, destination, and buyer requirements."
  },
  {
    img: g10,
    title: "Export-Ready Gold",
    desc: "Gold prepared with full documentation, compliance, and secure logistics for global markets."
  },
  {
    img: g42,
    title: "Alluvial Gold",
    desc: "Naturally occurring gold extracted from riverbeds\n\nOften sold as nuggets, dust, or concentrate"
  },
    {
    img: g43,
    title: "Melted Gold Granules",
    desc: "Uniform gold pellets produced from melted gold\n\nUsed in jewelry manufacturing and industrial applications"
  }
];

const services = [
  {
    title: "Gold Buying",
    desc: "We purchase gold from licensed miners, aggregators, and suppliers under transparent and fair market pricing."
  },
  {
    title: "Gold Selling",
    desc: "Supplying verified gold to refiners, institutions, and international buyers with complete documentation."
  },
  {
    title: "Quality Verification",
    desc: "Purity testing, assay reports, and verification conducted to meet international standards."
  },
  {
    title: "Secure Logistics",
    desc: "End-to-end secure handling, insured transport, and trusted logistics partners."
  },
  {
    title: "Export & Compliance",
    desc: "Full compliance with export regulations, customs documentation, and international trade laws."
  },
  {
    title: "Custom Trade Agreements",
    desc: "Long-term supply contracts and customized trading structures for strategic partners."
  }
];

const ProductsPage = () => {
  return (
    <div className="products-page">

      {/* HEADER */}
      <header className="products-header">
        <motion.div
          className="products-header-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Gold Products & Trading</h1>
          <p>
            Trusted buying and selling of gold, built on integrity, transparency,
            and global market expertise.
          </p>
        </motion.div>
      </header>

      {/* PRODUCTS */}
      <section className="products-section">
        <h2 className="section-title">Our Gold Products</h2>

        <div className="products-grid">
          {products.map((item, index) => (
            <motion.div
              key={index}
              className="product-card"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <h2 className="section-title">Our Gold Trading Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;
