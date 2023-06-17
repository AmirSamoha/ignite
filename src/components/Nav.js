import React, { useState } from "react";
import logo from "../img/logo.svg";
// Redux and Routes
import { fetchSearch } from "../actions/gamesActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput)); // what we type in the search will go to the search in reducer
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <div>
      <div className="stayledNav">
        <Link to="/" className="logo" onClick={clearSearch}>
          <img src={logo} alt="logo" />
          <h1>Ignite</h1>
        </Link>

        <form className="search">
          <input
            value={textInput}
            type="text"
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button onClick={submitSearch} type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="small-nav">
        <ul className="links">
          <Link to="/upcoming-games">
            Upcoming Games
          </Link>

          <Link to="/popular-games">
            Popular Games
          </Link>

          <Link to="/new-games">
            New Games
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
