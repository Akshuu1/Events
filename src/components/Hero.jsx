import { Link } from 'react-router-dom';
import HeroCanvas from './HeroCanvas';
import './Hero.css';

const Hero = () => (
    <section className="hero">
        <HeroCanvas />
        <div className="hero__backdrop" />

        {/* Floating Background Shards */}
        <div className="hero__bg-shards">
            <div className="bg-shard bg-shard--1"></div>
            <div className="bg-shard bg-shard--2"></div>
            <div className="bg-shard bg-shard--3"></div>
        </div>

        <div className="hero__body wrap">
            {/* Left */}
            <div className="hero__left">
                <div className="hero__label-wrap">
                    <span className="label">Epic Events & Promotion — Founded by Ranbir Singh</span>
                </div>
                <h1 className="hero__h1">
                    Turning every <br />
                    Vision into a <br />
                    <em className="italic-gold">Flawless</em> <br />
                    Reality
                </h1>
                <p className="hero__p">
                    We don’t just manage events — we create experiences that people remember. Delivering excellence with 12+ years of rich industry expertise across India.
                </p>
                <div className="hero__btns">
                    <Link to="/portfolio" className="btn-dark">Company Portfolio ↗</Link>
                    <Link to="/contact" className="btn-outline-dark">Start Planning</Link>
                </div>
                {/* Stats row */}
                <div className="hero__stats">
                    {[['1800+', 'Events'], ['12+ yrs', 'Experience'], ['Pan-India', 'Scale'], ['100%', 'Excellence']].map(([n, l]) => (
                        <div key={l} className="hero__stat">
                            <strong>{n}</strong>
                            <span>{l}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right */}
            <div className="hero__right">
                {/* Main photo */}
                <div className="hero__main-img">
                    <img src="/assets/wedding.png" alt="Luxury ceremony" />
                    <div className="hero__img-tag">Mehra–Singh Wedding, Udaipur 2025</div>
                </div>
                {/* Side photos */}
                <div className="hero__sub-imgs">
                    <div className="hero__sub-img hero__sub-img--a"
                        onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; requestAnimationFrame(() => { e.currentTarget.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.02)`; }); }}
                        onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                    >
                        <img src="/assets/c4.jpg" alt="Corporate gala" />
                        <div className="sub-label">Corporate Gala</div>
                    </div>
                    <div className="hero__sub-img hero__sub-img--b"
                        onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; requestAnimationFrame(() => { e.currentTarget.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.02)`; }); }}
                        onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                    >
                        <img src="/assets/hero.png" alt="Private event" />
                        <div className="sub-label">Private Celebration</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Scrolling event types ticker */}
        <div className="hero__ticker">
            <div className="ticker__track">
                {['Wedding Planning', 'Brand Activations', 'Concept Development', 'Floral Artistry', 'Destination Planning', 'Gourmet Catering', 'Media Production', 'Guest Experience', 'Live Entertainment', 'Atmospheric Lighting'].map(t => (
                    <span key={t} className="ticker__item">{t} <span className="ticker__dot">✦</span></span>
                ))}
                {/* Duplicate for seamless loop */}
                {['Wedding Planning', 'Brand Activations', 'Concept Development', 'Floral Artistry', 'Destination Planning', 'Gourmet Catering', 'Media Production', 'Guest Experience', 'Live Entertainment', 'Atmospheric Lighting'].map(t => (
                    <span key={t + '_dup'} className="ticker__item">{t} <span className="ticker__dot">✦</span></span>
                ))}
            </div>
        </div>
    </section>
);

export default Hero;
