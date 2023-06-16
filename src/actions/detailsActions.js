import axios from "axios";
import { gameDetailsURL, screenshotsURL} from "../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOAD_DETAILS",
  });
  const gameDetails = await axios.get(gameDetailsURL(id));
  const screenshotsData = await axios.get(screenshotsURL(id));
  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: gameDetails.data,
      screen: screenshotsData.data,
    },
  });
};
