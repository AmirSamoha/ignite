import React from "react";
//redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsActions";
import { Link } from "react-router-dom";

const Game = (props) => {
  const { name, released, image, id } = props;

  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden"; // the scroll bar is hidden
    dispatch(loadDetails(id));
  };

  return (
    <div className="StyledGame" onClick={loadDetailsHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </div>
  );
};

export default Game;
