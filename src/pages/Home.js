import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import { useLocation } from "react-router-dom";

//components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";

const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //Fetch games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get the data back
  const { popular, newGames, upcomingGames, searched } = useSelector(
    (state) => state.games
  ); // axies data from loadGames
  //console.log( popular, newGames, upcoming)

  return (
    <div className="GameList">
      {pathId && <GameDetails />}

      {searched.length ? (
        <div className="searched">
          <h2>Searched Games</h2>
          <div className="Games">
            {searched.map((game) => (
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
      ) : null}

      <h2>Upcoming Games</h2>
      <div className="Games">
        {upcomingGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </div>
      <h2>Popular Games</h2>
      <div className="Games">
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </div>
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

export default Home;
