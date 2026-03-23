import React from 'react';
import {
  MoveVertical, Gauge, Settings2, BatteryMedium, Crosshair, Move,
  RefreshCw, VolumeX, Leaf, Wrench, Clock, Settings, Lightbulb,
  Flashlight, ShieldCheck, Gamepad2, BatteryCharging
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="product-page animate-fade-in" style={{
      minHeight: '100vh',
      paddingTop: '8rem',
      paddingBottom: '4rem',
      backgroundColor: 'var(--bg-light)', // Light background
      position: 'relative'
    }}>

      {/* Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 1, color: 'var(--text-dark)' }}>

        {/* 1. Hero / Product Overview */}
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'center', marginBottom: '8rem' }}>

          {/* Left: Product Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -20, background: 'radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 70%)', zIndex: -1 }}></div>
            <img
              src="/Product Image 1.png"
              alt="1999 Volvo L180C - Diesel"
              style={{ width: '100%', filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.1))' }}
            />
          </div>

          {/* Right: Text & Details */}
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-dark)', lineHeight: '1.2' }}>
              1999 Volvo L180C - Diesel
            </h1>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-green)', marginBottom: '3rem', fontWeight: '500' }}>
              Crafted with precision and designed for farmers.
            </h2>

            {/* 3 Icons Row */}
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              {[
                { icon: <MoveVertical size={24} />, text: 'Height Adjustment' },
                { icon: <Gauge size={24} />, text: 'Speed Control' },
                { icon: <Settings2 size={24} />, text: 'Independent blade & wheels' }
              ].map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', textAlign: 'left', flex: 1, minWidth: '120px' }}>
                  <div style={{ background: 'rgba(40,179,75,0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary-green)', display: 'inline-flex' }}>
                    {feat.icon}
                  </div>
                  <span style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.4', fontWeight: '500' }}>{feat.text}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn btn-orange" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', display: 'inline-block' }}>
              Request a Quote
            </Link>
          </div>
        </div>

        {/* 2. Features Grid (Overview) */}
        <div className="container" style={{ marginBottom: '8rem' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center' }}>
            Product <span style={{ color: 'var(--primary-green)' }}>Overview</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <BatteryMedium size={28} />, title: 'Long Lasting Power' },
              { icon: <Crosshair size={28} />, title: 'Precious Control' },
              { icon: <Move size={28} />, title: 'Effortless Maneuverability' },
              { icon: <RefreshCw size={28} />, title: 'Quick-Swap Battery' },
              { icon: <VolumeX size={28} />, title: 'Whisper Quiet Operations' },
              { icon: <Leaf size={28} />, title: 'Zero direct carbon emission' },
              { icon: <Wrench size={28} />, title: 'No oil change & reduced repairs' },
              { icon: <Clock size={28} />, title: 'Harvests an acre in one hour' },
              { icon: <Settings size={28} />, title: 'Maintenance free drive' }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                padding: '1.5rem 2rem',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
              }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)'; }}>
                <div style={{ color: 'var(--primary-green)' }}>{item.icon}</div>
                <span style={{ fontWeight: '600', fontSize: '1.125rem', color: 'var(--text-dark)' }}>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Optimized For Nighttime Operations */}
        <div className="container" style={{ marginBottom: '8rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--primary-green)' }}>Optimized For</span> Night time Operations
            </h3>
            <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.6' }}>
              Kisaan Mitra is designed with advanced features that ensure seamless operation both day and night, enhancing farming productivity and flexibility.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Lightbulb size={28} />, title: 'Powerful LED Lights', desc: 'Equipped with high-intensity LED lights, Kisaan Mitra provides excellent visibility, allowing farmers to work efficiently after sunset.' },
              { icon: <VolumeX size={28} />, title: 'Quiet Operation', desc: 'The electric motor runs quietly, reducing noise pollution and enabling nighttime operation without disturbing the surroundings.' },
              { icon: <Flashlight size={28} />, title: 'Farm Lighting Capability', desc: 'Kisaan Mitra can power additional lights in the fields, providing comprehensive illumination to aid in various farming tasks during the night.' },
              { icon: <ShieldCheck size={28} />, title: 'Durable Build', desc: 'Built to withstand varying weather conditions, Kisaan Mitra performs reliably in different environments, ensuring consistent productivity.' },
              { icon: <Gamepad2 size={28} />, title: 'User-Friendly Controls', desc: 'Easy-to-use controls make it simple to operate Kisaan Mitra in low-light conditions.' },
              { icon: <BatteryCharging size={28} />, title: 'Battery Efficiency', desc: 'The long-lasting battery ensures extended operation hours, making it feasible for farmers to work late into the night without interruption.' }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '1.5rem',
                border: '1px solid #e5e7eb',
                textAlign: 'center',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'inline-flex', background: 'rgba(40,179,75,0.1)', color: 'var(--primary-green)', padding: '1.25rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-dark)' }}>{item.title}</h4>
                <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '1rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Multi-Farming Operations & Newsletter */}
        <div className="container" style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--primary-green)' }}>One Equipment For</span> Multiple Farming Operations
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.5fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'stretch' }}>

            {/* Left: Accordion / List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'Revolutionary multi-functionality', desc: 'Acts as a: Weeder, Tiller, Sprayer, Sowing Machine, Reaper. Hybrid Extension: Easily switch between functions with hybrid attachments.' },
                { title: 'Cost-effective and efficient', desc: 'Drastically Cut Costs: Reduce the need for multiple pieces of equipment. Boost Efficiency: Streamline your farming operations with one multifunctional tool.' },
                { title: 'Year-round usability', desc: 'Continuous Operation: Designed for use throughout the year, adapting to various farming seasons and needs. Enhanced Performance: Keep your equipment in top working condition by using it for multiple purposes.' },
                { title: 'Optimal equipment maintenance', desc: 'Increased Usability: Extend the lifespan of Kisaan Mitra by utilizing it for diverse agricultural tasks. Sustainable Farming: Promote sustainable practices with reliable and versatile equipment.' }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: 'white',
                  borderLeft: '4px solid var(--primary-green)',
                  padding: '1.5rem 2rem',
                  borderRadius: '0 1rem 1rem 0',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                  border: '1px solid #e5e7eb',
                  borderLeftWidth: '4px'
                }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>{item.title}</h4>
                  <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '1rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: Newsletter Subscribe */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(40,179,75,0.05), rgba(40,179,75,0.15))',
              padding: '4rem 3rem',
              borderRadius: '2rem',
              textAlign: 'center',
              border: '1px solid rgba(40,179,75,0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h4 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-dark)' }}>Subscribe to our newsletter</h4>
              <p style={{ color: '#4b5563', marginBottom: '3rem', fontSize: '1.125rem', lineHeight: '1.6' }}>and be the first to know about exclusive offers, new arrivals, and insider tips.</p>
              <form name="newsletter" method="POST" data-netlify="true" action="/product" style={{ display: 'flex', gap: '1.5rem', flexDirection: 'column' }}>
                <input type="hidden" name="form-name" value="newsletter" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  required
                  style={{
                    width: '100%',
                    padding: '1.25rem',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(40,179,75,0.3)',
                    background: 'white',
                    color: 'var(--text-dark)',
                    outline: 'none',
                    fontSize: '1rem',
                    boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)'
                  }}
                />
                <button type="submit" className="btn btn-orange" style={{ padding: '1.25rem', width: '100%', fontWeight: '700', fontSize: '1.125rem' }}>
                  Submit Now
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
