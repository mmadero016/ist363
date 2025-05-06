import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { findPets } from './petfinder';

export default function FilteredMatches() {
  const { state } = useLocation();
  const [results, setResults] = useState(state?.results || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if no results were passed, show nothing or fallback message
    if (!state || !state.results) {
      setResults([]);
    }
  }, [state]);

  if (loading) return <p className="text-center">Loading results...</p>;

  if (!results.length) {
    return (
      <div className="container my-5">
        <h2>No matches found</h2>
        <p>Please try a different search.</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2>Matching Dogs</h2>
      <div className="row">
        {results.map((pet) => (
          <div key={pet.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={pet.photos?.[0]?.medium || ''}
                className="card-img-top"
                alt={pet.name}
              />
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <p>{pet.age} • {pet.breeds?.primary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
