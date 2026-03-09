import { useEffect } from 'react';
import './DetailModal.css';

const DetailModal = ({ isOpen, item, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    if (!isOpen || !item) return null;

    return (
        <div className="modal-overlay" onClick={onClose} style={{ pointerEvents: 'auto' }}>
            <div className="modal-content-v12 reveal visible" onClick={e => e.stopPropagation()}>
                <button className="modal-close-v12" onClick={onClose}>✕</button>

                <div className="modal-hero">
                    <img src={item.img || '/assets/hero.png'} alt={item.title} />
                    <div className="modal-hero-overlay">
                        <div className="modal-hero-content">
                            <span className="label-v12">{item.tag || item.lead}</span>
                            <h2 className="modal-h2-v12">{item.title}</h2>
                        </div>
                    </div>
                </div>

                <div className="modal-body-v12">
                    <div className="modal-meta-grid">
                        <div className="meta-box">
                            <span className="meta-label">Location</span>
                            <h3 className="meta-value">{item.location || 'Global Operations'}</h3>
                        </div>
                        <div className="meta-box border-x">
                            <span className="meta-label">Total Footfall</span>
                            <h3 className="meta-value">{item.footfall || 'Confidential'}</h3>
                        </div>
                        <div className="meta-box">
                            <span className="meta-label">Tactical Objective</span>
                            <h3 className="meta-value">{item.objective || 'Organizing Excellence'}</h3>
                        </div>
                    </div>

                    <div className="modal-narrative-section">
                        <div className="narrative-left">
                            <h4 className="label-v12">Operational Narrative</h4>
                            <p className="narrative-p">{item.longDesc || item.desc}</p>
                        </div>
                        {item.deliverables && (
                            <div className="narrative-right">
                                <h4 className="label-v12">Core Deliverables</h4>
                                <ul className="deliverables-micro">
                                    {item.deliverables.map((d, i) => (
                                        <li key={i}>{d}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {item.galleryImages && (
                        <div className="curated-gallery">
                            <div className="gallery-header">
                                <h4 className="label-v12">Visual Artifacts</h4>
                                <p className="gallery-sub">Captured Production Moments</p>
                            </div>
                            <div className="masonry-grid">
                                {item.galleryImages.map((img, i) => (
                                    <div key={i} className={`masonry-item item-size-${(i % 3) + 1}`}>
                                        <img src={img} alt={`Capture ${i}`} />
                                        <div className="masonry-overlay">
                                            <span>SHARD {i + 1} // {item.tag}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="modal-footer-v12">
                        <button className="btn-dark" onClick={onClose}>Return to Bureau</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;
