// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inauguration from './components/Inauguration';
import Initiatives from './components/Initiatives';
import Team from './components/Team/team.jsx';
import AllTeam from './components/Team/allteam.jsx';
import MissionWorkflow from './components/MissionWorkflow'; // Import the new component

import './components/Team/team.css';

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

// Create a wrapper component for the Mission page to include Navbar and Footer
const MissionPage = () => {
  return (
    <>
      <Navbar />
      <MissionWorkflow />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="relative">
      {/* layout pieces shown on every page */}
      <SocialSidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/udbhav" element={<UdbhavPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/allteam" element={<AllTeam />} />
        <Route path="/all-team" element={<AllTeam />} /> 
        
        {/* New Route for Mission & Workflow */}
        <Route path="/mission" element={<MissionPage />} />
      </Routes>
    </div>
  );
}

export default App;