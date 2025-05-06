import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const breeds = [
    'Shiba Inu', 'Corgi', 'Labrador', 'Beagle',
    'Husky', 'Pomeranian', 'Poodle',
    'Golden Retriever', 'Chihuahua', 'Doberman', 'Pitbull'
  ];
  
export default function BreedGrid() {
  const navigate = useNavigate();
  const [viewed, setViewed] = useState(() => {
    if (performance.navigation.type === 1) return []; // full refresh
    return JSON.parse(sessionStorage.getItem('viewedBreeds')) || [];
  });
  
  const handleClick = (breed) => {
    const updated = [...viewed, breed];
    setViewed(updated);
    sessionStorage.setItem('viewedBreeds', JSON.stringify(updated));
    window.location.href = `/ist363/hacker-stories/breeds/${breed.toLowerCase().replaceAll(' ', '-')}.html`;
  };
  
  return (
    <div className="text-center my-5">
      <h2>Breeds on WaddlePup</h2>
      <p>A community so big: here are the pups that have joined us!</p>
      <div className="row justify-content-center">
        {breeds.map((breed) => (
          <div
            key={breed}
            className="card m-3"
            style={{ width: '200px', cursor: 'pointer', position: 'relative' }}
            onClick={() => handleClick(breed)}
          >
            {viewed.includes(breed) && (
              <span
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '5px',
                  backgroundColor: 'gold',
                  padding: '2px 6px',
                  fontSize: '0.75rem',
                  borderRadius: '4px',
                }}
              >
                Viewed
              </span>
            )}
            <img
            src={`images/breeds/${breed.toLowerCase().replaceAll(' ', '')}.png`}
            alt={breed}
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{breed}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
