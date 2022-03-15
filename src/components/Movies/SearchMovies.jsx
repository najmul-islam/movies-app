import React from "react";
import { useMovies } from "../../context/MoviesContext";
import Movie from "./Movie";
import Loading from "../common/Loading";
import "./style/movies.css";

const SearchMovies = () => {
  const { allDefaultMovies, isLoading, currentMovies } = useMovies();
  console.log(currentMovies);
  if (isLoading) {
    return <Loading />;
  }

  if (allDefaultMovies.length === 0) {
    return <h1>There no movie</h1>;
  }

  return (
    <>
      <div className="col-12 col-xl-10 col-md-9 p-4 movies__item">
        {allDefaultMovies.map((movie) => {
          return <Movie key={movie._id} movie={movie} />;
        })}
      </div>
    </>
  );
};

export default SearchMovies;
