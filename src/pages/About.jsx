import React from 'react';
import { ThermometerSun, Users, CalendarClock, TrendingUp, Hammer } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page animate-fade-in" style={{ backgroundColor: 'white', minHeight: '100vh', paddingBottom: '6rem' }}>
      
      {/* 1. Hero Section with Background */}
      <div style={{
        position: 'relative',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '8rem',
        backgroundImage: `url('https://images.unsplash.com/photo-1592982537447-6f2c3ab5e003?q=80&w=2670&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(17, 24, 39, 0.7)',
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
          <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.2)', color: '#4ade80', padding: '0.5rem 1.5rem', borderRadius: '2rem', fontWeight: '600', marginBottom: '2rem', border: '1px solid rgba(74,222,128,0.3)', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Kisaan Mitra's
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Eco-conscious reaper
            <br />
            <span style={{ color: 'var(--primary-green)' }}>revolutionizing farmers lives</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#d1d5db', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Powering Sustainable Agriculture. An electrical reaper that cuts cost, enhances efficiency and reduces carbon footprint.
          </p>
        </div>
      </div>

      {/* 2. Mission / About Us Section */}
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(300px, 1fr)', gap: '6rem', alignItems: 'center' }}>
          
          {/* Left: Text */}
          <div>
            <h2 style={{ fontSize: '1rem', color: 'var(--primary-green)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
              About Us
            </h2>
            <h3 style={{ fontSize: '2.75rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '2rem', lineHeight: '1.3' }}>
              Engineered to save farmers <span style={{ color: 'var(--primary-green)' }}>time and effort.</span>
            </h3>
            
            <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              <strong>Kisaan Mitra</strong> is a revolutionary multi-purpose electric reaper designed to perform essential farming functions, significantly reducing costs and increasing operational efficiency.
            </p>
            
            <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Being an electric reaper, Kisaan Mitra contributes to environmental sustainability by reducing carbon emissions and promoting green technology. 
            </p>

            <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.8' }}>
              Our product is specifically engineered to decrease maintenance and operational costs, ultimately improving the overall quality of life for farmers globally.
            </p>
          </div>

          {/* Right: Modern Visual Array */}
          <div style={{ position: 'relative' }}>
             <img 
               src="https://images.unsplash.com/photo-1595821946022-294026bdca5a?q=80&w=2670&auto=format&fit=crop" 
               alt="Sustainable Farming" 
               style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', position: 'relative', zIndex: 2 }}
             />
             <div style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', background: 'var(--primary-green)', color: 'white', padding: '2rem', borderRadius: '1rem', zIndex: 3, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1' }}>100%</div>
                <div style={{ fontSize: '1rem', fontWeight: '500', opacity: 0.9 }}>Green Technology</div>
             </div>
             {/* Decorative blob behind */}
             <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '100%', height: '100%', background: 'rgba(40,179,75,0.1)', borderRadius: '3rem', zIndex: 1, transform: 'rotate(-3deg)' }}></div>
          </div>
          
        </div>
      </div>

      {/* 3. Small Farmers with Big Problems */}
      <div style={{ backgroundColor: 'var(--bg-gray)', padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem auto' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Small Farmers with their <span style={{ color: 'var(--primary-green)' }}>Big Problems</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              We've observed the harsh realities of the agricultural sector and engineered our system to tackle these exact roadblocks.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {[
              { icon: <ThermometerSun size={32} />, title: 'Extreme Working Conditions' },
              { icon: <Users size={32} />, title: 'Labour Intensive Harvesting' },
              { icon: <CalendarClock size={32} />, title: 'Last Preference by Harvester' },
              { icon: <TrendingUp size={32} />, title: 'Costly Harvesting Alternatives' },
              { icon: <Hammer size={32} />, title: 'Dependency on Outdated Tools' }
            ].map((problem, idx) => (
              <div key={idx} style={{ 
                background: 'white', 
                padding: '2.5rem', 
                borderRadius: '1.5rem', 
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', 
                textAlign: 'center',
                flex: '1 1 300px',
                maxWidth: '350px',
                border: '1px solid #f3f4f6',
                borderTop: '4px solid var(--primary-green)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.05)'; }}
              >
                <div style={{ display: 'inline-flex', background: 'rgba(40,179,75,0.1)', color: 'var(--primary-green)', padding: '1.25rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                  {problem.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-dark)', lineHeight: '1.4' }}>
                  {problem.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
