import "./AboutPage.css";
import equinox from "../../assets/equinox.png";

const AboutPage = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Goldstrike Enterprise</h1>
          <p>
            From the Earth to the World — Ethical Sourcing, Secure Handling, and Premium Gold Trading.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Goldstrike Enterprise Limited is a premier company specializing exclusively in the buying, selling, and trading of gold. 
          Our operations are guided by integrity, transparency, and an unwavering commitment to quality.
        </p>
        <p>
          We source gold responsibly from verified and ethical mining operations, connecting it to reputable buyers and investors across the globe.
        </p>
        <p>
          Every gram of gold we handle undergoes strict verification, secure processing, and precise logistics, ensuring premium quality and trustworthiness.
        </p>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stat">
          <h3>15+</h3>
          <p>Years in Gold Trading</p>
        </div>
        <div className="stat">
          <h3>10+</h3>
          <p>Countries Served Globally</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Verified Ethical Sourcing</p>
        </div>
        <div className="stat">
          <h3>Trusted</h3>
          <p>International Gold Partners</p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section">
        <h2>What We Do</h2>
        <p>
          We provide full-spectrum gold trading services, including responsible sourcing, verification, secure transport, global sales, and client-focused delivery.
        </p>
        <p>
          Our team ensures every transaction complies with international standards and guarantees the integrity, purity, and security of all gold handled.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="about-section grid-two">
        <div className="glass-card">
          <h3>Our Mission</h3>
          <p>
            To provide premium, ethically sourced gold to global markets while ensuring security, trust, and maximum value for our clients.
          </p>
        </div>

        <div className="glass-card">
          <h3>Our Vision</h3>
          <p>
            To be recognized as a leading global gold trading company, renowned for ethical practices, exceptional service, and international reliability.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-section">
        <h2>Why Choose Goldstrike Enterprise</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>Secure Supply Chains</h3>
            <p>Traceable and fully documented processes that ensure safe handling and timely delivery of gold.</p>
          </div>

          <div className="why-card">
            <h3>Ethical Sourcing</h3>
            <p>Responsible procurement from certified mines, respecting communities and environmental standards.</p>
          </div>

          <div className="why-card">
            <h3>Global Access</h3>
            <p>Direct connections to reputable international buyers, investors, and trading partners.</p>
          </div>

          <div className="why-card">
            <h3>Trusted Relationships</h3>
            <p>Long-term partnerships built on transparency, integrity, and consistent quality.</p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="about-section">
        <h2>Core Values</h2>
        <ul className="values-list">
          <li><strong>Integrity:</strong> Transparent and honest trading practices</li>
          <li><strong>Excellence:</strong> High standards in handling, logistics, and client service</li>
          <li><strong>Security:</strong> Safe, insured, and traceable gold transactions</li>
          <li><strong>Trust:</strong> Building long-term partnerships with clients and partners</li>
        </ul>
      </section>

      {/* TIMELINE */}
      <section className="about-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span>2010</span>
            <p>Company inception and focus on gold trading</p>
          </div>

          <div className="timeline-item">
            <span>2015</span>
            <p>Expansion into international markets and exports</p>
          </div>

          <div className="timeline-item">
            <span>2019</span>
            <p>Partnerships with global investors and refiners</p>
          </div>

          <div className="timeline-item">
            <span>Present</span>
            <p>Trusted global leader in ethical gold trading</p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="about-section">
        <h2>Our Leadership</h2>
        <div className="leadership">
          <div className="leader-card">
            <h3>Mr. Sukhram Parkash</h3>
            <span>Chief Executive Officer (CEO)</span>
            <p>Provides strategic direction, oversees global partnerships, and ensures gold trading excellence.</p>
          </div>

          <div className="leader-card">
            <h3>Mr. Francis Otundo</h3>
            <span>Managing Director</span>
            <p>Manages daily operations, client relations, and global sales to ensure seamless gold trading.</p>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="about-section">
        <h2>Strategic Partner</h2>
        <div className="partner-card">
          <div className="partner-image-wrapper">
            <img src={equinox} alt="Equinox Metal Partners" className="partner-img" />
          </div>
          <div className="partner-content">
            <h3>Equinox Metal Partners (UK)</h3>
            <p>
              Strengthening our global presence with regulatory compliance, market access, and premium gold trading partnerships.
            </p>
            <p>
              Contact: <a href="mailto:ram@equinoxmetalpartners.com">ram@equinoxmetalpartners.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* ASSURANCE */}
      <section className="about-section">
        <h2>Assurance & Compliance</h2>
        <p>
          Our gold trading operations adhere strictly to international standards, ethical sourcing, and responsible handling, 
          providing confidence, transparency, and risk mitigation for all clients and partners.
        </p>
      </section>

    </div>
  );
};

export default AboutPage;
