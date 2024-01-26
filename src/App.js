import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      {/* Navigation Links */}
      <nav className="mx-auto max-w-7xl flex items-center justify-around p-2 bg-white shadow-md">
      <Link to="/">
        <img src="/logo.svg" alt="Barefoot Beauty Logo" className="h-20" />
      </Link>
        <Link to="/" className="text-gold hover:text-brown">Home</Link>
        <Link to="/about" className="text-gold hover:text-brown">About</Link>
        <Link to="/services" className="text-gold hover:text-brown">Services</Link>
        <Link to="/portfolio" className="text-gold hover:text-brown">Portfolio</Link>
        <Link to="/contact" className="text-gold hover:text-brown">Contact</Link>
      </nav>

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
