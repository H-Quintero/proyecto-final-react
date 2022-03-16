import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Link } from "react-router-dom";

import { useTheme, useUpdateTheme } from "../MyThemeProvider/MyThemeProvider";

export default function NavBar() {
  const darkTheme = useTheme();
  const toggleTheme = useUpdateTheme();

  const theme = {
    backgroundColor: darkTheme ? "rgb(149 53 53)" : "rgb(17, 38, 56)",
  };

  return (
    <nav className="nav" style={theme}>
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
        <Link style={theme} to={"people"} className="link">
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
        <div onClick={toggleTheme}>
          {darkTheme ? (
            <StarIcon 
              sx={{ color: "rgb(17, 38, 56)" }} 
              fontSize={"large"} />
          ) : (
            <StarOutlineIcon 
              sx={{ color: "gold" }} 
              fontSize={"large"}/>
          )}
        </div>
      </div>
    </nav>
  );
}
