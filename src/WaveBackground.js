import React, { useState, useEffect } from 'react';
import './WaveBackground.css';

const WaveBackground = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Check for user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionPreference = (e) => {
      setIsVisible(!e.matches);
    };
    
    handleMotionPreference(mediaQuery);
    
    mediaQuery.addEventListener('change', handleMotionPreference);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreference);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="wave-container">
      <svg className="wave" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--cyber-pink)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--cyber-blue)" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--cyber-blue)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--cyber-cyan)" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--cyber-purple)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--cyber-pink)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Wave 1 - Slow and subtle */}
        <path 
          className="wave-path wave1" 
          fill="url(#wave1)"
          d="M0,400 Q300,350 600,400 Q900,450 1200,400 L1200,800 L0,800 Z"
        />
        
        {/* Wave 2 - Medium speed */}
        <path 
          className="wave-path wave2" 
          fill="url(#wave2)"
          d="M0,500 Q300,450 600,500 Q900,550 1200,500 L1200,800 L0,800 Z"
        />
        
        {/* Wave 3 - Faster */}
        <path 
          className="wave-path wave3" 
          fill="url(#wave3)"
          d="M0,600 Q300,550 600,600 Q900,650 1200,600 L1200,800 L0,800 Z"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;