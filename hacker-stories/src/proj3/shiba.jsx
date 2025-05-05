import { useEffect } from 'react';

export default function ShibaInu() {
  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem('visitedBreeds')) || [];
    if (!visited.includes("Shiba Inu")) {
      visited.push("Shiba Inu");
      localStorage.setItem('visitedBreeds', JSON.stringify(visited));
    }
  }, []);

  return (
    <div className="container my-5">
      <h2>Shiba Inu</h2>
      <p>The Shiba Inu is known for its bold spirit and loyalty...</p>
    </div>
  );
}
