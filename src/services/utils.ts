import { insertBefore } from "cheerio/lib/api/manipulation";

const URL_PREFIX = 'https://www.balldontlie.io/api/v1/'
const GAMES_URL = 'games';
const PLAYERS_URL = 'players';
const TEAMS_URL = 'teams'

const ODDS_API_KEY = 'ead1ccb29b34e4bcf90a89d1612d417a'
const ODDS_API_URL = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=' + ODDS_API_KEY;

async function fetchAPI(url: string) {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json;
  }

// to determine today's date and format for api fetch
function getTodaysDate(isMonthFirst: boolean) {
  // for live games

  // helper for formatting
  function addZero(num: number) {
    const numString = num.toString();
    if (num < 10) {
      return '0' + numString;
    }
    return numString;
  }

  let today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let date = '';

  if (isMonthFirst) {
    date = month + '/' + day + '/' + today.getFullYear();
  } else {
    date = today.getFullYear() + '-' + addZero(month) + '-' + addZero(day);
  }

  return date;
}


// sorts the games based on their time
function sortByStatus(a, b) {
  if (a.status.includes('Final')) {
    return -1;
  } else if (b.status.includes('Final')) {
    return 1;
  }

  // sort by status final -> 4th qtr -> 3rd -> halftime -> 2nd -> -> first -> upcoming time, lower first
  let checkList = ['Final', '4th', '3rd', 'Halftime', '2nd', '1st']

  for (let i = 0; i < checkList.length; i++) {
    let check = checkList[i];
    if (a.status.includes(check)) {
      return -1;
    } else if (b.status.includes(check)) {
      return 1;
    }
  }

  // helper function to parse time for upcoming games
  function findTime(game) {
    let time = game.status.split(' ')[0];
    let timeSplit = time.split(':');
    return timeSplit;
  }
  let timeA = findTime(a);
  let timeB = findTime(b);
  let hourDiff = timeA[0] - timeB[0]

  if (hourDiff == 0) {
      return timeA[1] - timeB[1];
  } else {
      return hourDiff;
  }
}

// to match the right odds to the game
function matchOdds(game, odds) {
  for (let i = 0; i < odds.length; i++) {
    let odd = odds[i];
    if (odd.away_team == game.visitor_team.full_name) {
      // odds.splice(odds.indexOf(odd));
      return odd;
    }
  }
}


export { fetchAPI, getTodaysDate, sortByStatus, matchOdds}