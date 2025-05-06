import React, { useState } from 'react';
import { findPets } from './petfinder';
import FilteredMatches from './filteredmatches';
import { useNavigate } from 'react-router-dom'; // ← Add this at the top if missing

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

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const results = await findPets(form.breed, form.age, form.keywords, form.medical);

      navigate('/matches', {
        state: {
          results,
          breed: form.breed,
          age: form.age,
          keywords: form.keywords,
          medical: form.medical
        }
      });
    } catch (err) {
      console.error(err);
      setError('Something went wrong.');
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
        <select name="age" className="form-control" onChange={handleChange}>
          <option value="">Select age group</option>
          <option value="Baby">Baby</option>
          <option value="Young">Young</option>
          <option value="Adult">Adult</option>
          <option value="Senior">Senior</option>
        </select>


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

