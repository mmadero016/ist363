import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WhyWaddlePup from './proj3/whywp.jsx';
import BreedGrid from './proj3/breedgrid.jsx';
import ChatSearch from './proj3/chatsearch.jsx';
import CreateAccount from './proj3/createacc.jsx';
import Footer from './proj3/footer.jsx';
import Navbar from './proj3/navbar.jsx';
import DogName from './proj3/dogs.jsx';
import BreedDesc from './proj3/breeddesc.jsx';

function App() {
  return (
    <main className="mb-5">
    <Navbar />
    <WhyWaddlePup />
    <hr className="w-75 mx-auto my-5" />
    <BreedGrid />
    <hr className="w-75 mx-auto my-5" />
    <DogName />
    <hr className="w-75 mx-auto my-5" />
    <ChatSearch />
    <CreateAccount />
    <Footer />
  </main>  
  );
}

export default App;
