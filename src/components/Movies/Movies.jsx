import React from "react";
import { useMoives } from "../../lib/MoviesContext";
import Movie from "./Movie";
import Sidebar from "../common/Sidebar";
import Pagination from "../common/Pagination";
import Loading from "../common/Loading";
import "./style/movies.css";

const Movies = () => {
  const {
    movies,
    allMovies,
    isLoading,
    currentPage,
    pageSize,
    categories,
    selectedCategorie,
    genres,
    selectedGenre,
    handlePageChange,
    handleCategorieSelect,
    handleGenreSelect,
  } = useMoives();

  if (isLoading) {
    return <Loading />;
  }

  if (allMovies.length === 0) {
    return <h1>There no movie</h1>;
  }

  return (
    <>
      <div className="row">
        <div className="col-12 col-xl-10 col-md-9 p-5 movies__item">
          {movies.map((movie) => {
            return <Movie key={movie._id} movie={movie} />;
          })}
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