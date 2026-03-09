import { useEffect } from 'react';
import Services from '../components/Services';
import './ServicesPage.css';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services-page">
            <section className="services-hero">
                {/* Floating Background Shards */}
                <div className="services-hero__bg-shards">
                    <div className="bg-shard bg-shard--1"></div>
                    <div className="bg-shard bg-shard--2"></div>
                </div>

                <div className="wrap">
                    <div className="services-hero__content">
                        <span className="label reveal">The Production Atelier</span>
                        <h1 className="services-hero__h1 reveal">
                            The <em className="italic-gold">Manual</em> of <br />
                            Grand Production.
                        </h1>
                        <p className="services-hero__p reveal">
                            Welcome to the workshop. Here, we break down the complex machinery of event architecture. Explore our tiered capabilities and the rigorous technical standards we apply to every single production.
                        </p>
                    </div>
                </div>
            </section>

            <div className="services-featured reveal">
                <div className="wrap">
                    <div className="featured-card glass"
                        onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; requestAnimationFrame(() => { e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`; }); }}
                        onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                    >
                        <div className="featured-card__img">
                            <img src="/assets/corporate.png" alt="Corporate Architecture" />
                            <div className="photo-tag">Technical Prowess</div>
                        </div>
                        <div className="featured-card__text">
                            <h3>Mass-Scale Operational Multi-Units</h3>
                            <p>Organizing events for 5,000+ attendees requires more than just planning; it requires structural engineering. Our team delivers zero-latency tech and massive spatial flows.</p>
                            <ul className="spec-list">
                                <li>✦ 3D Crowd Flow Dynamics</li>
                                <li>✦ Kinetic Stage Engineering</li>
                                <li>✦ Adaptive Lighting Networks</li>
                                <li>✦ Real-time Production Sync</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Services
                title="Operational Tiers"
                description="Our multi-layered service model ensures that whether you are hosting an intimate boardroom dinner or a stadium-level concert, the quality of execution remains elite."
            />

            <section className="service-philosophy section-pad">
                <div className="wrap silicon-grid">
                    <div className="philosophy-item reveal">
                        <span className="large-num">Tier A</span>
                        <h4>Global Logistics</h4>
                        <p>Full-scale international mobilization with dedicated logistics crews and local jurisdiction experts.</p>
                    </div>
                    <div className="philosophy-item reveal" style={{ transitionDelay: '0.2s' }}>
                        <span className="large-num">Tier B</span>
                        <h4>Production Mapping</h4>
                        <p>Pure technical strategy, site mapping, and operational planning for third-party execution.</p>
                    </div>
                    <div className="philosophy-item reveal" style={{ transitionDelay: '0.4s' }}>
                        <span className="large-num">Tier C</span>
                        <h4>Operational Consulting</h4>
                        <p>Senior-level project management for large corporate entities looking for internal event oversight.</p>
                    </div>
                </div>
            </section>

            <section className="cta-banner reveal">
                <div className="wrap">
                    <h2>Ready to <em className="italic-gold">Organize</em> Your Experience?</h2>
                    <button className="btn-dark">Access the Bureau</button>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
