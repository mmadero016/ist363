import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import WhyWaddlePup from './proj3/whywp.jsx';
import BreedGrid from './proj3/breedgrid.jsx';
import ChatSearch from './proj3/chatsearch.jsx';
import CreateAccount from './proj3/createacc.jsx';
import Footer from './proj3/footer.jsx';
import Navbar from './proj3/navbar.jsx';
import DogName from './proj3/dogs.jsx';
import ShibaInu from './proj3/shiba.jsx';
import FilteredMatches from './proj3/filteredmatches.jsx';
import PetFinderSearch from './proj3/petfinder.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="mb-5">
              <WhyWaddlePup />
              <hr className="w-75 mx-auto my-5" />
              <BreedGrid />
              <DogName />
              <ChatSearch />
              <CreateAccount />
              <Footer />
            </main>
          }
        />
        <Route path="/breeds/shiba-inu" element={<ShibaInu />} />
        <Route path="/matches" element={<FilteredMatches />} />
      </Routes>
    </>
  );
}

export default App;
