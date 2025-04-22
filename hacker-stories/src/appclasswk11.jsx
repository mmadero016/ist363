import {useState} from "react";
import About from './About'
// ./ means the same folder as the App.jsx file

function Home () {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}


// conditional rendering aka navigating SPAs
function App () {
  const [page, setPage] = useState('home');
  return (
    <>
     <nav className="navbar navbar-dark bg-dark">
        <ul className="nav">
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => setPage('home')}>Home</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => setPage('about')}>About</button>
          </li>
        </ul>
      </nav>

      <br />
  
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
    </>
  );
}
export default App;