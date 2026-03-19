import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { emailConfig } from '../config/emailConfig';
import './ContactPage.css';

const ContactPage = () => {
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
    const formRef = useRef();

    useEffect(() => { 
        window.scrollTo(0, 0); 
        if (emailConfig.PUBLIC_KEY && emailConfig.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
            emailjs.init(emailConfig.PUBLIC_KEY);
        }
    }, []);

    const shardRef = useRef(null);

    const onMove = (e) => {
        const el = shardRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        requestAnimationFrame(() => {
            el.style.transform = `perspective(2000px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
        });
    };

    const onLeave = () => {
        if (shardRef.current) shardRef.current.style.transform = `perspective(2000px) rotateY(0) rotateX(0)`;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        
        // Fallback to mailto only if essential keys are missing
        if (!emailConfig.SERVICE_ID || emailConfig.SERVICE_ID === 'YOUR_SERVICE_ID' || emailConfig.SERVICE_ID === '') {
            const formData = new FormData(e.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const type = formData.get('type');
            const vision = formData.get('vision');
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AEvent Type: ${type}%0D%0AVision: ${vision}`;
            window.location.href = `mailto:${emailConfig.RECIPIENT_EMAIL}?subject=New Event Inquiry from ${name}&body=${body}`;
            return;
        }

        setStatus('sending');

        emailjs.sendForm(
            emailConfig.SERVICE_ID,
            emailConfig.TEMPLATE_ID,
            formRef.current,
            emailConfig.PUBLIC_KEY
        ).then((result) => {
            setStatus('success');
            e.target.reset();
        }, (error) => {
            console.error('EmailJS Error:', error);
            setStatus('error');
        });
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
                        <h1 className="v7-h1">Let's <br />Plan Your <br /><em className="italic-gold">Epic Event.</em></h1>
                    </div>

                    <div className="v7-stat-shard reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="shard-poly"></div>
                        <strong>24h</strong>
                        <span>Priority Response</span>
                    </div>

                    <div className="v7-detail-shard reveal" style={{ transitionDelay: '0.4s' }}>
                        <div className="shard-poly-alt"></div>
                        <p>📧 {emailConfig.RECIPIENT_EMAIL}</p>
                        <p>📞 +91 79052 19157</p>
                    </div>
                </div>

                {/* Right Structured 3D Form Shard */}
                <div className="v7-shard-form glass reveal">
                    <div className="form-poly-bg"></div>
                    <div className="form-content">
                        <h3 className="v7-form-title">The Inquiry</h3>
                        <p className="v7-form-sub">Turning your vision into a flawlessly executed reality begins here.</p>

                        <form className="v7-form" ref={formRef} onSubmit={sendEmail}>
                            <div className="v7-form-grid">
                                <div className="v7-fg">
                                    <label>Full Name</label>
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </div>
                                <div className="v7-fg">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Your Email" required />
                                </div>
                            </div>

                            <div className="v7-fg">
                                <label>Event Type</label>
                                <select name="type" defaultValue="" required>
                                    <option value="" disabled>Select Event Type</option>
                                    <option>Government Event</option>
                                    <option>Corporate Gathering</option>
                                    <option>Wedding Planning</option>
                                    <option>Election Campaign</option>
                                    <option>Personal Event</option>
                                </select>
                            </div>

                            <div className="v7-fg">
                                <label>The Vision</label>
                                <textarea name="vision" rows="4" placeholder="Describe your vision for the event..."></textarea>
                            </div>

                            <button type="submit" className="v7-btn-submit" disabled={status === 'sending'}>
                                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                                <span className="btn-shard"></span>
                            </button>

                            {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
                            {status === 'error' && <p className="status-msg error">Something went wrong. Please try again or use mailto.</p>}
                        </form>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Shard */}
            <div className="v7-bottom-shard">
                <div className="locations-shard">
                    <span>Lucknow (HQ)</span> · <span>Pan-India Service</span>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
