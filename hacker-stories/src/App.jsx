import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './proj3/navbar.jsx';
import Footer from './proj3/footer.jsx';
import WhyWaddlePup from './proj3/whywp.jsx';
import BreedGrid from './proj3/breedgrid.jsx';
import ChatSearch from './proj3/chatsearch.jsx';
import CreateAccount from './proj3/createacc.jsx';
import DogName from './proj3/dogs.jsx';

// Breed Pages
import ShibaInu from './proj3/shiba.jsx';
// You can add more breed imports here like:
// import Corgi from './proj3/corgi.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="mb-5">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <WhyWaddlePup />
                <hr className="w-75 mx-auto my-5" />
                <BreedGrid />
                <DogName />
                <ChatSearch />
                <CreateAccount />
              </>
            }
          />
          <Route path="/breeds/shiba-inu" element={<ShibaInu />} />
          {/* Add more breed routes here like:
              <Route path="/breeds/corgi" element={<Corgi />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
