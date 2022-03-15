import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to={"/"}>
        <img
          src="https://1000marcas.net/wp-content/uploads/2019/12/logo-StarWars.png"
          alt="imagen"
          className="logo"
        />
      </Link>
      <div className="nav__links">
        {/* <Link to={"/"} className="link">
          <li>Home</li>
        </Link> */}
        <Link to={"people"} className="link">
          <li>People</li>
        </Link>
        <Link to={"planets"} className="link">
          <li>Planets</li>
        </Link>
        <Link to={"species"} className="link">
          <li>Species</li>
        </Link>
        <Link to={"starships"} className="link">
          <li>Starships</li>
        </Link>
        <Link to={"vehicles"} className="link">
          <li>Vehicles</li>
        </Link>
        <Link to={"films"} className="link">
          <li>Films</li>
        </Link>
      </div>
    </nav>
  );
}
