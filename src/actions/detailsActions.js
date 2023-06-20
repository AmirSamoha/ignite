import axios from "axios";
import { gameDetailsURL, screenshotsURL, sellStoreGamesURL} from "../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOAD_DETAILS",
  });
  const gameDetails = await axios.get(gameDetailsURL(id));
  const screenshotsData = await axios.get(screenshotsURL(id));
  const sellStoreGamesData = await axios.get(sellStoreGamesURL(id));
  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: gameDetails.data,
      screen: screenshotsData.data,
      stores: sellStoreGamesData.data,
    },
  });
};
