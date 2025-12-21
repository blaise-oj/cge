import React from "react";
import "./ProductsPage.css";
import { motion } from "framer-motion";

import computer_motherboards from "../../assets/computer-motherboards.png";
import copper_cathodes from "../../assets/copper-cathodes.png";
import computer_cpu from "../../assets/computer-cpu.png";
import electronic_motor from "../../assets/electronic-motor.png";
import aluminium_scrap from "../../assets/aluminium-scrap.png";
import aluminium_wheel from "../../assets/aluminium-wheel.png";
import lead_battery from "../../assets/lead-battery.png";
import oil_pipe from "../../assets/oil-pipe.png";
import copper_scrap from "../../assets/copper-scrap.png";
import aluminium_beverage from "../../assets/aluminium-beverage.png"
import mobile_battery from "../../assets/mobile-battery.png"
import aluminium_wire from "../../assets/aluminium-wire.png"
import scrap_ship from "../../assets/scrap-ship.png"
import scrap_plane from "../../assets/scrap-plane.png"
import aluminium_ingot from "../../assets/aluminium-ingot.png"
import premium_cotton from "../../assets/premium-cotton.png"
import sisal from "../../assets/sisal.png"
import animal_skin from "../../assets/animal-skin.png"
import aluminium_extrusion from "../../assets/aluminium-extrusion.png"
import aluminium_dross from "../../assets/aluminium-dross.png"
import scrap_brass from "../../assets/scrap-brass.png"

