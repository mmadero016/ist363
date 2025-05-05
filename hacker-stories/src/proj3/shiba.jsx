import React, { useEffect } from 'react';

export default function ShibaInu() {
  useEffect(() => {
    const viewed = JSON.parse(sessionStorage.getItem('viewedBreeds')) || [];
    if (!viewed.includes('Shiba Inu')) {
      viewed.push('Shiba Inu');
      sessionStorage.setItem('viewedBreeds', JSON.stringify(viewed));
    }
  }, []);

  return (
    <div className="container my-5">
      <h2>Shiba Inu</h2>
      <p>The Shiba Inu is known for its bold spirit and loyalty...</p>
    </div>
  );
}
