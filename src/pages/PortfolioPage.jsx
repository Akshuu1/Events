import { useEffect } from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="portfolio-v13">
            {/* 1. Integrated Hero & Founder Profile */}
            <section className="v13-hero section-pad">
                <div className="wrap v13-hero__grid">
                    <div className="v13-hero__content reveal">
                        <span className="label">The Corporate Legacy</span>
                        <h1 className="v13-h1">A Decade Of <br /><em className="italic-gold">Extraordinary</em> <br />Impact.</h1>
                        <p className="v13-p">
                            Founded by <strong className="rose">Ranbir Singh</strong> in 2023, Epic Events & Promotion stands as a pinnacle of event production, built on 12+ years of elite industry mastery across India.
                        </p>
                        <div className="v13-hero__metrics">
                            <div className="v13-metric">
                                <strong>1800+</strong>
                                <span>Milestones</span>
                            </div>
                            <div className="v12-dash"></div>
                            <div className="v13-metric">
                                <strong>100%</strong>
                                <span>Precision</span>
                            </div>
                        </div>
                    </div>
                    <div className="v13-hero__img-shard reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="shard-frame"></div>
                        <img src="/assets/profile.jpg" alt="Ranbir Singh - Founder of Epic Events & Promotion" className="v13-founder-img" />
                        <div className="img-overlay-dark"></div>
                        <div className="shard-tag">RANBIR SINGH · FOUNDER</div>
                    </div>
                </div>
            </section>

            {/* 2. Strategic Dashboard — Compact DNA */}
            <section className="v13-dna section-pad">
                <div className="wrap">
                    <div className="v13-dna__header reveal">
                        <h2 className="v13-h2">The <em className="italic-gold">Operational</em> DNA.</h2>
                        <div className="v12-dash"></div>
                    </div>
                    <div className="v13-dna__grid">
                        <div className="v13-dna__card reveal">
                            <div className="card-top">
                                <span className="label">Scale</span>
                                <h3>Pan-India 360° Network</h3>
                            </div>
                            <p>Teams and resources spread across the country, ensuring seamless execution in any geography.</p>
                        </div>
                        <div className="v13-dna__card reveal" style={{ transitionDelay: '0.1s' }}>
                            <div className="card-top">
                                <span className="label">Method</span>
                                <h3>Military-Grade Logistics</h3>
                            </div>
                            <p>High-pressure coordination synchronized with second-by-second technical mapping.</p>
                        </div>
                        <div className="v13-dna__card reveal" style={{ transitionDelay: '0.2s' }}>
                            <div className="card-top">
                                <span className="label">Execution</span>
                                <h3>Strategic Planning</h3>
                            </div>
                            <p>Managing complexity from multi-day public summits to high-profile brand activations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Domains & Sectors — Compact Grid */}
            <section className="v13-domains section-pad">
                <div className="wrap v13-domains__grid reveal">
                    <div className="v13-domains__title">
                        <h2 className="v13-h2">Sectors Of <br /><em className="italic-gold">Mastery.</em></h2>
                    </div>
                    <div className="v13-domains__list">
                        {['Government', 'Corporate', 'Weddings', 'Campaigns', 'Personal'].map((d) => (
                            <div key={d} className="v13-domain-tag">
                                <span className="dot">✦</span>
                                <span>{d}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Philosophy Quote — Clean & Modern */}
            <section className="v13-philosophy reveal">
                <div className="wrap">
                    <div className="v13-phil-card glass">
                        <h3 className="v13-phil-h3">
                            "Our approach is simple — to turn every vision into a <em className="italic-gold">flawlessly</em> executed reality."
                        </h3>
                        <div className="pill-author">— Ranbir Singh, Founder</div>
                    </div>
                </div>
            </section>

            {/* 5. Final CTA — Streamlined */}
            <section className="v13-cta section-pad">
                <div className="wrap">
                    <div className="v13-cta-inner reveal">
                        <h2 className="v13-cta-h2">Initialize Your <em className="italic-gold">Next Milestone</em> with Us.</h2>
                        <div className="v13-cta__btns">
                            <a href="/contact" className="btn-dark">Consult Our Office ↗</a>
                            <a href="/services" className="btn-outline-dark">Explore Services</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
