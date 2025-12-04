import { Routes, Route } from 'react-router-dom';

// 1. Utilities
import ScrollToTop from './components/ScrollToTop';
import SocialSidebar from './components/SocialSidebar';

// 2. Components for the Home Page
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inauguration from './components/Inauguration';
import Initiatives from './components/Initiatives';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

// 3. Separate Pages
import UdbhavPage from './pages/UdbhavPage';
import ComingSoonPage from './pages/ComingSoonPage';

// The Main Landing Page (Stacks all sections)
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Inauguration />
      <Initiatives />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="relative bg-white min-h-screen">
      {/* GLOBAL UTILITIES */}
      <ScrollToTop />   {/* Ensures every page load starts at the top */}
      <SocialSidebar /> {/* Floating sidebar visible on all pages */}

      {/* PAGE ROUTING */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/udbhav" element={<UdbhavPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
      </Routes>
    </div>
  );
}

export default App;