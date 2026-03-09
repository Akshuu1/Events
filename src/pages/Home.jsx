import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import './Home.css';

const testimonials = [
    { name: 'Priya M.', event: 'Wedding · Udaipur Logistics', quote: "LUMIÈRE managed our 800-guest palace wedding with zero latency. Their logistics team is unmatched." },
    { name: 'Raj Sharma', event: 'Corporate Summit · Mumbai', quote: "The strategic planning and vendor coordination was flawless. They handled the high-stakes production with ease." },
    { name: 'Anita K.', event: 'Global Gala · Dubai', quote: "Their ability to coordinate international teams and jurisdictions saved us weeks of stress. Elite management." },
];

const Home = () => (
    <main className="home">
        <Hero />

        {/* Management Excellence Pivot */}
        <Services
            title="Management Excellence"
            description="Elite event management is about the invisible machinery. We provide total logistical oversight, vendor synchronized coordination, and high-pressure production management."
        />

        {/* Philosophy Pull-Quote */}
        <section className="philosophy-pull wrap section-pad">
            <div className="pull-card reveal">
                <span className="label">The Mandate</span>
                <h2 className="pull-h2">
                    "Control is not about <em className="italic-gold">dominance</em>, it is about <em className="italic-gold">predictability</em> in the face of chaos."
                </h2>
                <div className="pull-author">— LUMIÈRE Management Doctrine</div>
            </div>
        </section>

        {/* Exhibition Shard Preview */}
        <Gallery
            title="The Exhibition"
            description="A glimpse into the complex logistical triumphs of our management team. From multi-day international summits to high-security private milestones."
            limit={2}
        />

        {/* The Management Legacy — New v12 Section */}
        <section className="legacy-section wrap section-pad">
            <div className="legacy-grid">
                <div className="legacy-shard legacy-shard--left reveal">
                    <span className="label">18 Year Operational History</span>
                    <h2 className="legacy-h2">A Legacy Of <br /><em className="italic-gold">Unseen</em> Precision.</h2>
                    <p className="legacy-p">
                        Founded in 2008, LUMIÈRE began as a small logistics collective in Mumbai. Today, we are a global production powerhouse, managing the world's most complex celebrations. Our legacy is built on the rigorous technical standards of our founders — where every millisecond of an event is architected.
                    </p>
                    <div className="legacy-stats">
                        <div className="legacy-stat">
                            <strong>18y</strong>
                            <span>Operational Age</span>
                        </div>
                        <div className="legacy-stat">
                            <strong>4k+</strong>
                            <span>Global Network</span>
                        </div>
                    </div>
                </div>
                <div className="legacy-shard legacy-shard--right reveal" style={{ transitionDelay: '0.2s' }}>
                    <div className="legacy-img-wrap">
                        <img src="/assets/hero.png" alt="Legacy Production" className="legacy-img" />
                        <div className="legacy-img-overlay"></div>
                        <div className="legacy-tag">Archive: 2024 International Summit</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Management Testimonials */}
        <section className="testimonials">
            <div className="wrap">
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="label">Logistics Verified</span>
                    <h2 style={{ fontSize: 'clamp(2rem,3vw,3rem)' }}>Strategic <em className="italic-gold">Testimonials.</em></h2>
                </div>
                <div className="testi-grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testi-card reveal">
                            <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
                            <div className="testi-meta">
                                <strong>{t.name}</strong> · <span>{t.event}</span>
                            </div>
                            <div className="testi-stars">★★★★★</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Management CTA */}
        <section className="cta-banner">
            <div className="wrap cta-banner__inner">
                <div>
                    <span className="label">Initialize Logistics</span>
                    <h2 className="cta-banner__h2">Secure Your <br /><em className="italic-gold">Operational Success.</em></h2>
                    <p>Contact our senior production directors to begin mapping the logistics of your upcoming milestone.</p>
                </div>
                <div className="cta-banner__actions">
                    <a href="/contact" className="btn-dark" style={{ fontSize: '0.85rem' }}>Start Production Mapping ↗</a>
                    <a href="tel:+919876543210" className="btn-outline-dark" style={{ fontSize: '0.85rem' }}>Logistics Line</a>
                </div>
            </div>
        </section>
    </main>
);

export default Home;
