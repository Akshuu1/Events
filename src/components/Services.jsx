import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
    {
        id: '01',
        title: 'Government Events',
        lead: 'National Scale',
        desc: 'Handling grand scale government events and high-profile gatherings with absolute precision and security.',
        longDesc: 'Our government event management expertise ensures seamless execution for state-level functions, public gatherings, and diplomatic events. We manage complex logistics, security coordination, and massive spatial flows with professional consistency.',
        location: 'Pan-India',
        footfall: '5,000 - 50,000+ Guests',
        objective: 'Dignified Execution',
        deliverables: ['Protocol Management', 'Security Coordination', 'Mass Crowd Logistics', 'Technical Infrastructure', 'VVIP Stage Management'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(5% 0%, 100% 12%, 95% 100%, 0% 88%)',
        color: 'var(--green)'
    },
    {
        id: '02',
        title: 'Corporate Gatherings',
        lead: 'Professional Excellence',
        desc: 'Transforming corporate visions into high-impact events. From summits to brand launches, we deliver results.',
        longDesc: 'We specialize in high-stakes corporate productions, including conferences, product launches, and annual galas. Our approach focuses on brand integrity, technical perfection, and synchronized delivery across India.',
        location: 'Major Business Hubs',
        footfall: '100 - 5,000 Guests',
        objective: 'Brand Impact',
        deliverables: ['Mass Spatial Flow Design', 'Technical Production Mapping', 'Vendor Synchronization', 'Branded Environment Control', 'Real-time Event Analytics'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(0% 15%, 85% 0%, 100% 85%, 15% 100%)',
        color: 'var(--rose)'
    },
    {
        id: '03',
        title: 'Wedding Planning',
        lead: 'Extraordinary Experiences',
        desc: 'Turning your dream wedding into a flawlessly executed reality. Crafting memories that last a lifetime.',
        longDesc: 'From intimate ceremonies to grand celebrations, we bring creativity and precision to every wedding. We manage everything from destination planning and decor to guest logistics and entertainment.',
        location: 'Premium Destinations',
        footfall: '200 - 2,000 Guests',
        objective: 'Soulful Celebrations',
        deliverables: ['Concept & Theme Design', 'Vendor Management', 'Guest Experience Coordination', 'Floral & Decor Artistry', 'On-site Execution Control'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(10% 0%, 100% 5%, 90% 100%, 0% 95%)',
        color: 'var(--cream)'
    },
    {
        id: '04',
        title: 'Election Campaigns',
        lead: 'Strategic Outreach',
        desc: 'Managing high-intensity election campaigns with a 360° network of resources and expertise.',
        longDesc: 'We provide end-to-end event support for election campaigns, including rally management, public outreach programs, and strategic event planning to ensure your message reaches the masses effectively.',
        location: 'Constituency Level',
        footfall: 'Varies by Scale',
        objective: 'Mass Mobilization',
        deliverables: ['Rally Production', 'Publicity & Promotion', 'Resource Management', 'On-ground Logistics', 'Social Media Sync'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(0% 0%, 90% 10%, 100% 100%, 10% 90%)',
        color: 'var(--blush)'
    },
    {
        id: '05',
        title: 'Personal Events',
        lead: 'Intimate to Grand',
        desc: 'From birthdays to anniversaries, we make every personal milestone special with our expert touch.',
        longDesc: 'We cater to personal events of all sizes. Whether it is a small gathering or a big celebration, our team ensures every detail is taken care of, allowing you to enjoy your special moments.',
        location: 'Lucknow & Beyond',
        footfall: '20 - 500 Guests',
        objective: 'Memorable Milestones',
        deliverables: ['Custom Theme Planning', 'Catering Logistics', 'Entertainment Setup', 'Gift Management', 'Personalized Decor'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(5% 5%, 95% 0%, 100% 95%, 0% 100%)',
        color: 'var(--gold)'
    },
];

const ServiceShard = ({ s }) => {
    const ref = useRef(null);
    const onMove = (e) => {
        const r = ref.current.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        requestAnimationFrame(() => {
            if (ref.current) {
                ref.current.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) translateZ(20px)`;
            }
        });
    };
    const onLeave = () => { if (ref.current) ref.current.style.transform = ''; };

    const handleClick = () => {
        window.dispatchEvent(new CustomEvent('open-modal', { detail: s }));
    };

    return (
        <div
            className="svc-shard"
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            onClick={handleClick}
            style={{ clipPath: s.poly, background: s.id === '02' ? 'var(--black)' : 'white', cursor: 'pointer' }}
        >
            <div className="svc-shard__inner">
                <span className="svc-shard__id" style={{ color: s.color }}>{s.id}</span>
                <span className="label" style={{ color: s.id === '02' ? 'var(--rose)' : 'var(--green-deep)' }}>{s.lead}</span>
                <h3 className="svc-shard__h3" style={{ color: s.id === '02' ? 'white' : 'var(--black)' }}>{s.title}</h3>
                <p className="svc-shard__p" style={{ color: s.id === '02' ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)' }}>{s.desc}</p>
                <div className="svc-shard__link" style={{ color: s.color }}>Explore Detail →</div>
            </div>
        </div>
    );
};

const Services = ({ title = "Everything You Need for a Perfect Event", description = "A complete suite of event services." }) => (
    <section className="services-v8 section-pad">
        <div className="wrap">
            <div className="services-v8__head reveal">
                <h2 className="v8-title">{title}</h2>
                <p className="v8-desc">{description}</p>
            </div>
            <div className="services-v8__grid">
                {services.map(s => <ServiceShard key={s.id} s={s} />)}
            </div>
        </div>
    </section>
);

export default Services;