const ProductsPage = () => {
    return (
        <div className="products-page">
            <header className="products-header">
                <div className="products-header-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ amount: 0.3 }}
                    >Products and Services</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delayed after h1
                        viewport={{ amount: 0.3 }}
                    >
                        We supply premium quality minerals and luxury items, ensuring trusted
                        global trade and timeless value.
                    </motion.p>
                </div>
            </header>
            <section className="about-company">
                <div className="about-company-container">
                    <h2>About Goldstrike Enterprise Limited</h2>
                    <p>
                        At Goldstrike Enterprise Limited, we specialize in sourcing and exporting the highest
                        quality minerals and luxury goods worldwide. With a reputation built on
                        trust, efficiency, and excellence, our company connects industries and
                        clients across the globe, ensuring reliable supply chains and premium
                        products.
                    </p>
                    <p>
                        From precious metals like gold and silver to essential materials like
                        copper and aluminium, we deliver products that power industries and create
                        lasting value. Our commitment to integrity and quality makes us a trusted
                        partner for businesses everywhere.
                    </p>
                </div>
            </section>


            <div className="products-grid">
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={computer_motherboards} alt="Gold Ores" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Computer Motherboards</h3>
                        <p>
                            Our range of high-performance computer motherboards is designed to meet the
                            needs of both personal and enterprise computing. Built with advanced
                            architecture, durable components, and multi-layered PCB design, these
                            motherboards ensure stable connectivity, seamless compatibility, and
                            long-lasting performance. Whether powering desktops for everyday use,
                            professional workstations, or custom-built gaming PCs, our motherboards
                            provide the foundation for speed, efficiency, and reliability. Trusted by system integrators and IT professionals,
                            our motherboards combine innovation, scalability, and quality to deliver
                            unmatched computing experiences across industries.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={copper_cathodes} alt="Aluminium" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Copper Cathodes</h3>
                        <p>
                            Our premium copper cathodes are produced to the highest international
                            standards, ensuring exceptional purity, conductivity, and reliability for
                            industrial applications. With a purity level of 99.99%, these cathodes are
                            ideal for electrical wiring, power transmission, electronics manufacturing,
                            and various metallurgical processes. Each sheet is carefully refined and
                            inspected to guarantee uniform quality and consistent performance across
                            industries. Known for their durability and efficiency, our copper cathodes
                            serve as a critical raw material for manufacturers worldwide, supporting
                            construction, energy, and technology sectors. Backed by trusted logistics
                            and global export capability, we ensure timely delivery and dependable
                            supply, making our copper cathodes the preferred choice for businesses that
                            demand excellence and sustainability in their raw materials.
                        </p>
                    </motion.div>
                </motion.div>


                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={computer_cpu} alt="Silver" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Computer CPU</h3>
                        <p>
                            Our computer CPUs are engineered to deliver cutting-edge performance,
                            efficiency, and reliability across a wide range of computing needs. Built
                            with advanced semiconductor technology, these processors provide the speed
                            and multitasking power required for modern applications, from everyday
                            office productivity to high-performance gaming, content creation, and
                            enterprise-level computing. Designed with multiple cores, enhanced cache,
                            and optimized energy consumption, our CPUs ensure smooth system performance
                            while reducing power usage and heat output. Trusted by professionals,
                            businesses, and technology enthusiasts, our CPUs form the heart of powerful
                            systems that drive innovation and productivity in today’s digital world.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={electronic_motor} alt="Copper" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Electronic Motor Scrap</h3>
                        <p>
                            Our electronic motor scrap is a reliable source of recyclable metals and
                            components, making it a valuable raw material for various industries. Rich
                            in copper, aluminium, and other essential alloys, this scrap is widely used
                            in recycling and reprocessing plants to manufacture new products while
                            reducing environmental impact. Each batch is carefully sourced and inspected
                            to ensure quality, safety, and compliance with global recycling standards.
                            By supplying motor scrap, we help industries minimize costs, conserve
                            resources, and support sustainable production practices. Trusted by
                            recyclers and manufacturers worldwide, our electronic motor scrap provides
                            both economic and environmental value in today’s circular economy.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={aluminium_scrap} alt="Copper Metal" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Aluminium Block Scrap</h3>
                        <p>
                            Our aluminium block scrap is a high-quality recyclable material sourced from
                            trusted suppliers and processed to meet international standards. Rich in
                            aluminium content and free from excessive impurities, it is widely used in
                            smelting, recycling, and industrial reprocessing for the production of new
                            aluminium products. Lightweight yet durable, aluminium scrap plays a vital
                            role in reducing energy consumption and conserving natural resources during
                            manufacturing. Each batch is carefully handled, inspected, and prepared for
                            efficient melting and reuse, ensuring consistent results for our clients in
                            construction, automotive, aerospace, and packaging industries. By supplying
                            aluminium block scrap, we support sustainable production while helping
                            businesses lower costs and maintain a reliable supply of raw materials.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={aluminium_wheel} alt="Steel" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Aluminium Wheel Scrap</h3>
                        <p>
                            Our aluminium wheel scrap is a premium-grade recyclable material sourced
                            from used automotive wheels and carefully processed to ensure high aluminium
                            recovery rates. Known for its excellent purity, strength, and lightweight
                            properties, this scrap is widely utilized in smelting and reprocessing for
                            the production of new automotive parts, construction materials, and
                            industrial applications. Each batch is inspected to minimize impurities and
                            deliver consistent quality that meets international recycling standards. By
                            reusing aluminium wheel scrap, manufacturers can significantly reduce energy
                            consumption and lower raw material costs while contributing to a more
                            sustainable future. Trusted by recycling plants and industries worldwide,
                            our aluminium wheel scrap offers both economic efficiency and
                            environmental responsibility.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={lead_battery} alt="Aluminium Scrap" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Lead Drain Battery Scrap</h3>
                        <p>
                            Our lead drain battery scrap is a dependable source of recyclable lead,
                            sourced from used automotive and industrial batteries. Carefully collected
                            and processed, this scrap provides high recovery yields for smelting and
                            refining operations, ensuring consistent quality for manufacturers in the
                            battery, construction, and metallurgical industries. Each batch is handled
                            under strict environmental and safety standards to minimize hazards while
                            maximizing material recovery. Lead drain battery scrap is widely recognized
                            as a cost-effective raw material that reduces the need for virgin mining and
                            supports sustainable production practices. With trusted logistics and global
                            supply capabilities, we deliver reliable quantities of lead scrap to help
                            industries lower costs, conserve resources, and operate with greater
                            environmental responsibility.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={oil_pipe} alt="Gold Watch" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Oilfield Drill Stem Pipe</h3>
                        <p>
                            Our oilfield drill stem pipes are manufactured to meet the rigorous demands
                            of the energy and petroleum industries. Built from high-strength alloy
                            steel, these pipes are engineered for durability, pressure resistance, and
                            reliable performance in challenging drilling environments. They provide
                            exceptional tensile strength, corrosion resistance, and fatigue endurance,
                            making them ideal for both onshore and offshore drilling operations. Each
                            pipe is carefully inspected and certified to international standards,
                            ensuring safety, consistency, and long service life. With trusted global
                            supply and logistics, we provide oilfield drill stem pipes that help
                            companies optimize drilling efficiency, reduce downtime, and achieve
                            sustainable performance in energy exploration and production projects.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={copper_scrap} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Copper Scrap</h3>
                        <p>
                            Our copper scrap is a high-grade recyclable material widely used in
                            smelting, refining, and industrial manufacturing. Rich in copper content and
                            carefully processed to reduce impurities, it serves as a cost-effective raw
                            material for producing new copper products such as wiring, tubing, and
                            industrial components. Copper scrap is essential in conserving natural
                            resources and significantly lowering energy consumption compared to
                            extracting virgin copper. Each batch is sourced and inspected under strict
                            standards to ensure consistent quality and reliable recovery rates,
                            supporting industries such as construction, power generation,
                            telecommunications, and electronics. By supplying copper scrap globally, we
                            help manufacturers maintain steady production while promoting
                            sustainability and reducing environmental impact.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={aluminium_beverage} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Aluminium UBC Beverage C.</h3>
                        <p>
                            Our aluminium UBC (Used Beverage Cans) scrap is a high-quality recyclable
                            material collected from post-consumer beverage cans and processed to ensure
                            excellent purity and recovery rates. Lightweight, durable, and endlessly
                            recyclable, aluminium UBC scrap is a preferred raw material for smelters and
                            manufacturers producing new cans, packaging materials, automotive parts, and
                            industrial products. Recycling UBCs not only conserves natural resources but
                            also saves significant amounts of energy compared to producing aluminium
                            from primary sources. Each batch is sorted, cleaned, and prepared under
                            strict quality control to deliver reliable, consistent results for
                            industrial reuse. By supplying aluminium UBC scrap, we support circular
                            economy practices, helping industries reduce costs while contributing to a
                            more sustainable and environmentally responsible future.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={aluminium_wire} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Aluminium Wire Scrap</h3>
                        <p>
                            Our aluminium wire scrap is a valuable raw material widely used in recycling
                            and industrial reprocessing. Known for its excellent conductivity,
                            lightweight properties, and corrosion resistance, aluminium wire scrap is
                            highly sought after in the electrical, automotive, construction, and
                            manufacturing industries. Each batch is carefully sourced, sorted, and
                            processed to ensure high aluminium content and minimal impurities, making it
                            an efficient and cost-effective alternative to primary aluminium. Recycling
                            aluminium wire not only reduces energy consumption but also contributes to
                            environmental sustainability by minimizing waste and conserving natural
                            resources. Trusted by smelters and manufacturers worldwide, our aluminium
                            wire scrap provides consistent quality and dependable supply for a wide
                            range of industrial applications.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={mobile_battery} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Android Mobile Batteries</h3>
                        <p>
                            Our Android mobile batteries are high-quality, reliable power solutions
                            designed to deliver long-lasting performance for a wide range of smartphone
                            models. Built with advanced lithium-ion technology, these batteries provide
                            excellent energy density, fast charging capability, and consistent power
                            output to keep devices running smoothly throughout the day. Each unit is
                            rigorously tested for safety, durability, and compatibility, ensuring
                            protection against overcharging, overheating, and short circuits. Suitable
                            for replacements, refurbishments, and wholesale distribution, our batteries
                            meet strict international quality standards and are trusted by retailers,
                            service centers, and resellers worldwide. By supplying dependable Android
                            mobile batteries, we help customers extend device lifespans, reduce
                            electronic waste, and enjoy uninterrupted mobile connectivity.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={aluminium_extrusion} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Aluminium Extrusion Scrap for Export</h3>
                        <p>
                            Our aluminium extrusion scrap for export is a high-quality recyclable
                            material sourced from industrial profiles, window frames, structural
                            sections, and other extrusion products. Known for its purity and excellent
                            re-melting efficiency, this scrap is widely utilized in the production of
                            new aluminium sheets, rods, bars, and construction materials. Carefully
                            collected, sorted, and processed to meet international standards, our
                            aluminium extrusion scrap ensures minimal contamination and consistent
                            performance for smelters and manufacturers worldwide. By recycling extrusion
                            scrap, industries benefit from reduced energy consumption and lower
                            production costs compared to sourcing primary aluminium, while also
                            contributing to global sustainability efforts. With reliable logistics and
                            export services, we provide bulk quantities of aluminium extrusion scrap to
                            support clients across diverse sectors, including construction,
                            transportation, and manufacturing.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={aluminium_dross} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Aluminium Dross</h3>
                        <p>
                            Our aluminium dross is a valuable by-product of the aluminium smelting and
                            casting process, offering excellent potential for recycling and metal
                            recovery. Rich in aluminium content, it is widely used by secondary
                            smelters and recycling facilities to extract reusable aluminium for
                            manufacturing new products. Carefully collected and processed, our dross
                            helps industries reduce raw material costs while supporting environmental
                            sustainability by minimizing waste. Aluminium dross plays an important role
                            in the circular economy, enabling efficient resource utilization and energy
                            savings compared to producing aluminium from primary sources. With trusted
                            logistics and reliable global supply, we provide consistent quantities of
                            aluminium dross to meet the needs of recyclers and manufacturers across
                            various industries, including automotive, construction, and packaging.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={scrap_brass} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Scrap Brass for Export</h3>
                        <p>
                            Our scrap brass for export is a high-quality recyclable material sourced
                            from pipes, fittings, valves, and industrial components, carefully processed
                            to ensure excellent purity and consistency. Known for its durability,
                            corrosion resistance, and versatility, brass scrap is widely used in
                            remelting and manufacturing applications, including plumbing, electrical,
                            decorative items, and precision instruments. Each batch is inspected and
                            sorted to meet international standards, guaranteeing reliable performance
                            for smelters and manufacturers across global markets. Recycling brass not
                            only reduces costs and conserves natural resources but also lowers energy
                            consumption compared to producing brass from virgin materials. With
                            efficient logistics and large-scale export capability, we supply bulk
                            quantities of scrap brass to industries worldwide, supporting both economic
                            value and sustainable manufacturing practices.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={scrap_ship} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Scrap Ships for Exports</h3>
                        <p>
                            Our scrap ships for export are sourced from decommissioned vessels and
                            maritime equipment, offering a rich supply of recyclable steel, non-ferrous
                            metals, and reusable components. Carefully dismantled and processed in line
                            with international recycling and environmental standards, these ships
                            provide an excellent source of raw materials for smelting and industrial
                            manufacturing. Ship scrap is highly valued for its bulk steel content,
                            contributing to cost savings and energy reduction compared to producing
                            steel from primary ores. Each shipment is inspected for quality, safety, and
                            compliance to ensure consistent and reliable supply to global markets. By
                            exporting scrap ships, we support industries such as construction,
                            shipbuilding, heavy machinery, and infrastructure development, while
                            promoting sustainable recycling practices and efficient resource
                            utilization. With strong logistics and worldwide delivery capabilities, our
                            scrap ship exports provide trusted solutions for large-scale industrial
                            demand.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={scrap_plane} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Scrap Plane for Exports</h3>
                        <p>
                            Our scrap planes for export are sourced from retired and decommissioned
                            aircraft, providing a high-value mix of recyclable metals and components.
                            Aircraft scrap contains significant quantities of aluminium, titanium,
                            copper, and high-grade alloys, making it an essential resource for
                            smelters, foundries, and manufacturing industries worldwide. Each unit is
                            dismantled and processed in accordance with international recycling and
                            safety standards, ensuring clean, sorted, and reusable materials. Exporting
                            scrap planes helps industries reduce dependence on primary raw materials,
                            cut energy costs, and promote sustainable resource management. With
                            consistent quality, bulk availability, and reliable global logistics, our
                            scrap plane exports meet the demands of sectors such as aerospace, automotive,
                            construction, and heavy engineering, supporting both industrial efficiency
                            and environmental responsibility.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={aluminium_ingot} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Aluminium Ingot for Exports</h3>
                        <p>
                            Our aluminium ingots for export are produced from carefully refined and
                            processed aluminium, ensuring exceptional purity, strength, and durability
                            to meet international standards. Aluminium ingots are highly versatile and
                            serve as a primary raw material for industries such as automotive,
                            aerospace, construction, packaging, and electronics. Known for their
                            lightweight properties, corrosion resistance, and recyclability, these
                            ingots are widely used in the manufacturing of sheets, wires, extrusions,
                            and other finished aluminium products. Each batch is quality-tested to
                            guarantee consistency, making them ideal for both remelting and direct
                            industrial applications. By offering aluminium ingots in bulk quantities, we
                            provide reliable and cost-effective solutions for global manufacturers,
                            while also supporting sustainability efforts through efficient recycling and
                            reduced environmental impact. With strong logistics and timely delivery, our
                            aluminium ingots are trusted by industries worldwide for dependable supply
                            and long-term value.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={premium_cotton} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Premium Cotton for Exports</h3>
                        <p>
                            Our premium cotton for export is sourced from trusted growers and carefully
                            processed to meet the highest international quality standards. Known for its
                            softness, durability, and natural purity, this cotton is ideal for use in
                            textiles, garments, home furnishings, and industrial applications. Premium
                            cotton fibers are highly absorbent, breathable, and hypoallergenic, making
                            them a preferred choice for luxury clothing and high-quality fabric
                            production. Each batch is carefully graded, cleaned, and packaged to ensure
                            consistency in color, fiber length, and texture. By exporting premium cotton
                            in bulk, we provide reliable supply to textile mills, fashion houses, and
                            manufacturers worldwide, supporting the production of fine-quality fabrics
                            and sustainable products. With strong logistics, competitive pricing, and a
                            commitment to eco-friendly practices, our premium cotton exports deliver
                            value, reliability, and excellence to global markets.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={sisal} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Sisal for Export</h3>
                        <p>
                            Our sisal for export is sourced from high-quality, natural fibers grown in
                            sustainable plantations and processed to meet strict international
                            standards. Sisal is a strong, durable, and versatile natural fiber widely
                            used in the production of ropes, mats, carpets, handicrafts, and a variety
                            of industrial applications such as buffing cloths and reinforcement
                            materials. Known for its excellent tensile strength, biodegradability, and
                            resistance to saltwater, sisal remains a preferred material for both
                            traditional and modern industries. Each batch is carefully graded, cleaned,
                            and packaged to ensure long fibers, uniform texture, and dependable
                            performance. By offering sisal in bulk quantities, we serve the needs of
                            manufacturers, artisans, and exporters worldwide. With competitive pricing,
                            consistent quality, and reliable logistics, our sisal exports provide a
                            natural, eco-friendly, and sustainable solution for diverse applications in
                            global markets.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="product-card"
                    initial={{ opacity: 0, rotateY: -90 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={animal_skin} alt="Diamond Ring" />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // starts below
                        whileInView={{ opacity: 1, y: 0 }} // slides up
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // delay so it starts after the rotation
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>Premium Animal Skin And Hides for Export</h3>
                        <p>
                            Our premium animal skins and hides for export are carefully sourced,
                            processed, and graded to meet the highest international standards of the
                            leather industry. Known for their durability, flexibility, and natural
                            texture, these hides are widely used in the production of leather goods such
                            as shoes, bags, belts, furniture, and automotive upholstery. Each hide is
                            thoroughly inspected to ensure quality, free from defects, and properly
                            treated to preserve its strength and longevity. With eco-friendly tanning
                            and processing techniques, we guarantee hides that are not only reliable but
                            also sustainable. We supply a wide variety of skins, tailored to meet the
                            needs of global manufacturers and fashion houses. By offering premium hides
                            in bulk, we provide consistent supply, competitive pricing, and reliable
                            logistics that support long-term partnerships across the global market.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductsPage;
