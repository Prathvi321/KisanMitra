import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      background: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.98)',
      color: isTransparent ? 'white' : 'var(--text-dark)',
      borderBottom: isTransparent ? 'none' : '1px solid #e5e7eb',
      boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/Logo.png" alt="Kisaan Mitra Logo" style={{ height: '40px', objectFit: 'contain' }} />
          </Link>
        </div>
        
        <ul style={{ display: 'flex', gap: '2rem', fontWeight: '500' }}>
          {['Home', 'Product', 'About Us', 'Contact'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
            return (
              <li key={item}>
                <Link 
                  to={path} 
                  style={{ 
                    transition: 'color 0.3s ease',
                    opacity: 0.9,
                  }}
                  onMouseOver={(e) => e.target.style.opacity = 1}
                  onMouseOut={(e) => e.target.style.opacity = 0.9}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
