import React from "react";
import "./NavBar.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <nav id="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie />
            MoviesLib
          </Link>
        </h2>
        <form>
          <input
            type="text"
            placeholder="Busque um Filme"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
