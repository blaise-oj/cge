import "./AboutPage.css";
import equinox from "../../assets/equinox.png"

const AboutPage = () => {
    return (
        <div className="about-page">

            {/* HERO */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>About Us</h1>
                    <p>
                        From the Earth to the World — Ethical Sourcing, Global Trade,
                        and Trusted Value in Precious and Industrial Metals.
                    </p>
                </div>
            </section>


            {/* COMPANY STORY */}
            <section className="about-section">
                <h2>Who We Are</h2>
                <p>
                    Goldstrike Enterprise Limited is a professionally managed company
                    specializing in the sourcing, trading, and international supply of
                    precious and industrial metals. Our operations are guided by
                    integrity, transparency, and responsible resource management.
                </p>
                <p>
                    With a strong focus on gold, silver, and other high-value minerals,
                    we connect resource-rich regions with reputable global markets
                    through well-structured and compliant supply chains.
                </p>
                <p>
                    Our commitment to quality assurance, dependable logistics, and
                    ethical sourcing makes us a trusted partner for clients seeking
                    reliability and long-term value.
                </p>
            </section>

            {/* STATS */}
            <section className="stats-section">
                <div className="stat">
                    <h3>10+</h3>
                    <p>Years of Industry Experience</p>
                </div>
                <div className="stat">
                    <h3>5+</h3>
                    <p>Active Global Markets</p>
                </div>
                <div className="stat">
                    <h3>100%</h3>
                    <p>Ethical & Responsible Sourcing</p>
                </div>
                <div className="stat">
                    <h3>Trusted</h3>
                    <p>International Trade Partners</p>
                </div>
            </section>

            {/* WHAT WE DO */}
            <section className="about-section">
                <h2>What We Do</h2>
                <p>
                    We provide end-to-end solutions in mineral sourcing and trading,
                    covering responsible procurement, quality verification,
                    documentation, logistics coordination, and international delivery.
                </p>
                <p>
                    By working closely with suppliers, regulators, and global partners,
                    we ensure every transaction meets international standards and
                    client expectations.
                </p>
            </section>

            {/* MISSION & VISION */}
            <section className="about-section grid-two">
                <div className="glass-card">
                    <h3>Our Mission</h3>
                    <p>
                        To responsibly source and supply premium-quality minerals while
                        creating sustainable value for our clients, partners, and
                        communities.
                    </p>
                </div>

                <div className="glass-card">
                    <h3>Our Vision</h3>
                    <p>
                        To be a globally recognized leader in ethical mineral trading,
                        known for transparency, reliability, and long-term partnerships.
                    </p>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="about-section">
                <h2>Why Choose Goldstrike Enterprise Limited</h2>

                <div className="why-grid">
                    <div className="why-card">
                        <h3>Reliable Supply Chains</h3>
                        <p>
                            Structured, traceable, and transparent supply chains that ensure
                            consistency and timely delivery.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Ethical & Responsible Sourcing</h3>
                        <p>
                            Strong commitment to ethical sourcing that respects communities,
                            regulations, and environmental standards.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Global Market Access</h3>
                        <p>
                            Strategic international partnerships providing access to
                            reputable global buyers and markets.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Trusted Partnerships</h3>
                        <p>
                            Long-term relationships built on transparency, trust,
                            and shared growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="about-section">
                <h2>Core Values</h2>
                <ul className="values-list">
                    <li><strong>Integrity:</strong> Honest, transparent, and accountable operations</li>
                    <li><strong>Responsibility:</strong> Ethical sourcing and environmental awareness</li>
                    <li><strong>Excellence:</strong> High standards in service, quality, and execution</li>
                    <li><strong>Partnership:</strong> Long-term, mutually beneficial relationships</li>
                </ul>
            </section>

            {/* TIMELINE */}
            <section className="about-section">
                <h2>Our Journey</h2>

                <div className="timeline">
                    <div className="timeline-item">
                        <span>2015</span>
                        <p>Company establishment and entry into mineral sourcing</p>
                    </div>

                    <div className="timeline-item">
                        <span>2018</span>
                        <p>Expansion into international trade and exports</p>
                    </div>

                    <div className="timeline-item">
                        <span>2021</span>
                        <p>Strategic partnerships and operational growth</p>
                    </div>

                    <div className="timeline-item">
                        <span>Present</span>
                        <p>Strengthening global partnerships and market presence</p>
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section className="about-section">
                <h2>Our Management</h2>

                <div className="leadership">
                    <div className="leader-card">
                        {/*<img src={ceoImg} alt="Mr. Sukhram Parkash" className="leader-img" />*/}
                        <h3>Mr. Sukhram Parkash</h3>
                        <span>Chief Executive Officer (CEO)</span>
                        <p>
                            Provides strategic leadership, oversees international partnerships,
                            and drives long-term corporate growth with a global vision.
                        </p>
                    </div>

                    <div className="leader-card">
                        {/*<img src={mdImg} alt="Mr. Francis Otundo" className="leader-img" />*/}
                        <h3>Mr. Francis Otundo</h3>
                        <span>Managing Director</span>
                        <p>
                            Oversees daily operations, trade execution, and client engagement
                            to ensure operational excellence and compliance.
                        </p>
                    </div>
                </div>
            </section>

            {/* PARTNER */}
            <section className="about-section">
                <h2>Strategic Partnership</h2>

                <div className="partner-card">

                    {/* PARTNER IMAGE */}
                    <div className="partner-image-wrapper">
                        <img
                            src={equinox}
                            alt="Equinox Metal Partners"
                            className="partner-img"
                        />
                    </div>

                    {/* PARTNER CONTENT */}
                    <div className="partner-content">
                        <h3>Equinox Metal Partners (United Kingdom)</h3>
                        <p>
                            Equinox Metal Partners is our UK-based parent partner company,
                            strengthening our international presence through global market
                            access, regulatory compliance, and trade execution. Contact our parent partner from the email below:
                        </p>
                        <p>
                            Email:{" "}
                            <a href="mailto:ram@equinoxmetalpartners.com">
                                ram@equinoxmetalpartners.com
                            </a>
                        </p>
                    </div>

                </div>
            </section>
            {/* CERTIFICATIONS */}
            <section className="about-section">
                <h2>Assurance</h2>
                <p>
                    Our operations align with applicable international mining, trade,
                    and export regulations, supported by thorough documentation and
                    quality verification.
                </p>
                <p>
                    This ensures confidence, transparency, and risk mitigation for all
                    clients and partners.
                </p>
            </section>

            {/* COMPLIANCE */}
            <section className="about-section">
                <h2>Compliance, Ethics & Sustainability</h2>
                <p>
                    We adhere to responsible sourcing practices, transparent supply
                    chains, and environmentally conscious operations.
                </p>
                <p>
                    By prioritizing compliance and ethical standards, we safeguard
                    the integrity of the global metals trade and protect all stakeholders.
                </p>
            </section>

        </div>
    );
};

export default AboutPage;
