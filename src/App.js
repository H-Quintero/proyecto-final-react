import "./styles/main.scss";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import People from "./pages/People/People";
import Planets from "./pages/Planets/Planets";
import Species from "./pages/Species/Species";
import Starships from "./pages/Starships/Starships";
import Vehicles from "./pages/Vehicles/Vehicles";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setEspecies] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      // .then((data) => console.log(data.results))
      .then((data) => setPeople(data.results));

    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      // .then((data) => console.log(data.results))
      .then((data) => setPlanets(data.results));
    
      fetch("https://swapi.dev/api/species/")
      .then((res) => res.json())
      // .then((data) => console.log(data.results))
      .then((data) => setEspecies(data.results));

    fetch("https://swapi.dev/api/starships/")
      .then((res) => res.json())
      // .then((data) => console.log(data.results))
      .then((data) => setStarships(data.results));

    fetch("https://swapi.dev/api/vehicles/")
      .then((res) => res.json())
      // .then((data) => console.log(data.results))
      .then((data) => setVehicles(data.results));

    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      // .then((data) => console.log(data.results))
      .then((data) => setFilms(data.results));
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="people" element={<People data={people} />} />
          <Route path="planets" element={<Planets data={planets} />} />
          <Route path="species" element={<Species data={species} />} />
          <Route path="starships" element={<Starships data={starships} />} />
          <Route path="vehicles" element={<Vehicles data={vehicles} />} />
          <Route path="films" element={<Planets data={films} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
