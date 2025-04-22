import React, { useState } from 'react';
import PioneerList from './pioneerlist.jsx'
import Pioneer from './pioneer.jsx';

const App = () => {
  const [pioneers, setPioneers] = useState([
    {
      id: 1,
      name: 'Elizabeth J. Feinler',
      age: 93,
      knownFor: 'Early internet directory work with ARPANET.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg',
      viewed: false,
    },
    {
      id: 2,
      name: 'Tim Berners Lee',
      age: 69,
      knownFor: 'Inventor of the World Wide Web, the HTML markup language, the URL system, and HTTP.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/LS3_4919_%28cropped%29.jpg',
      viewed: false,
    },
    {
      id: 3,
      name: 'Ray Tomlinson',
      age: 74,
      knownFor: 'Implemented the first email program on the ARPANET system.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Ray_Tomlinson.jpg',
      viewed: false,
    },
  ]);

  const [selectedPioneer, setSelectedPioneer] = useState(null);

  const handlePioneerClick = (id) => {
    const updated = pioneers.map((pioneer) =>
      pioneer.id === id ? { ...pioneer, viewed: true } : pioneer
    );
    setPioneers(updated);

    const selected = updated.find((p) => p.id === id);
    setSelectedPioneer(selected);
  };

  const handleReturn = () => {
    setSelectedPioneer(null);
  };

  return (
    <div className="container mt-5">
      {selectedPioneer ? (
        <Pioneer pioneer={selectedPioneer} onReturn={handleReturn} />
      ) : (
        <PioneerList pioneers={pioneers} onPioneerClick={handlePioneerClick} />
      )}
    </div>
  );
};

export default App;
