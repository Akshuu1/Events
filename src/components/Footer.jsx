import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <footer className="footer-v11">
        {/* Massive Background Display */}
        <div className="footer-v11__bg-text">LUMIÈRE</div>

        <div className="footer-v11__top section-pad">
            <div className="wrap footer-v11__grid">

                {/* Brand Shard */}
                <div className="footer-v11__shard footer-v11__shard--brand reveal">
                    <div className="footer-v11__logo">
                        <span className="logo-star">✦</span>
                        <div className="logo-wrap">
                            <span className="name">LUMIÈRE</span>
                            <span className="sub">ORGANIZERS</span>
                        </div>
                    </div>
                    <p className="footer-v11__lead">
                        Managing high-stakes global productions with technical precision. From palace logistics to stadium-scale summits.
                    </p>
                    <div className="footer-v11__social-shards">
                        {['IG', 'PI', 'LI', 'YT'].map(s => (
                            <a key={s} href="#" className="social-shard">{s}</a>
                        ))}
                    </div>
                </div>

                {/* Services Shard */}
                <div className="footer-v11__shard reveal" style={{ transitionDelay: '0.1s' }}>
                    <h4 className="footer-v11__h4">Solutions</h4>
                    <ul className="footer-v11__list">
                        {['Logistics Management', 'Production Mapping', 'Vendor Control', 'On-site Execution', 'Technical Design'].map(item => (
                            <li key={item}><Link to="/services">{item}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* HQ Shard */}
                <div className="footer-v11__shard reveal" style={{ transitionDelay: '0.2s' }}>
                    <h4 className="footer-v11__h4">Global HQ</h4>
                    <div className="footer-v11__address">
                        <div className="hq-item">
                            <strong>Mumbai</strong>
                            <span>Operational Hub</span>
                        </div>
                        <div className="hq-item">
                            <strong>London</strong>
                            <span>Design Atelier</span>
                        </div>
                        <div className="hq-item">
                            <strong>Dubai</strong>
                            <span>Logistics Center</span>
                        </div>
                    </div>
                </div>

                {/* Contact Shard */}
                <div className="footer-v11__shard footer-v11__shard--cta reveal" style={{ transitionDelay: '0.3s' }}>
                    <h4 className="footer-v11__h4">Inquiries</h4>
                    <p className="footer-v11__p">Current queue: Late 2026</p>
                    <a href="mailto:hq@lumiere-organizers.com" className="footer-v11__email">hq@lumiere-organizers.com</a>
                    <Link to="/contact" className="btn-v11-shard">
                        <span>Initialize Production</span>
                        <span className="arrow">→</span>
                    </Link>
                </div>

            </div>
        </div>

        <div className="footer-v11__bottom">
            <div className="wrap footer-v11__bottom-inner">
                <div className="legal">
                    <span>© 2026 LUMIÈRE ORGANIZERS</span>
                    <span className="sep">|</span>
                    <span>PRIVACY ARCHIVE</span>
                </div>
                <div className="credits">
                    ORGANIZING EXPERIENCES GLOBALLY
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
