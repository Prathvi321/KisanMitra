import React from 'react';

const Product = () => {
  return (
    <div className="animate-fade-in" style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '6rem'
    }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--primary-green)' }}>Our Product</h1>
        <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
          Content coming soon. Product details will be provided later.
        </p>
      </div>
    </div>
  );
};

export default Product;
