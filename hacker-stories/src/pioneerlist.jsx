import React from 'react';

const PioneerList = ({ pioneers, onPioneerClick }) => {
  return (
    <div>
      <h2 className="text- mb-4">Internet Pioneers Bios</h2>
      <div className="row justify-content-center">
        {pioneers.map((pioneer) => (
          <div
            key={pioneer.id}
            className="card m-3"
            style={{ width: '200px', cursor: 'pointer', position: 'relative' }}
            onClick={() => onPioneerClick(pioneer.id)}
          >
            {pioneer.viewed && (
              <span
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '5px',
                  backgroundColor: 'red',
                  color: 'white',
                  fontSize: '0.7rem',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}
              >
                VIEWED
              </span>
            )}
            <img
              src={pioneer.image}
              className="card-img-top"
              alt={pioneer.name}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{pioneer.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PioneerList;
