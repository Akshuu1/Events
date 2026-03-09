import { useRef } from 'react';
import './Gallery.css';

const projects = [
    {
        id: 1,
        title: 'Royal Palace Logistics',
        sub: 'Udaipur, Rajasthan',
        tag: 'Logistics',
        location: 'City Palace, Udaipur',
        footfall: '1,200 Guests',
        objective: 'Multi-Venue Sync',
        longDesc: 'Managing a grand palace wedding across multiple historic venues in Udaipur. Our team handled the fleet logistics, high-security protocols, and synchronized production mapping for 1,200 international guests.',
        deliverables: ['Fleet Grid Management', 'Technical Site Audit', 'Jurisdiction Control'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(0% 5%, 95% 0%, 100% 90%, 5% 100%)',
        z: '80px'
    },
    {
        id: 2,
        title: 'Industrial Tech Summit',
        sub: 'Mumbai, Digital India',
        tag: 'Corporate',
        location: 'Jio World Centre',
        footfall: '5,500+ Attendees',
        objective: 'Zero-Downtime Base',
        longDesc: 'Organizing the technical base for a massive global tech summit. We engineered the spatial flow for 5,500 people and managed a complex AV mesh network spanning 6 halls with 100% uptime.',
        deliverables: ['Mass Spatial Flow', 'AV Mesh Infrastructure', 'Technical Crisis Unit'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(10% 0%, 100% 5%, 90% 100%, 0% 95%)',
        z: '50px'
    },
    {
        id: 3,
        title: 'The Desert Mirage',
        sub: 'Dubai, UAE',
        tag: 'Destination',
        location: 'Al Maha Desert, Dubai',
        footfall: '300 VIP Guests',
        objective: 'Remote Site Mastery',
        longDesc: 'Mobilizing an elite private production deep in the Dubai desert. This required architectural self-sufficiency, including custom water, power, and high-fidelity climate control for 300 guests on sand.',
        deliverables: ['Remote Grid Deployment', 'Resource Logistics', 'Sand-Stabilized Structures'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(0% 15%, 85% 0%, 100% 85%, 15% 100%)',
        z: '60px'
    },
    {
        id: 4,
        title: 'The Fashion Gala',
        sub: 'London, UK',
        tag: 'International',
        location: 'Somerset House, London',
        footfall: '800 Press & Guests',
        objective: 'High-Fidelity Timing',
        longDesc: 'Organizing the London Fashion Gala with second-by-second timing precision. Our team managed international vendor mobilization and high-profile guest logistics under intense media surveillance.',
        deliverables: ['Media Protocol Grid', 'International Mobilization', 'Timing Synchronization'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(5% 0%, 100% 10%, 95% 100%, 0% 90%)',
        z: '70px'
    }
];

const GalleryShard = ({ p }) => {
    const ref = useRef(null);
    const onMove = (e) => {
        const r = ref.current.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        requestAnimationFrame(() => {
            if (ref.current) {
                ref.current.style.transform = `perspective(2000px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) translateZ(${p.z})`;
            }
        });
    };
    const onLeave = () => { if (ref.current) ref.current.style.transform = ''; };

    const handleClick = () => {
        window.dispatchEvent(new CustomEvent('open-modal', { detail: p }));
    };

    return (
        <div
            className="exhibit-shard reveal"
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            onClick={handleClick}
            style={{ clipPath: p.poly, cursor: 'pointer' }}
        >
            <div className="exhibit-shard__img">
                <img src={`/assets/hero.png`} alt={p.title} />
                <div className="shard-overlay"></div>
            </div>
            <div className="exhibit-shard__content">
                <span className="shard-tag">{p.tag}</span>
                <h4>{p.title}</h4>
                <p>{p.sub}</p>
                <div style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'var(--green-deep)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    View Archive Detail ↗
                </div>
            </div>
        </div>
    );
};

const Gallery = ({ title = "The Showcase", description = "Visionary Design in Motion.", limit }) => {
    const displayProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section className="gallery-v9 section-pad">
            <div className="wrap">
                <div className="gallery-v9__head reveal">
                    <span className="label">Managed Archive</span>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="gallery-v9__grid">
                    {displayProjects.map(p => <GalleryShard key={p.id} p={p} />)}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
