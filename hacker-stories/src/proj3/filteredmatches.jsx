import React from 'react';
import PetFinderSearch from './petfinder.jsx';

export default function FilteredMatches() {
  const breed = 'Shiba Inu'; // You can dynamically set this later

  return (
    <div className="container my-5">
      <h2>Filtered Matches</h2>
      <PetFinderSearch breed={breed} />
    </div>
  );
}
