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


                <div className="wrap">
                    <div className="services-hero__content">
                        <span className="label reveal">Experience Excellence — Epic Events & Promotion</span>
                        <h1 className="services-hero__h1 reveal">
                            Turning <em className="italic-gold">Vision</em> into <br />
                            Flawless Reality.
                        </h1>
                        <p className="services-hero__p reveal">
                            Founded in 2023 by Ranbir Singh, we bring 12+ years of industry experience to every project. From grand-scale public festivals to intimate personal milestones, we ensure every event is extraordinary.
                        </p>
                    </div>
                </div>
            </section>

            <div className="services-featured reveal">
                <div className="wrap">
                    <div className="featured-card glass">
                        <div className="featured-card__img">
                            <img src="/assets/c1.jpg" alt="Government Events" />
                            <div className="photo-tag">Mass-Scale Excellence</div>
                        </div>
                        <div className="featured-card__text">
                            <h3>Pan-India Mega Productions & Corporate Scale</h3>
                            <p>Managing events for 5,000+ attendees with a 360° network spread across the country. Our reach and expertise allow us to handle events of any scale with consistency.</p>
                            <ul className="spec-list">
                                <li>✦ Government Gala Events</li>
                                <li>✦ High-Profile Corporate Summits</li>
                                <li>✦ Strategic Brand Activations</li>
                                <li>✦ Election Campaign Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Services
                title="Our Event Domains"
                description="We offer a wide range of event management services tailored to your specific needs, ensuring professional execution no matter the location."
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
                    <div className="cta-banner__inner">
                        <h2 className="cta-banner__h2">Ready to <em className="italic-gold">Organize</em> Your Experience?</h2>
                        <div className="cta-banner__actions">
                            <button className="btn-dark">Access the Bureau</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
