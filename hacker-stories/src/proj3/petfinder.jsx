import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'jUaapTvuN3y2iZxrKkevyh3MA6ix6jzQs0NYoBsu9Vf5A9Xmkv';
const API_SECRET = '9d6sUY9F7ElY3finuLtwqHKqNXk6UMUlKf1WjS1h';

export default function PetFinderSearch({ breed }) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchToken = async () => {
      const res = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
        grant_type: 'client_credentials',
        client_id: API_KEY,
        client_secret: API_SECRET,
      });
      return res.data.access_token;
    };

    const fetchPets = async () => {
      const token = await fetchToken();
      const res = await axios.get('https://api.petfinder.com/v2/animals', {
        headers: { Authorization: `Bearer ${token}` },
        params: { type: 'Dog', breed, location: '10001', limit: 5 }
      });
      setPets(res.data.animals);
    };

    fetchPets();
  }, [breed]);

  return (
    <div className="container my-5">
      <h3>Available {breed}s for Adoption</h3>
      {pets.map(pet => (
        <div key={pet.id}>
          <strong>{pet.name}</strong> - {pet.age}, {pet.gender}
        </div>
      ))}
    </div>
  );
}
