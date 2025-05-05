import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const descriptions = {
  'shiba-inu': 'The Shiba Inu is known for its bold spirit and loyalty.',
  'corgi': 'The Corgi is energetic, affectionate, and loves to herd things.',
};

export default function BreedDesc() {
  const { breed } = useParams();

  useEffect(() => {
    const visited = JSON.parse(sessionStorage.getItem('visitedBreeds')) || [];
    if (!visited.includes(breed)) {
      visited.push(breed);
      sessionStorage.setItem('visitedBreeds', JSON.stringify(visited));
    }
  }, [breed]);

  return (
    <div className="container my-5">
      <h2 className="text-capitalize">{breed.replaceAll('-', ' ')}</h2>
      <p>{descriptions[breed] || "No description available for this breed."}</p>
    </div>
  );
}
