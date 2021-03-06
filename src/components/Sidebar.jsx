import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { genres } from "../services/genres";
import "./styles/sidebar.css";

const Sidebar = ({ categories, onCategorieSelect, onGenreSelect }) => {
  return (
    <div className="sidebar bg__dark border__left">
      <div className="sidebar__nav mt-4 border__bottom">
        <h5>Navigation</h5>
        <ul className="nav flex-column">
          {categories.map((category) => (
            <li key={category.id} className="nav-item">
              <span
                onClick={() => onCategorieSelect(category)}
                className="nav-link cursor__pointer sidebar__link"
              >
                <FaAngleDoubleRight /> {category.category}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__nav mt-4 border__bottom">
        <h5>Genres</h5>
        <ul className="nav flex-column sidebar__genres">
          {genres.map((genre) => (
            <li key={genre.id} className="nav-item">
              <span
                onClick={() => onGenreSelect(genre)}
                className="nav-link cursor__pointer sidebar__link"
              >
                <FaAngleDoubleRight /> {genre.genre}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
