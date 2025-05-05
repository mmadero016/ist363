import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const breeds = [
  "Shiba Inu", "Corgi", "Labrador", "Beagle", "Husky", "Pomeranian", "Poodle", "Golden Retriever",
  "Chihuahua", "Dachshund", "Pug", "Border Collie", "Akita", "Doberman", "Pitbull", "Maltese"
]

// manual mapping from breed name to image file
const breedToImage = {
  "Shiba Inu": "shiba.png",
  "Corgi": "corgi.png",
  "Labrador": "lab.png",
  "Beagle": "beagle.png",
  "Husky": "husky.png",
  "Pomeranian": "pom.png", 
  "Poodle": "poodle.png",
  "Golden Retriever": "golden.png",
  "Chihuahua": "chihuahau.png",
  "Dachshund": "hotdog.png",
  "Pug": "pug.png",
  "Border Collie": "border.png",
  "Akita": "akita.png",
  "Doberman": "doberman.png",
  "Pitbull": "pitb.png",
  "Maltese": "maltese.png"
};

export default function DogName() {
  const [visited, setVisited] = useState([]);

  useEffect(() => {
    const seen = JSON.parse(localStorage.getItem('visitedBreeds')) || [];
    setVisited(seen);
  }, []);

  return (
    <section className="text-center my-5">
      <h2 className="fw-bold">Breeds on WaddlePup</h2>
      <p className="mb-4">A community so big: here are the pups that have joined us!</p>
      <div className="container">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {breeds.map((breed) => {
                const imgPath = new URL(`../3images/breeds/${breedToImage[breed]}`, import.meta.url).href;
                const isVisited = visited.includes(breed);

            return (
              <div className="col text-center" key={breed}>
                <Link to={`/breeds/${breed.toLowerCase().replaceAll(' ', '-')}`} className="text-decoration-none text-dark">
                  <div style={{ position: 'relative' }}>
                    <img
                    src={imgPath}
                    alt={breed}
                    className="img-fluid"
                    style={{ maxHeight: "160px", borderRadius: "10px" }}
                    />

                    {isVisited && (
                      <span style={{
                        position: 'absolute',
                        top: 5,
                        right: 5,
                        backgroundColor: 'gold',
                        padding: '2px 6px',
                        fontSize: '0.8rem',
                        borderRadius: '5px'
                      }}>
                        Visited
                      </span>
                    )}
                  </div>
                  <p className="fw-bold mt-2">{breed}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
