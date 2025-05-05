const API_KEY = 'jUaapTvuN3y2iZxrKkevyh3MA6ix6jzQs0NYoBsu9Vf5A9Xmkv';
const API_SECRET = '9d6sUY9F7ElY3finuLtwqHKqNXk6UMUlKf1WjS1h';


let token = '';

export async function getToken() {
  const res = await fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const data = await res.json();
  token = data.access_token;
  return token;
}

export async function findPets(breed = '', age = '', keywords = '', medical = '') {
  if (!token) await getToken();

  const query = new URLSearchParams({
    type: 'dog',
    ...(breed && { breed }),
    ...(age && { age }),
    ...(keywords && { good_with_children: keywords }),
  });

  // Add medical filters
  if (medical === 'blind') query.append('attributes[blind]', 'true');
  if (medical === 'deaf') query.append('attributes[deaf]', 'true');

  const res = await fetch(`https://api.petfinder.com/v2/animals?${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data.animals || [];
}