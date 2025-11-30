import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inauguration from './components/Inauguration';
import Initiatives from './components/Initiatives';
import Team from './components/Team';
import Footer from './components/Footer';
import UdbhavPage from './pages/UdbhavPage';
import IdeathonPage from './pages/IdeathonPage'; // Import the new page

// Home Component
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Inauguration />
      <Initiatives />
      <Team />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/udbhav" element={<UdbhavPage />} />
      <Route path="/ideathon" element={<IdeathonPage />} /> {/* New Route */}
    </Routes>
  );
}

export default App;