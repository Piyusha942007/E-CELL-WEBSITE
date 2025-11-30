import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inauguration from './components/Inauguration';
import Initiatives from './components/Initiatives';
import Team from './components/Team';
import Footer from './components/Footer';
import UdbhavPage from './pages/UdbhavPage';
import ComingSoonPage from './pages/ComingSoonPage';
import SocialSidebar from './components/SocialSidebar'; 
import Contact from './components/Contact';

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
    <div className="relative">
      {/* This component is placed OUTSIDE routes so it shows up on:
         - Home Page
         - Udbhav Page
         - Coming Soon Page
      */}
      <SocialSidebar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/udbhav" element={<UdbhavPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        {/* Route path="/ideathon" element={<IdeathonPage />} / */} 
      </Routes>
    </div>
  );
}

export default App;