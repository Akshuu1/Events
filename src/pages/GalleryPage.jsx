import { useEffect } from 'react';
import Gallery from '../components/Gallery';
import './GalleryPage.css';

const GalleryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        { name: 'Government', count: '120+ Events', img: '/assets/c1.jpg' },
        { name: 'Corporate', count: '450+ Events', img: '/assets/c6.jpg' },
        { name: 'Weddings', count: '800+ Events', img: '/assets/w2.webp' },
        { name: 'Campaigns', count: '300+ Events', img: '/assets/c3.jpg' }
    ];

    return (
        <div className="gallery-v14">
            {/* 1. Cinematic Gallery Hero */}
            <section className="g14-hero">
                <div className="g14-hero__bg"></div>
                <div className="wrap g14-hero__content">
                    <span className="label reveal">The Visual Archive</span>
                    <h1 className="g14-h1 reveal">A Chronicle Of <br /><em className="italic-gold">Shattered</em> Expectations.</h1>
                    <p className="g14-p reveal">Explore the visual history of Epic Events & Promotion. From large-scale public mobilization to the finest details of luxury celebrations.</p>
                </div>
            </section>

            {/* 2. Interactive Category Scroller */}
            <section className="g14-cats section-pad reveal">
                <div className="wrap">
                    <div className="g14-cats__grid">
                        {categories.map((cat, i) => (
                            <div key={cat.name} className="g14-cat-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="cat-card__img">
                                    <img src={cat.img} alt={cat.name} />
                                    <div className="cat-card__overlay"></div>
                                </div>
                                <div className="cat-card__info">
                                    <h3>{cat.name}</h3>
                                    <span>{cat.count}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. The Main Gallery — Staggered Display */}
            <section className="g14-main section-pad">
                <div className="wrap">
                    <div className="g14-main__head reveal">
                        <span className="label">The Full Archive</span>
                        <h2 className="g14-h2">Global <em className="italic-gold">Perspectives.</em></h2>
                    </div>
                    <Gallery />
                </div>
            </section>

            {/* 4. Contact Teaser */}
            <section className="g14-footer section-pad reveal">
                <div className="wrap glass g14-footer__card">
                    <h2>Capture your <em className="italic-gold">own</em> extraordinary moment.</h2>
                    <a href="/contact" className="btn-dark">Start Planning ↗</a>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
