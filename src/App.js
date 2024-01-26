import './App.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function Navigation() {
  // Get the current location (route) using useLocation from react-router-dom
  const location = useLocation();

  return (
    <nav className="flex items-center justify-around p-2 bg-white">
      <Link to="/">
        <img src="/logo.svg" alt="Barefoot Beauty Logo" className="h-24" />
      </Link>
      <Link to="/" className={`text-gold hover:text-brown custom-font ${location.pathname === '/' ? 'active-link' : ''}`}>
        Home
      </Link>
      <Link to="/about" className={`text-gold hover:text-brown custom-font ${location.pathname === '/about' ? 'active-link' : ''}`}>
        About
      </Link>
      <Link to="/services" className={`text-gold hover:text-brown custom-font ${location.pathname === '/services' ? 'active-link' : ''}`}>
        Services
      </Link>
      <Link to="/portfolio" className={`text-gold hover:text-brown custom-font ${location.pathname === '/portfolio' ? 'active-link' : ''}`}>
        Portfolio
      </Link>
      <Link to="/contact" className={`text-gold hover:text-brown custom-font ${location.pathname === '/contact' ? 'active-link' : ''}`}>
        Contact
      </Link>
    </nav>
  );
}

function App() {
  return (
    <div className="App mx-auto max-w-6xl">
      {/* Navigation Component */}
      <Navigation />

      {/* Routes and Route Definitions */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
