import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from "../api";

///Actions creator function
export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results, //the results come from the data that returned from api URL
      upcoming : upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async(dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name)); 
  dispatch ({
    type: "FETCH_SEARCHED",
    payload:{ searched: searchGames.data.results}
  })
}
