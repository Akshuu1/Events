import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
    {
        id: '01',
        title: 'Wedding Design',
        lead: 'Sculpting the Ceremony',
        desc: 'We treat a wedding like a grand exhibition. From spatial geometry to sensorial timing, every moment is an architectural feat.',
        poly: 'polygon(5% 0%, 100% 12%, 95% 100%, 0% 88%)',
        color: 'var(--green)'
    },
    {
        id: '02',
        title: 'Corporate Galas',
        lead: 'The Brand Sculpture',
        desc: 'Transforming boardrooms into landmark experiences. We translate corporate DNA into physical, interactive 3D environments.',
        poly: 'polygon(0% 15%, 85% 0%, 100% 85%, 15% 100%)',
        color: 'var(--rose)'
    },
    {
        id: '03',
        title: 'Private Events',
        lead: 'Bespoke Fragments',
        desc: 'For milestone celebrations that demand ultimate exclusivity. Private dinners and anniversary galas with architectural precision.',
        poly: 'polygon(10% 0%, 100% 5%, 90% 100%, 0% 95%)',
        color: 'var(--cream)'
    },
    {
        id: '04',
        title: 'Consultation',
        lead: 'The Initial Sketch',
        desc: 'Your event begins at the atelier. We map your vision onto our technical capability for a flawless blueprint.',
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

    return (
        <div
            className="svc-shard"
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ clipPath: s.poly, background: s.id === '02' ? 'var(--black)' : 'white' }}
        >
            <div className="svc-shard__inner">
                <span className="svc-shard__id" style={{ color: s.color }}>{s.id}</span>
                <span className="label" style={{ color: s.id === '02' ? 'var(--rose)' : 'var(--green-deep)' }}>{s.lead}</span>
                <h3 className="svc-shard__h3" style={{ color: s.id === '02' ? 'white' : 'var(--black)' }}>{s.title}</h3>
                <p className="svc-shard__p" style={{ color: s.id === '02' ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)' }}>{s.desc}</p>
                <Link to="/services" className="svc-shard__link" style={{ color: s.color }}>Explore Detail →</Link>
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
