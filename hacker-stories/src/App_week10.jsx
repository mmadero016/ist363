import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


const Students = [
  { suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics' },
  { suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology' },
  { suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology' }
];

function App() {
  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map(function(student) {
          return (
            <li>
              <p>Name: {student.name}</p>
              <p>Year: {student.year}</p>
              <p>Major: {student.major}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}



const Students = [
  { suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics' },
  { suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology' },
  { suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology' }
];

function App() {
  return (
    <div>
      <h1>Students</h1>
      <ul>
        {
          Students.map(function(student) {
            return (
              <li key={student.suid}>
                <p>Name:{student.name}</p>
                <p>Year:{student.year}</p>
                <p>Major: {student.major}</p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}





const Students = [
  { suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics' },
  { suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology' },
  { suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology' }
];

function App() {
  return (
    <div>
      <h1>Students</h1>
      <Students/>
    </div>
  );
}

function Students() {
  return (
    <ul>
      {
        students.map(function(student) {
          return (
            <li key={student.suid}>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Year:</strong> {student.year}</p>
              <p><strong>Major:</strong> {student.major}</p>
            </li>
          );
        })
      }
    </ul>
  );
}





function App() {
  const showMessage = () => {
    alert("Thank you!");
  }

  return (
    <button onClick={showMessage}>Click Me</button>
  );
}



const students = [
  { suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics' },
  { suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology' },
  { suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology' }
];

function App() {
  const filteredStudents = students.filter(function(student) {
    return student.name === 'Sue Flay';
  });

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {
          filteredStudents.map(function(student) {
            return (
              <li key={student.suid}>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Year:</strong> {student.year}</p>
                <p><strong>Major:</strong> {student.major}</p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;
