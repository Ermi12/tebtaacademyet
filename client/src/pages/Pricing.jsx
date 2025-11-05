import React, { useState } from 'react';

export default function Pricing() {
  const [mode, setMode] = useState('In-Person');

  const pricing = {
    'In-Person': '650 ETB/hr',
    'Online': '500 ETB/hr',
  };

  return (
    <div className="pricing-container">
      <h2 className='text-3xl font-bold text-center mb-10'>Pricing & Packages 💰</h2>

      <div className="toggle-buttons">
        {['In-Person', 'Online'].map((item) => (
          <button
            key={item}
            onClick={() => setMode(item)}
            className={mode === item ? 'active' : ''}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="pricing-card">
        <h3>{mode} Session</h3>
        <p>{pricing[mode]}</p>
      </div>

      <p className="info-text">Flexible scheduling available for both in-person and online sessions.</p>
    </div>
  );
}
