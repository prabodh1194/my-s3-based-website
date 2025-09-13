import React from 'react';

const ColorPalette = () => {
  // Cyberpunk dark theme colors
  const darkColors = [
    { name: 'Cyber Dark', value: '#000000' },
    { name: 'Cyber Dark Secondary', value: '#0a0a1a' },
    { name: 'Cyber Dark Tertiary', value: '#10102a' },
    { name: 'Cyber Dark Accent', value: '#1a1a3a' }
  ];

  // Cyberpunk neon accent colors
  const neonColors = [
    { name: 'Cyber Pink', value: '#ff00ff' },
    { name: 'Cyber Blue', value: '#0088ff' },
    { name: 'Cyber Cyan', value: '#00ffff' },
    { name: 'Cyber Green', value: '#00ff88' },
    { name: 'Cyber Yellow', value: '#ffff00' },
    { name: 'Cyber Purple', value: '#8800ff' },
    { name: 'Cyber Orange', value: '#ff5500' },
    { name: 'Cyber Red', value: '#ff0055' }
  ];

  // Text colors
  const textColors = [
    { name: 'Text Primary', value: '#ffffff' },
    { name: 'Text Secondary', value: '#cccccc' },
    { name: 'Text Tertiary', value: '#999999' },
    { name: 'Text Muted', value: '#666666' }
  ];

  return (
    <div className="row fs-5 fw-light">
      <h3 className="align left fw-bold rainbow">Cyberpunk Color Palette</h3>
      <div className="mt-4">
        <h4 className="fw-bold cyber-text">Dark Theme Colors</h4>
        <div className="d-flex flex-wrap gap-4 mt-3">
          {darkColors.map((color, index) => (
            <div key={index} className="d-flex flex-column align-items-center color-card">
              <div 
                className="neon-border" 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  backgroundColor: color.value,
                  border: '2px solid #333'
                }}
              />
              <div className="mt-2 text-center">
                <div className="fw-bold" style={{ color: color.value === '#000000' ? '#ffffff' : color.value }}>{color.name}</div>
                <div className="small text-tertiary">{color.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h4 className="fw-bold cyber-text">Neon Accent Colors</h4>
        <div className="d-flex flex-wrap gap-4 mt-3">
          {neonColors.map((color, index) => (
            <div key={index} className="d-flex flex-column align-items-center color-card">
              <div 
                className="neon-border" 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  backgroundColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 15px ${color.value}`
                }}
              >
                <span style={{ color: color.value, fontSize: '2.5rem' }}>Aa</span>
              </div>
              <div className="mt-2 text-center">
                <div className="fw-bold" style={{ color: color.value }}>{color.name}</div>
                <div className="small text-tertiary">{color.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h4 className="fw-bold cyber-text">Text Colors</h4>
        <div className="d-flex flex-wrap gap-4 mt-3">
          {textColors.map((color, index) => (
            <div key={index} className="d-flex flex-column align-items-center color-card">
              <div 
                className="neon-border" 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  backgroundColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span style={{ color: color.value, fontSize: '2.5rem' }}>Aa</span>
              </div>
              <div className="mt-2 text-center">
                <div className="fw-bold" style={{ color: color.value }}>{color.name}</div>
                <div className="small text-tertiary">{color.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h4 className="fw-bold cyber-text">Example Components</h4>
        <div className="mt-3">
          <h5>Navigation Buttons</h5>
          <div className="d-flex gap-3 mt-2">
            <button className="nav-btn fw-light">Home</button>
            <button className="nav-btn fw-light">Blog</button>
            <button className="nav-btn fw-light neon-border">Colors</button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h5>Text Examples</h5>
        <div className="mt-2">
          <p className="neon-glow">This text has a neon glow effect</p>
          <p className="rainbow">This text has the rainbow gradient effect</p>
          <p className="cyber-text">This text has the cyber blue effect</p>
          <p>This is normal text with <a href="#">a link</a></p>
        </div>
      </div>

      <div className="mt-4">
        <h5>Highlighted Section</h5>
        <div className="highlight mt-2">
          <p>This is a highlighted section with a neon left border and dark background.</p>
        </div>
      </div>

      <div className="mt-4">
        <h5>Code Example</h5>
        <div className="mt-2">
          <pre><code>const greeting = "Hello World";
console.log(greeting);</code></pre>
        </div>
      </div>
      
      <div className="mt-4">
        <h5>Glitch Effect</h5>
        <div className="mt-2">
          <p className="glitch" data-text="Cyber Glitch Text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>Cyber Glitch Text</p>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;