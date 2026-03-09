import { useEffect, useRef } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const shardRef = useRef(null);

    const onMove = (e) => {
        const el = shardRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        requestAnimationFrame(() => {
            // Deep 3D rotation with Z-depth
            el.style.transform = `perspective(2000px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
        });
    };

    const onLeave = () => {
        if (shardRef.current) shardRef.current.style.transform = `perspective(2000px) rotateY(0) rotateX(0)`;
    };

    return (
        <div className="contact-v7" onMouseMove={onMove} onMouseLeave={onLeave}>
            <div className="v7-bg-shape"></div>

            {/* Background Shards */}
            <div className="contact-v7__bg-shards">
                <div className="bg-shard bg-shard--1"></div>
            </div>

            <div className="wrap v7-container" ref={shardRef}>
                {/* Left Floating Shard Info */}
                <div className="v7-shard-info">
                    <div className="shard-top-left reveal">
                        <span className="label">The Bureau</span>
                        <h1 className="v7-h1">Let's <br />Organize Your <br /><em className="italic-gold">Success.</em></h1>
                    </div>

                    <div className="v7-stat-shard reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="shard-poly"></div>
                        <strong>24h</strong>
                        <span>Priority Response</span>
                    </div>

                    <div className="v7-detail-shard reveal" style={{ transitionDelay: '0.4s' }}>
                        <div className="shard-poly-alt"></div>
                        <p>📧 logistics@lumiere-organizers.com</p>
                        <p>📞 +91 98765 43210</p>
                    </div>
                </div>

                {/* Right Structured 3D Form Shard */}
                <div className="v7-shard-form glass reveal">
                    <div className="form-poly-bg"></div>
                    <div className="form-content">
                        <h3 className="v7-form-title">The Inquiry</h3>
                        <p className="v7-form-sub">Architecting your production begins with a single transmit.</p>

                        <form className="v7-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="v7-form-grid">
                                <div className="v7-fg">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Identity" required />
                                </div>
                                <div className="v7-fg">
                                    <label>Email</label>
                                    <input type="email" placeholder="Communication" required />
                                </div>
                            </div>

                            <div className="v7-fg">
                                <label>The Context</label>
                                <select required>
                                    <option value="" disabled selected>Select Event Archetype</option>
                                    <option>Corporate Summit</option>
                                    <option>Large Scale Wedding</option>
                                    <option>Private Milestone</option>
                                    <option>International Production</option>
                                </select>
                            </div>

                            <div className="v7-fg">
                                <label>The Vision</label>
                                <textarea rows="4" placeholder="Describe the atmosphere, scale, and soul of your event..."></textarea>
                            </div>

                            <button type="submit" className="v7-btn-submit">
                                <span>Transmit Vision</span>
                                <span className="btn-shard"></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Shard */}
            <div className="v7-bottom-shard">
                <div className="locations-shard">
                    <span>Mumbai</span> · <span>Delhi</span> · <span>Jaipur</span> · <span>Dubai</span>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
