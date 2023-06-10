import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return <div key={movie.title}> 
        {movie.title} {movie.time} {movie.genres.map((genre, index) => <ul key={index}><li >{genre}</li></ul>)} 
        </div>
      })}
    </div>
  );
}

export default Movies;
