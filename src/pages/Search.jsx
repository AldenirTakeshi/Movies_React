import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MovieGrid.css";
const Search = () => {
  return (
    <div>
      <MovieCard />
    </div>
  );
};

export default Search;
