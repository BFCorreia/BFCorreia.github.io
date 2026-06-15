import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { PromoPublisher } from './pages/PromoPublisher';
import { Privacy } from './pages/legal/Privacy';
import { Terms } from './pages/legal/Terms';
import './i18n';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#EDEDED] selection:bg-accent selection:text-[#0a0a0c]">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/promo-publisher" element={<PromoPublisher />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
