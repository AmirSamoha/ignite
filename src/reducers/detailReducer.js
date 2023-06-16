//initinal state
const initState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        trailer: {data: action.payload.trailer},
        isLoading: false,
      };
    case "LOAD_DETAILS":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};
export default detailReducer;
