import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About/About';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact/Contact';
import ClubsAndOrganisations from './pages/ClubsAndOrganisations';
import ThingsToDo from './pages/Activities';
import LatestNews from './pages/News';
import HeritageAndHistory from './pages/Heritage';
import { home, about, facilities, contact, clubs, activities, news, gallery, heritage,events } from './config/routes';
import Projects from './pages/About/Projects';
import ScrollToTop from './components/Common/ScrollToTop';
import EventsPage from './pages/Events/EventsPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={home} element={<Home />} />
            <Route path={about.index} element={<About />} />
            <Route path={about.projects} element={<Projects />} />
            <Route path={facilities.index} element={<Facilities />} />
            <Route path={contact} element={<Contact />} />
            <Route path={clubs} element={<ClubsAndOrganisations />} />
            <Route path={activities.index} element={<ThingsToDo />} />
            <Route path={news.index} element={<LatestNews />} />
            <Route path={gallery} element={<Gallery />} />
            <Route path={heritage.index} element={<HeritageAndHistory />} />
            <Route path={events.index} element={<EventsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;