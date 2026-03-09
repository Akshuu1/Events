import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import DetailModal from './components/DetailModal';
import './App.css';

function App() {
  const location = useLocation();
  const [modalState, setModalState] = useState({ isOpen: false, item: null });

  const openModal = (item) => setModalState({ isOpen: true, item });
  const closeModal = () => setModalState({ isOpen: false, item: null });

  // Listen for custom "open-modal" event for easy cross-component triggering
  useEffect(() => {
    const handler = (e) => openModal(e.detail);
    window.addEventListener('open-modal', handler);
    return () => window.removeEventListener('open-modal', handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 150);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <DetailModal
        isOpen={modalState.isOpen}
        item={modalState.item}
        onClose={closeModal}
      />
    </>
  );
}

export default App;
