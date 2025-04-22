import React from 'react';

const Pioneer = ({ pioneer, onReturn }) => {
  return (
    <div>
      <h2 className="text-left mb-4">Internet Pioneers Bios</h2>
      <div
        className="card mx-auto p-4 text-white"
        style={{ backgroundColor: '#4b4b4b', maxWidth: '700px', borderRadius: '10px' }}
      >
        <h4 className="mb-3">{pioneer.name}</h4>
        <img
          src={pioneer.image}
          alt={pioneer.name}
          className="img-fluid mb-3"
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <p><strong>Age:</strong> {pioneer.age}</p>
        <p><strong>Known For:</strong><br />{pioneer.knownFor}</p>
        <button className="btn btn-primary mt-3" onClick={onReturn}>
          Return to Directory
        </button>
      </div>
    </div>
  );
};

export default Pioneer;
