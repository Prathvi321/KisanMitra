import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-page animate-fade-in" style={{ backgroundColor: '#111827', minHeight: '100vh', color: 'white', paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
          
          {/* Left Side: Contact Info */}
          <div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Get in Touch</h1>
            <p style={{ fontSize: '1.125rem', color: '#9ca3af', marginBottom: '4rem', maxWidth: '80%' }}>
              Have questions? We'd love to hear from you. Reach out to us and we'll respond as soon as possible.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {[
                { icon: <MapPin />, title: 'Address', detail: '120, Rohit Nagar Phase 2, Bawadia Kalan, Bhopal - 462026' },
                { icon: <Phone />, title: 'Phone', detail: '+91 974 029 8479' },
                { icon: <Mail />, title: 'Email', detail: 'info@kisaanmitra.in' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ 
                    background: 'rgba(46, 125, 50, 0.1)', 
                    color: '#4ade80', 
                    padding: '1rem', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.title}</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: '500' }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div style={{ 
            background: '#1f2937', 
            borderRadius: '1.5rem', 
            padding: '3rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem' }}>Send us a Message</h2>
            
            <form name="contact" method="POST" data-netlify="true" action="/contact" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Hidden input for netlify forms */}
              <input type="hidden" name="form-name" value="contact" />
              
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{ flex: 1, padding: '1rem', borderRadius: '0.5rem', border: '1px solid #374151', background: '#374151', color: 'white', outline: 'none' }}
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{ flex: 1, padding: '1rem', borderRadius: '0.5rem', border: '1px solid #374151', background: '#374151', color: 'white', outline: 'none' }}
                />
              </div>

              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                required
                value={formData.subject}
                onChange={handleChange}
                style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #374151', background: '#374151', color: 'white', outline: 'none' }}
              />

              <textarea 
                name="message" 
                placeholder="Your Message" 
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #374151', background: '#374151', color: 'white', outline: 'none', resize: 'vertical' }}
              ></textarea>

              <button type="submit" className="btn btn-orange" style={{ width: '100%', padding: '1.25rem', fontSize: '1.125rem', marginTop: '1rem' }}>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
