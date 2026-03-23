import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Product from './pages/Product';
import './index.css';

// Component to handle auto-scrolling to top on route change 
// and attaching IntersectionObserver for scroll animations
function ScrollHandling() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Fix the scroll for other pages (always open from top)
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // 2. Add smooth animation while scrolling
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // Target all .container elements globally
    const elements = document.querySelectorAll('.container');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollHandling />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
