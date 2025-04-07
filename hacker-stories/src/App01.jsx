// arrow function long form
const Hello2 = () => {
  return (
    <div>
      <h1>Hello 2</h1>
    </div>
  )
}

// arrow function concise

const Hello3 = () => { <div><h1>Hellow 3</h1></div>}
function App () {
  return(
    <div>
      <h1>Hello World!</h1>
      <Hello2/>
    </div>
  );
}

export default App;