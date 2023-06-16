import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import { useLocation } from "react-router-dom";
import GameDetails from "../components/GameDetails";
import Game from "../components/Game";

const NewGames = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //fetch games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //get the data back
  const { newGames } = useSelector((state) => state.games);

  return (
    <div className="GameList">
      {pathId && <GameDetails />}

      <h2>New Games</h2>
      <div className="Games">
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </div>
    </div>
  );
};

export default NewGames;
