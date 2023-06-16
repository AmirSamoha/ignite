
const key = process.env.REACT_APP_KEY;
//base url
const base_Url = "https://api.rawg.io/api/";

//getting the current  month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  //if the current month is under 10 returns the current month with 0 (01/02/03...)
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//getting the current day
const getCurrentDay = () => {
  const day = new Date().getDate();
  //if the current day is under 10 returns the current day with 0 (01/02/03...)
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//getting the current year
const currentYear = new Date().getFullYear();

//getting the current date date/month/year
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

//getting the latest year
const latestYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
//getting the next year
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games URL
const popular_games = `games?key=${key}&dates=${latestYear},${currentDate}&ordering=-rating&page_size-10`;

//upcoming games URL
const upcoming_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size-10`;

//new games URL
const new_games = `games?key=${key}&dates=${latestYear},${currentDate}&ordering=-released&page_size-10`;

export const popularGamesURL = () => {
  return `${base_Url}${popular_games}`;
};

export const upcomingGamesURL = () => {
  return `${base_Url}${upcoming_games}`;
};

export const newGamesURL = () => {
  return `${base_Url}${new_games}`;
};

//data for a single game details
export const gameDetailsURL = (game_id) => {
  return `${base_Url}games/${game_id}?key=${key}`;
};

//game screenshot
export const screenshotsURL = (game_id) => {
  return `${base_Url}games/${game_id}/screenshots?&key=${key}`;
};

//search for game
export const searchGameURL = (game_name) => {
  return `${base_Url}games?key=${key}&search=${game_name}&page_size=9`
};
