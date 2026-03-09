import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import './Home.css';

const testimonials = [
    { name: 'Aditi V.', event: 'Royal Wedding · Udaipur Logistics', quote: "LUMIÈRE managed our 1,200-guest wedding across multiple venues with zero latency. Their organizing team is peerless." },
    { name: 'Karan Mehra', event: 'Tech Summit · Mumbai Production', quote: "The most complex corporate production we've ever successfully executed. Their vendor management and on-site control is elite." },
    { name: 'Sara Khan', event: 'Global Gala · Dubai Coordination', quote: "Elegance, precision, and flawless logistical oversight. LUMIÈRE is the standard for high-stakes event coordination." },
];

const Home = () => (
    <main className="home">
        <Hero />

        {/* Management Excellence Pivot */}
        <Services
            title="Organizing Excellence"
            description="Elite event production is about the invisible machinery. We provide total logistical oversight, synchronized coordination, and high-pressure project management."
        />

        {/* Philosophy Pull-Quote */}
        <section className="philosophy-pull wrap section-pad">
            <h2 className="pull-h2">
                "Organizing is not about <em className="italic-gold">command</em>, it is about <em className="italic-gold">predictability</em> in the face of complex variables."
            </h2>
            <div className="pull-author">— LUMIÈRE Management Doctrine</div>
        </section>

        {/* Exhibition Shard Preview */}
        <Gallery
            title="The Archive"
            description="A glimpse into the complex logistical triumphs of our organizing team. From multi-day international summits to high-security private milestones."
            limit={2}
        />

        {/* The Management Legacy — New v12 Section */}
        <section className="legacy-section wrap section-pad">
            <div className="legacy-grid">
                <div className="legacy-shard legacy-shard--left reveal">
                    <span className="label">18 Year Operational History</span>
                    <h2 className="legacy-h2">A Legacy Of <br /><em className="italic-gold">Technical</em> Precision.</h2>
                    <p className="legacy-p">
                        Founded in 2008, LUMIÈRE began as a small logistics collective in Mumbai. Today, we are a global production powerhouse, organizing the world's most complex celebrations. Our legacy is built on the rigorous technical standards of our founders — where every millisecond of an event is architected.
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
                    <h2 style={{ fontSize: 'clamp(2rem,3vw,3rem)' }}>Exceptional <em className="italic-gold">Success Rate.</em></h2>
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
                    <a href="tel:+919876543210" className="btn-outline-dark" style={{ fontSize: '0.85rem' }}>Management Line</a>
                </div>
            </div>
        </section>
    </main>
);

export default Home;
