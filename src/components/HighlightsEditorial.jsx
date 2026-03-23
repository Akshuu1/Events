import { useState } from 'react';
import './HighlightsEditorial.css';

const HighlightsEditorial = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const highlights = [
        {
            id: 1,
            title: "Large-Scale Public Events",
            tag: "Mass Logistics · PAN-INDIA",
            img: "/assets/c5.jpg",
            desc: "Managing grand-scale public festivals and high-impact events with absolute operational precision and safety."
        },
        {
            id: 2,
            title: "Corporate Summits",
            tag: "Luxury Sync · 360° NETWORK",
            img: "/assets/c7.jpg",
            desc: "Seamless coordination for global industry leaders across multiple locations with synchronized mapping."
        },
        {
            id: 3,
            title: "Royal Weddings",
            tag: "Bespoke Planning · 12Y+ EXP",
            img: "/assets/w5.jpg",
            desc: "Turning grand visions into timeless realities with meticulous attention and elite hospitality."
        }
    ];

    return (
        <section className="h-showcase section-pad">
            <div className="wrap h-showcase__container">
                <div className="h-showcase__sidebar reveal">
                    <span className="label">Managed Highlights</span>
                    <h2 className="h-showcase__h2">Artifacts Of <br /><em className="italic-gold">Excellence.</em></h2>
                    
                    <div className="h-showcase__list">
                        {highlights.map((h, i) => (
                            <div 
                                key={h.id} 
                                className={`h-showcase__item ${activeIndex === i ? 'active' : ''}`}
                                onMouseEnter={() => setActiveIndex(i)}
                            >
                                <span className="h-item__num">0{i + 1}</span>
                                <div className="h-item__text">
                                    <h3>{h.title}</h3>
                                    <span className="h-item__tag">{h.tag}</span>
                                </div>
                                <div className="h-item__line"></div>
                            </div>
                        ))}
                    </div>

                    <div className="h-showcase__footer">
                        <p>{highlights[activeIndex].desc}</p>
                        <a href="/gallery" className="h-showcase__btn">Explore Full Archive ↗</a>
                    </div>
                </div>

                <div className="h-showcase__display reveal" style={{ transitionDelay: '0.2s' }}>
                    <div className="display-frame">
                        <div className="display-shards">
                            <div className="d-shard d-shard--1"></div>
                            <div className="d-shard d-shard--2"></div>
                        </div>
                        {highlights.map((h, i) => (
                            <img 
                                key={h.id} 
                                src={h.img} 
                                alt={`${h.title} - ${h.tag} Event Excellence by Epic Events`} 
                                className={`display-img ${activeIndex === i ? 'visible' : ''}`}
                            />
                        ))}
                        <div className="display-overlay"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighlightsEditorial;
