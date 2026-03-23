import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'white',
      padding: '1.5rem 0',
      borderTop: '1px solid #e5e7eb',
      textAlign: 'center'
    }}>
      <div className="container">
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} KisaanMitra. All rights reserved. Made by YouWare.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
