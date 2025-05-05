import React from 'react';
import logo from '../3images/ERY.png';

export default function Navbar() {
  return (
    <nav className="navbar py-3" style={{ backgroundColor: '#D98664' }}>
      <div className="container d-flex justify-content-center">
      <img
          src={logo}
          alt="WaddlePup logo"
          style={{
            height: '60px',
            transform: 'scale(1.8)',
            transformOrigin: 'center',
          }}
        />
      </div>
    </nav>
  );
}
