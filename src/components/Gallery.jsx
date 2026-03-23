import { useRef } from 'react';
import './Gallery.css';

const projects = [
    {
        id: 1,
        title: 'Lucknow Deep Utsav',
        sub: 'Lucknow, Uttar Pradesh',
        tag: 'Government',
        location: 'Lucknow Shore & Grounds',
        footfall: '700+ Stalls',
        objective: 'High-Impact Cultural Execution',
        img: '/assets/c1.jpg',
        longDesc: 'A prestigious large-scale cultural celebration, the Lucknow Deep Utsav stands as a testament to our excellence in high-impact event execution. Delivered within an impressive 24-hour timeframe, our team seamlessly curated and installed over 700+ stalls, ensuring flawless coordination and an elevated visitor experience. The event further featured the creation of an exclusive stage and secured passage for the Honorable Chief Minister, Shri Yogi Adityanath, executed with the highest standards of protocol, precision, and sophistication.',
        deliverables: ['700+ Stall Curation', 'CM Protocol Management', '24HR Rapid Deployment'],
        galleryImages: ['/assets/c1.jpg', '/assets/c2.jpg', '/assets/c3.jpg'],
        poly: 'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)',
        z: '80px'
    },
    {
        id: 2,
        title: 'Svanidhi Mahotsav',
        sub: 'Lucknow, Uttar Pradesh',
        tag: 'Government',
        location: 'Municipal Grounds',
        footfall: '300+ Stalls',
        objective: 'Efficiency & Precision',
        img: '/assets/c4.jpg',
        longDesc: 'A prominent government-led initiative, the Svanidhi Mahotsav was successfully executed by our team within a remarkably short timeframe. Demonstrating efficiency and precision, we managed the complete event setup, including the seamless arrangement of 300+ stalls. The event was enhanced with thoughtfully curated decor and aesthetics, creating a vibrant and engaging environment aligned with the spirit of the initiative.',
        deliverables: ['300+ Stall Management', 'Curated Theme Decor', 'Rapid Infrastructure Setup'],
        galleryImages: ['/assets/c4.jpg', '/assets/c5.jpg', '/assets/c1.jpg'],
        poly: 'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)',
        z: '50px'
    },
    {
        id: 3,
        title: 'Army Diwas Celebration',
        sub: 'Lucknow, Defense Sector',
        tag: 'Defense',
        location: 'Cantonment Area',
        footfall: '36,000 ft Platform',
        objective: 'Precision & Discipline',
        img: '/assets/c7.jpg',
        longDesc: 'A prestigious and high-security event, the Army Diwas Celebration highlighted our capability to execute large-scale, defense-level projects with precision and discipline. Our team successfully constructed a massive 36,000 running feet platform, demonstrating exceptional planning and execution strength. The event was honored by the presence of the Honorable Defence Minister and Honorable Chief Minister, Shri Yogi Adityanath, where we ensured seamless arrangements adhering to strict security protocols. Additionally, we efficiently designed and built daily operational bunkers, showcasing our adaptability and expertise in handling complex, time-sensitive infrastructure requirements.',
        deliverables: ['36,000 ft Platform Construction', 'High-Security VIP Logistics', 'Operational Bunker Design'],
        galleryImages: ['/assets/c7.jpg', '/assets/c6.jpg', '/assets/c2.jpg'],
        poly: 'polygon(0% 2%, 100% 0%, 98% 100%, 2% 98%)',
        z: '100px'
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
                <img src={p.galleryImages[0]} alt={`${p.title} - ${p.sub} // ${p.tag} Project by Epic Events`} />
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
