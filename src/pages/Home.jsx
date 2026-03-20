import Hero from '../components/Hero';
import Services from '../components/Services';
import HighlightsEditorial from '../components/HighlightsEditorial';
import './Home.css';

const testimonials = [
    { name: 'Aditi V.', event: 'Public Gala · Lucknow', quote: "Epic Events managed our large-scale public event with absolute professionalism. Their execution is flawless." },
    { name: 'Karan Mehra', event: 'Corporate Summit · Pan-India', quote: "The most seamless corporate production we've ever had. Their team is dedicated and highly skilled." },
    { name: 'Sara Khan', event: 'Royal Wedding · Wedding Planning', quote: "They turned our vision into a dream reality. Every detail was perfect, and the experience was truly memorable." },
];

const Home = () => (
    <main className="home">
        <Hero />

        {/* Philosophy Pull-Quote */}
        <section className="philosophy-pull wrap section-pad">
            <h2 className="pull-h2">
                "We don't just manage events — <em className="italic-gold">we create experiences</em> that people remember."
            </h2>
            <div className="pull-author">— Epic Events & Promotion Perspective</div>
        </section>

        {/* Exhibition Shard Preview */}
        <HighlightsEditorial />

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
                    <a href="/contact" className="btn-dark" style={{ fontSize: '0.85rem' }}>Start Planning Your Event ↗</a>
                    <a href="tel:+917905219157" className="btn-outline-dark" style={{ fontSize: '0.85rem' }}>Call Us Now</a>
                </div>
            </div>
        </section>
    </main>
);

export default Home;
