import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Events from "./components/Events";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Events />
    </div>
  );
}

export default App;
