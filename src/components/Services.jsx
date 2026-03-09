import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
    {
        id: '01',
        title: 'Wedding Logistics',
        lead: 'Technical Excellence',
        desc: 'We manage grand weddings with architectural precision. From spatial geometry to sensorial timing, every moment is a logistical triumph.',
        longDesc: 'Our wedding organizing service is a masterclass in coordination. We handle high-stakes logistics for destination weddings across India and the GCC. Our team manages vendor synchronization, guest transport, multi-venue scheduling, and high-pressure on-site production to ensure zero latency throughout the celebration.',
        location: 'Pan India & Dubai',
        footfall: '500 - 3000 Guests',
        objective: 'Zero-Latency Execution',
        deliverables: ['Custom Vendor Networking', 'On-site Crisis Management', 'Guest Logistics & Transport', 'Multi-day Production Schedule', 'Venue Technical Audit'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(5% 0%, 100% 12%, 95% 100%, 0% 88%)',
        color: 'var(--green)'
    },
    {
        id: '02',
        title: 'Corporate Production',
        lead: 'Operational Control',
        desc: 'Transforming brand goals into landmark experiences. We translate corporate DNA into complex, high-pressure event environments.',
        longDesc: 'We organize industrial-scale corporate summits and brand galas. Our approach focuses on technical infrastructure, secure guest management, and synchronized audio-visual production. We specialize in handling complex multi-stakeholder requirements for global tech and financial firms.',
        location: 'Major Financial Hubs',
        footfall: '1000 - 10,000+ Guests',
        objective: 'Strategic Coordination',
        deliverables: ['Mass Spatial Flow Design', 'Technical Production Mapping', 'Security & Access Protocols', 'Branded Environment Control', 'Zero-Downtime Infrastructure'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(0% 15%, 85% 0%, 100% 85%, 15% 100%)',
        color: 'var(--rose)'
    },
    {
        id: '03',
        title: 'Private Milestones',
        lead: 'Managed Exclusivity',
        desc: 'For significant celebrations that demand ultimate coordination. Private dinners and anniversary galas organized with elite precision.',
        longDesc: 'For milestone celebrations that require the highest level of discretion and detail. We organize intimate but complex private events, managing everything from ultra-premium catering logistics to bespoke entertainment coordination in exclusive locations.',
        location: 'Bespoke Destinations',
        footfall: '50 - 500 Guests',
        objective: 'Discreet Excellence',
        deliverables: ['Exclusive Vendor Access', 'Sensorial Timing Design', 'Discreet Guest Handling', 'Bespoke Catering Logistics', 'Private Security Coordination'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(10% 0%, 100% 5%, 90% 100%, 0% 95%)',
        color: 'var(--cream)'
    },
    {
        id: '04',
        title: 'Project Consulting',
        lead: 'The Blueprint Stage',
        desc: 'Your event begins at our bureau. We map your vision onto our technical capability for a flawless operational blueprint.',
        longDesc: 'We provide senior-level operational consulting for organizations and families who require a technical blueprint for their own execution teams. We conduct venue feasibility studies, logistics audits, and production mapping to ensure a solid foundation for any grand event.',
        location: 'Global Consulting',
        footfall: 'Strategic Scale',
        objective: 'Structural Integrity',
        deliverables: ['Logistics Feasibility Report', 'Vendor Ecosystem Mapping', 'Production Blueprinting', 'Technical Risk Assessment', 'Budgetary Flow Matrix'],
        galleryImages: ['/assets/hero.png', '/assets/hero.png'],
        poly: 'polygon(0% 0%, 90% 10%, 100% 100%, 10% 90%)',
        color: 'var(--blush)'
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
