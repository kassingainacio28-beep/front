import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import FleetPage from './pages/FleetPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
        <ScrollToTop />
        <Header />
        
        {/* Main Content Area - padded top to account for fixed header */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/frota" element={<FleetPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
};

export default App;