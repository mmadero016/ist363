import React, { useState } from 'react';
import { findPets } from './petfinder';
import FilteredMatches from './filteredmatches';

export default function ChatSearch() {
  const [form, setForm] = useState({
    breed: '',
    age: '',
    medical: '',
    keywords: '',
  });
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const results = await findPets(form.breed, form.age, form.keywords, form.medical);
      setMatches(results);
    } catch (err) {
      console.error(err);
      setError('Could not fetch pets. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container my-5">
      <h2><u>Connect & Chat</u></h2>
      <form onSubmit={handleSubmit}>
        <label>Breed:</label>
        <input
          type="text"
          name="breed"
          className="form-control"
          placeholder="e.g. Shiba Inu"
          onChange={handleChange}
        />

        <label>Age:</label>
        <input
          type="text"
          name="age"
          className="form-control"
          placeholder="e.g. 3"
          onChange={handleChange}
        />

        <label>Medical Conditions:</label>
        <select name="medical" className="form-control" onChange={handleChange}>
          <option value="">None</option>
          <option value="blind">Blind</option>
          <option value="deaf">Deaf</option>
        </select>

        <label>Keywords (for matching):</label>
        <input
          type="text"
          name="keywords"
          className="form-control"
          placeholder="e.g. energetic, playful"
          onChange={handleChange}
        />

        <button className="btn btn-success mt-3" type="submit">Find Matches</button>
      </form>

      {loading && <p className="mt-3">Loading...</p>}
      {error && <p className="text-danger mt-3">{error}</p>}
      {matches.length > 0 && <FilteredMatches results={matches} />}
    </div>
  );
}
