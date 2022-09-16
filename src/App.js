import Stricking from './Stricking';
import './App.css';
import { Routes, Route, Link}  from "react-router-dom";
import Counter from './Counter'
function App() {
  // const greet = "Good Afternoon, folks!"
  return (
    <div className="App">
      <h1>Welcome to react-router</h1>
      <Counter/>
      {/* <Stricking/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
      {/* <header className="App-header">
        <Stricking />
        </header> */}
    </div>
  );
}

function Home() {
  return(
    <>
      <nav>
        <Link to="/todo"></Link>
      </nav>
    </>
  )
}
function Todo() {
  return(
    <>
      <Stricking />
    </>
  )
}

export default App;
