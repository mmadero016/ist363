import React from 'react';

export default function Navbar() {
  return (
    <nav
      className="navbar px-4 py-3"
      style={{ backgroundColor: '#d57d64' }} // <- match your original color
    >
      <div className="container-fluid">
        <h1 className="navbar-brand bg-dark text-white fw-bold m-0" style={{ fontFamily: 'Margarine, sans-serif' }}>
          WaddlePup
        </h1>
      </div>
    </nav>
  );
}
