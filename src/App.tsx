import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';
import ClubsAndOrganisations from './pages/ClubsAndOrganisations';
import ThingsToDo from './pages/ThingsToDo';
import LatestNews from './pages/LatestNews';
import { home, about, facilities, contact, clubs, activities, news, gallery } from './config/routes';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={home} element={<Home />} />
            <Route path={about.index} element={<About />} />
            <Route path={facilities.index} element={<Facilities />} />
            <Route path={contact} element={<Contact />} />
            <Route path={clubs} element={<ClubsAndOrganisations />} />
            <Route path={activities.index} element={<ThingsToDo />} />
            <Route path={news.index} element={<LatestNews />} />
            <Route path={gallery} element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;