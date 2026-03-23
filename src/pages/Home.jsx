import React from 'react';
import { Leaf, Zap, Wind, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#2e7d32', /* var(--primary-green) fallback */
        background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '6rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Abstract background blobs */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px', background: 'rgba(255,255,255,0.03)', borderRadius: '50%', filter: 'blur(100px)' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'rgba(255, 255, 255, 0.1)', 
            padding: '0.5rem 1rem', 
            borderRadius: '9999px',
            marginBottom: '2rem',
            backdropFilter: 'blur(8px)'
          }}>
            <Leaf size={16} />
            <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Sustainable Agriculture Solution</span>
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Improving Farmer's <br/>
            <span style={{ color: '#81c784' }}>Quality of Life</span>
          </h1>

          <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', maxWidth: '800px', margin: '0 auto 3rem auto', opacity: 0.9, lineHeight: '1.6' }}>
            Electrical reaper that cuts cost, enhances efficiency, and reduces carbon footprint
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '5rem' }}>
            <a href="/contact" className="btn btn-orange" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Contact Us &rarr;
            </a>
            <a href="#learn-more" className="btn btn-transparent" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Learn More
            </a>
          </div>

          {/* Stats Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '3rem'
          }}>
            {[
              { percentage: '89.4%', label: 'Small Farmers in India' },
              { percentage: '80%', label: 'Maintenance Savings' },
              { percentage: '90%', label: 'Operation Cost Reduction', suffix: <Leaf size={16} style={{display:'inline', marginLeft:'5px'}}/> },
              { percentage: 'Zero', label: 'Carbon Emissions' }
            ].map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  {stat.percentage} {stat.suffix}
                </div>
                <div style={{ fontSize: '1rem', opacity: 0.8 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section style={{ padding: '6rem 0 2rem 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: '800', color: '#1f2937', marginBottom: '1rem' }}>
              Small Farmers with <span style={{ color: 'var(--primary-green)' }}>Big Problems</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              Understanding the challenges faced by Indian farmers
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Extreme Working Conditions', desc: 'Laborious tasks in harsh weather conditions affecting health and productivity', icon: '🌡️' },
              { title: 'Labor Intensive Harvesting', desc: 'Manual harvesting consumes excessive time and energy', icon: '🌾' },
              { title: 'Last Preference by Harvester', desc: 'Small farmers often ignored by mechanical harvester services', icon: '⚙️' },
              { title: 'Costly Alternatives', desc: 'Existing harvesting solutions are expensive for small farmers', icon: '💰' },
              { title: 'Outdated Tools', desc: 'Dependency on traditional, inefficient farming equipment', icon: '🔧' },
              { title: 'Fuel Dependency', desc: 'Rising fuel costs add to operational expenses', icon: '⛽' }
            ].map((card, idx) => (
              <div key={idx} style={{ 
                background: 'white', 
                padding: '2.5rem', 
                borderRadius: '1.5rem', 
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                border: '1px solid #f3f4f6',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.05)';
              }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{card.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#1f2937' }}>{card.title}</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section id="learn-more" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: '800', color: '#1f2937' }}>
              One Equipment for <span style={{ color: 'var(--primary-green)' }}>Multiple Farming Operations</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'center' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: <Zap size={24} />, title: 'Weeder', desc: 'Effortlessly remove weeds without damaging crops' },
                { icon: <Leaf size={24} />, title: 'Tiller', desc: 'Prepare soil efficiently for planting season' },
                { icon: <Wind size={24} />, title: 'Sprayer', desc: 'Apply fertilizers and pesticides uniformly' },
                { icon: <DollarSign size={24} />, title: 'Sowing Machine', desc: 'Plant seeds with precision and consistency' },
                { icon: <Leaf size={24} />, title: 'Reaper', desc: 'Harvest crops quickly with minimal loss' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', background: 'var(--bg-gray)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #f3f4f6' }}>
                  <div style={{ background: '#e8f5e9', color: 'var(--primary-green)', padding: '1rem', borderRadius: '0.75rem', height: 'fit-content', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem', color: '#1f2937' }}>{item.title}</h3>
                    <p style={{ color: '#6b7280' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ 
              border: '3px solid var(--primary-green)', 
              borderRadius: '2rem', 
              padding: '3rem', 
              background: 'white',
              position: 'relative',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '2rem', color: '#1f2937' }}>Key Benefits</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  'Drastically cut costs with multi-functionality',
                  'Streamline farming operations',
                  'Year-round usability',
                  'Enhanced equipment maintenance',
                  'Increased usability & sustainability'
                ].map((benefit, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.125rem', color: '#374151' }}>
                    <div style={{ color: 'white', background: 'var(--primary-green)', borderRadius: '50%', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', marginTop: '2px' }}>✓</div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{ padding: '8rem 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: '800', color: '#1f2937', marginBottom: '1rem' }}>
              IC Engine vs <span style={{ color: 'var(--primary-green)' }}>EV Reaper</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              See the difference technology makes
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '2rem', alignItems: 'stretch' }}>
            
            {/* IC Engine Reaper */}
            <div style={{ 
              background: 'white', 
              borderRadius: '1.5rem', 
              overflow: 'hidden',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
              border: '1px solid #f3f4f6',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ background: '#1f2937', color: 'white', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>IC Engine Reaper</h3>
              </div>
              <div style={{ padding: '0 2rem' }}>
                {[
                  { label: 'Initial Cost', value: 'Lower', color: '#1f2937' },
                  { label: 'Maintenance', value: 'High (₹2000/200hrs)', color: '#ef4444' },
                  { label: 'Fuel Cost', value: '₹100/acre', color: '#ef4444' },
                  { label: 'Ergonomics', value: 'High noise & jerk', color: '#ef4444' },
                  { label: 'Pollution', value: '2.3kg CO2/hour', color: '#ef4444' },
                  { label: 'Fuel Availability', value: 'Limited', color: '#ef4444' },
                  { label: 'Sustainability', value: 'Non-renewable', color: '#ef4444' }
                ].map((row, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem 0', borderBottom: idx !== 6 ? '1px solid #f3f4f6' : 'none' }}>
                    <span style={{ color: '#6b7280' }}>{row.label}</span>
                    <span style={{ fontWeight: '600', color: row.color }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* EV Reaper */}
            <div style={{ 
              background: 'white', 
              borderRadius: '1.5rem', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(46,125,50,0.15)',
              border: '1px solid #e8f5e9',
              display: 'flex',
              flexDirection: 'column',
              transform: 'scale(1.02)',
              position: 'relative',
              zIndex: 10
            }}>
              <div style={{ background: 'var(--primary-green)', color: 'white', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.25rem' }}>EV Reaper</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>The Future of Farming</p>
              </div>
              <div style={{ padding: '0 2rem', flex: 1 }}>
                {[
                  { label: 'Initial Cost', value: '10% Higher', color: '#1f2937' },
                  { label: 'Maintenance', value: 'Low (₹200/200hrs)', color: 'var(--primary-green)' },
                  { label: 'Fuel Cost', value: '₹2/acre', color: 'var(--primary-green)' },
                  { label: 'Ergonomics', value: 'Silent operation', color: 'var(--primary-green)' },
                  { label: 'Pollution', value: 'Zero emissions', color: 'var(--primary-green)' },
                  { label: 'Fuel Availability', value: 'Easy (Electric)', color: 'var(--primary-green)' },
                  { label: 'Sustainability', value: 'Solar powered', color: 'var(--primary-green)' }
                ].map((row, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem 0', borderBottom: idx !== 6 ? '1px solid #f3f4f6' : 'none' }}>
                    <span style={{ color: '#6b7280' }}>{row.label}</span>
                    <span style={{ fontWeight: '600', color: row.color }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#f8fafc', padding: '1.5rem', textAlign: 'center', borderTop: '1px solid #f3f4f6' }}>
                <p style={{ color: 'var(--primary-green)', fontWeight: '600', fontSize: '0.875rem' }}>💰 Savings in fuel cost can cover the cost in 6 months!</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Protecting The Yield Section */}
      <section style={{ padding: '0 0 6rem 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1f2937', marginBottom: '1rem' }}>
              Protecting The <span style={{ color: 'var(--primary-green)' }}>Yield</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              Electric reapers offer specific advantages for maximum harvest
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Increased Hay Production', desc: 'Cutting crops close to the ground maximizes hay yield per harvest', icon: '🌾' },
              { title: 'Reduced Stubble Removal Costs', desc: 'Minimal stubble saves time and money on land preparation', icon: '💰' },
              { title: 'Soil Health', desc: 'Less stubble reduces pest infestations and diseases', icon: '🌱' },
              { title: 'Environmental Impact', desc: 'Eliminates stubble burning, protecting air quality', icon: '🍃' },
            ].map((card, idx) => (
              <div key={idx} style={{ 
                background: 'var(--bg-gray)', 
                padding: '2.5rem', 
                borderRadius: '1.5rem', 
                display: 'flex', 
                gap: '1.5rem',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '3rem' }}>{card.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1f2937' }}>{card.title}</h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agricultural Air Pollution Section */}
      <section style={{ padding: '8rem 0', backgroundColor: '#1b5e20', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: '800', marginBottom: '1rem' }}>
              Agricultural Air Pollution
            </h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
              Understanding the impact of traditional farming
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Hazardous Smoke from Stubble Burning</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Releases pollutants like PM, CO, and VOCs', 'Contributes to 32% of PM2.5 levels in North India', 'Causes respiratory diseases and cardiovascular problems'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', opacity: 0.9 }}>
                    <div style={{ color: 'var(--accent-orange)', marginTop: '4px' }}>•</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Diesel Engine Emissions</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Emits nitrogen oxides, sulfur oxides, CO2, and PM', 'Agriculture contributes to 14% of GHG emissions in India', 'Linked to respiratory illnesses and premature deaths'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', opacity: 0.9 }}>
                    <div style={{ color: 'var(--accent-orange)', marginTop: '4px' }}>•</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ background: '#4b5320', padding: '2rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>In India, air pollution claimed 1,69,400 children's lives in 2021</h3>
          </div>
        </div>
      </section>

      {/* Business Models Section */}
      <section style={{ padding: '8rem 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: '800', color: '#1f2937', marginBottom: '1rem' }}>
              Our <span style={{ color: 'var(--primary-green)' }}>Business Models</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              Flexible solutions for every farmer
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'B2G Model', color: '#2563eb', desc: 'Collaborations with Government Bodies to align with agricultural welfare initiatives', points: ['Government contracts', 'Subsidies & grants', 'Krishi Uddhar Scheme'] },
              { title: 'Retail Distribution', color: '#9333ea', desc: 'Wide network of retail partners for easy access across India', points: ['Pan-India presence', 'Easy financing options', 'Local support'] },
              { title: 'Leasing Model', color: '#ea580c', desc: 'Pay-as-you-use model for affordable access to modern equipment', points: ['Low upfront cost', 'Flexible terms', 'Maintenance included'] }
            ].map((model, idx) => (
              <div key={idx} style={{ background: 'white', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: model.color, color: 'white', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{model.title}</h3>
                </div>
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ color: '#4b5563', marginBottom: '2rem', lineHeight: '1.6' }}>{model.desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
                    {model.points.map((point, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#374151' }}>
                        <div style={{ color: '#10b981' }}>✓</div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-gray)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1f2937', marginBottom: '1.5rem' }}>Ready to Transform Your Farming?</h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto' }}>Join the KisaanMitra family today and experience the future of sustainable agriculture.</p>
          <Link to="/contact" className="btn btn-orange" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem', display: 'inline-block' }}>Contact Us &rarr;</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
