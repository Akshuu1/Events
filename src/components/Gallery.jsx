import { useRef } from 'react';
import './Gallery.css';

const projects = [
    {
        id: 1,
        title: 'The Royal Wedding',
        sub: 'Udaipur, Palace Logistics',
        tag: 'Management',
        poly: 'polygon(0% 5%, 95% 0%, 100% 90%, 5% 100%)',
        z: '80px'
    },
    {
        id: 2,
        title: 'C-Suite Summit',
        sub: 'Mumbai, Production',
        tag: 'Corporate',
        poly: 'polygon(10% 0%, 100% 5%, 90% 100%, 0% 95%)',
        z: '50px'
    },
    {
        id: 3,
        title: 'Luxury Milestone',
        sub: 'Dubai, International',
        tag: 'Private',
        poly: 'polygon(0% 15%, 85% 0%, 100% 85%, 15% 100%)',
        z: '60px'
    },
    {
        id: 4,
        title: 'Global Gala',
        sub: 'London, Coordination',
        tag: 'Gala',
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

    return (
        <div
            className="exhibit-shard reveal"
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ clipPath: p.poly }}
        >
            <div className="exhibit-shard__img">
                <img src={`/assets/hero.png`} alt={p.title} />
                <div className="shard-overlay"></div>
            </div>
            <div className="exhibit-shard__content">
                <span className="shard-tag">{p.tag}</span>
                <h4>{p.title}</h4>
                <p>{p.sub}</p>
            </div>
        </div>
    );
};

const Gallery = ({ title = "The Exhibition", description = "Management Excellence in Motion.", limit }) => {
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
