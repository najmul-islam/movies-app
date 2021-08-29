import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import { useGlobalContext } from "../TypeContext";
import Sidebar from "./Sidebar";
import Pagination from "./common/Pagination";

import { paginate } from "../utils/paginate";
import "./styles/movies.css";

const Movies = () => {
  const {
    allMovies,
    setAllMovies,
    isLoading,
    currentPage,
    setCurrentPage,
    categories,
    selectedCategorie,
    genres,
    selectedGenre,
    handleCategorieSelect,
  } = useGlobalContext();

  const [pageSize, setPageSize] = useState(4);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre) => {
    setAllMovies(genre.movies);
    setCurrentPage(1);
  };

  const movies = paginate(allMovies, currentPage, pageSize);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="row">
        <div className="col-12 col-xl-10 col-md-9 p-5 movies__item">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>

        <div className="col-xl-2 col-md-3 d-none d-md-block">
          <Sidebar
            categories={categories}
            selectedCategorie={selectedCategorie}
            onCategorieSelect={handleCategorieSelect}
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreSelect={handleGenreSelect}
          />
        </div>

        <Pagination
          itemsCount={allMovies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Movies;