import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <>
            {/* Non-regular Asymmetric Fragment Navbar */}
            <header className={`nav-v7 ${scrolled ? 'nav-v7--scrolled' : ''}`}>
                <div className="nav-v7__shard">
                    <Link to="/" className="nav-v7__logo">
                        <span className="logo-icon">✦</span>
                        <div className="logo-text">
                            <span className="name">LUMIÈRE</span>
                            <span className="sub">ARCHITECTS</span>
                        </div>
                    </Link>

                    <nav className="nav-v7__links">
                        <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                        <Link to="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
                        <Link to="/portfolio" className={pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
                        <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
                    </nav>

                    <Link to="/contact" className="nav-v7__cta">
                        <span>Inquire</span>
                        <span className="arrow">→</span>
                    </Link>
                </div>

                <button className="nav-v7__burger" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={menuOpen ? 'open' : ''}></div>
                    <div className={menuOpen ? 'open' : ''}></div>
                </button>
            </header>

            <div className={`nav-v7__drawer ${menuOpen ? 'open' : ''}`}>
                <button className="drawer__close" onClick={() => setMenuOpen(false)}>✕</button>
                <div className="drawer__links">
                    {['Home', 'Services', 'Portfolio', 'Contact'].map((link, i) => (
                        <Link
                            key={link}
                            to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
                <div className="drawer__footer">
                    <p>© 2026 LUMIÈRE ARCHITECTS</p>
                    <div className="drawer__socials">
                        <span>IG</span> · <span>LI</span> · <span>TW</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
