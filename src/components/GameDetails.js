import React from "react";
import { Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
//import images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintedo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetails = () => {
  const navigate = useNavigate();

  //data from the redux module
  const { game, stores, screen, isLoading } = useSelector(
    (state) => state.details
  );

  // Add checks to ensure that game and screen are defined before rendering
  if (!game || !screen) {
    return null; // Or display a loading state or error message
  }

  //exit details
  const exitDetailsHendler = (e) => {
    const element = e.target;
    if (element.classList.contains("card-shadow")) {
      // if this class exists in the element
      document.body.style.overflow = "auto"; // we return to the original page
      navigate("/");
    }
  };

  //GET PLATFORM IMAGES
  const getPlatforms = (platform) => {
    switch (platform) {
      case "PlayStation 5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintedo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //get starts rating
  const getStartRating = () => {
    const starts = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      //loop over the rating numbers
      if (i <= rating) {
        // if i is lower than rating we push the img star
        starts.push(<img src={starFull} alt="star" key={i}></img>);
      } else {
        starts.push(<img src={starEmpty} alt="star" key={i}></img>);
      }
    }
    return starts;
  };

  return (
    <>
      {!isLoading && (
        <div className="card-shadow" onClick={exitDetailsHendler}>
          <div className="detail">
            <div className="stats">
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {Math.floor(game.rating)}</p>
                {getStartRating()}
              </div>
              <div className="info">
                <h3>Platforms</h3>
                <div className="platforms">
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatforms(data.platform.name)} //evry platform get is image
                      alt={data.platform.name}
                    ></img>
                  ))}
                </div>
              </div>
            </div>
            <div className="media">
              <img src={game.background_image} alt={game.name} />
            </div>
            <div className="description">
              <p>{game.description}</p>
            </div>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt="game"></img>
              ))}
            </div>
            <div className="stores">
              <h3>Love the game? </h3>
              <span>
                Here some of website you can buy<br></br>
              </span>
              {stores.results.map((store) => (
                <li>
                  <Link to={store.url} key={store.id}>
                    {store.url}
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameDetails;
