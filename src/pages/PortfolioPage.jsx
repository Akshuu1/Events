import { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import './PortfolioPage.css';

const PortfolioPage = () => {
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filters = ['All', 'Logistics', 'Corporate', 'Private', 'International'];

    return (
        <div className="portfolio-page">
            <section className="portfolio-hero">
                {/* Background Shards */}
                <div className="portfolio-hero__bg-shards">
                    <div className="bg-shard bg-shard--1"></div>
                    <div className="bg-shard bg-shard--2"></div>
                </div>

                <div className="wrap">
                    <span className="label reveal">The Operational Archive</span>
                    <h1 className="portfolio-h1 reveal">
                        The Artifacts of <br />
                        <em className="italic-gold">Successful</em> Production.
                    </h1>

                    <div className="portfolio-filters reveal">
                        {filters.map(f => (
                            <button
                                key={f}
                                className={`filter-btn ${filter === f ? 'active' : ''}`}
                                onClick={() => setFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <div className="portfolio-intro wrap reveal">
                <div className="intro-meta">
                    <div className="meta-item">
                        <strong>Zero</strong>
                        <span>Latencies</span>
                    </div>
                    <div className="meta-item">
                        <strong>100%</strong>
                        <span>Success Rate</span>
                    </div>
                    <div className="meta-item">
                        <strong>Elite</strong>
                        <span>Logistics</span>
                    </div>
                </div>
                <p className="intro-text">
                    This archive is a record of operational precision. We detail the logistical challenges overcome in every project, from temporary structure engineering to global supply chain coordination.
                </p>
            </div>

            <Gallery
                filter={filter}
                title="The Production Archive"
                description="Explore our complete history of operational landmarks. Each project is a testament to flawless coordination."
            />

            <section className="portfolio-cta section-pad">
                <div className="wrap glass portfolio-cta__banner reveal">
                    <div className="cta-text">
                        <h2>Secure your next event with <em className="italic-gold">operational</em> certainty.</h2>
                        <p>Our senior project managers are available for global deployment.</p>
                    </div>
                    <button className="btn-dark">Consult Production</button>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
