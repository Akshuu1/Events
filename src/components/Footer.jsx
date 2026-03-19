import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <footer className="footer-v11">
        {/* Massive Background Display */}
        <div className="footer-v11__bg-text">EPIC</div>

        <div className="footer-v11__top section-pad">
            <div className="wrap footer-v11__grid">

                {/* Brand Shard */}
                <div className="footer-v11__shard footer-v11__shard--brand reveal">
                    <div className="footer-v11__logo">
                        <span className="logo-star">✦</span>
                        <div className="logo-wrap">
                            <span className="name">EPIC</span>
                            <span className="sub">EVENTS AND PROMOTION</span>
                        </div>
                    </div>
                    <p className="footer-v11__lead">
                        Turning every vision into a flawlessly executed reality. Delivering extraordinary experiences across India.
                    </p>
                    <div className="footer-v11__social-shards">
                        {['IG', 'PI', 'LI', 'YT'].map(s => (
                            <a key={s} href="#" className="social-shard">{s}</a>
                        ))}
                    </div>
                </div>

                {/* Services Shard */}
                <div className="footer-v11__shard reveal" style={{ transitionDelay: '0.1s' }}>
                    <h4 className="footer-v11__h4">Events</h4>
                    <ul className="footer-v11__list">
                        {['Government Events', 'Corporate Gatherings', 'Grand Weddings', 'Election Campaigns', 'Personal Events'].map(item => (
                            <li key={item}><Link to="/services">{item}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* HQ Shard */}
                <div className="footer-v11__shard reveal" style={{ transitionDelay: '0.2s' }}>
                    <h4 className="footer-v11__h4">Main Office</h4>
                    <div className="footer-v11__address">
                        <div className="hq-item">
                            <strong>Lucknow</strong>
                            <span>Headquarters</span>
                        </div>
                        <div className="hq-item">
                            <strong>Pan-India</strong>
                            <span>Operational Network</span>
                        </div>
                    </div>
                </div>

                {/* Contact Shard */}
                <div className="footer-v11__shard footer-v11__shard--cta reveal" style={{ transitionDelay: '0.3s' }}>
                    <h4 className="footer-v11__h4">Inquiries</h4>
                    <p className="footer-v11__p">Ready to create something memorable?</p>
                    <a href="mailto:epicevents92@gmail.com" className="footer-v11__email">epicevents92@gmail.com</a>
                    <a href="tel:+917905219157" className="footer-v11__email" style={{ display: 'block', marginTop: '0.5rem' }}>+91 79052 19157</a>
                    <Link to="/contact" className="btn-v11-shard">
                        <span>Contact Us</span>
                        <span className="arrow">→</span>
                    </Link>
                </div>

            </div>
        </div>

        <div className="footer-v11__bottom">
            <div className="wrap footer-v11__bottom-inner">
                <div className="legal">
                    <span>© 2026 EPIC EVENTS AND PROMOTION</span>
                    <span className="sep">|</span>
                    <span>LUCKNOW, INDIA</span>
                </div>
                <div className="credits">
                    CRAFTING EXTRAORDINARY EVENTS
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
