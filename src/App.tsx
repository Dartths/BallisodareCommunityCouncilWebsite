import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';
import ClubsAndOrganisations from './pages/ClubsAndOrganisations';
import ThingsToDo from './pages/ThingsToDo';
import LatestNews from './pages/LatestNews';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clubs-and-organisations" element={<ClubsAndOrganisations />} />
            <Route path="/things-to-do" element={<ThingsToDo />} />
            <Route path="/latest-news" element={<LatestNews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;