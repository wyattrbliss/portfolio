import { NBAGame } from "@balldontlie/sdk";

// to determine today's date and format for api fetch
export function getTodaysDate(isMonthFirst: boolean) {
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

// helper function to parse time for upcoming games
function findTime(game: NBAGame) {
  let time = game.status.split(' ')[0];
  let timeSplit = time.split(':');
  return timeSplit;
}

// sorts the games based on their time
export function sortByStatus(firstGame: NBAGame, secondGame: NBAGame) {
  if (firstGame.status.includes('Final')) {
    return -1;
  } else if (secondGame.status.includes('Final')) {
    return 1;
  }

  // sort by status final -> 4th qtr -> 3rd -> halftime -> 2nd -> -> first -> upcoming time, lower first
  const checkList = ['Final', '4th', '3rd', 'Halftime', '2nd', '1st']

  for (let i = 0; i < checkList.length; i++) {
    const check = checkList[i];
    if (firstGame.status.includes(check)) {
      return -1;
    } else if (secondGame.status.includes(check)) {
      return 1;
    }
  }
  const firstTime = findTime(firstGame);
  const secondTime = findTime(secondGame);
  const hourDiff = Number(firstTime[0]) - Number(secondTime[0]);

  if (hourDiff === 0) {
      return Number(firstTime[1]) - Number(secondTime[1]);
  } else {
      return hourDiff;
  }
}

// // to match the right odds to the game
// function matchOdds(game, odds) {
//   for (let i = 0; i < odds.length; i++) {
//     let odd = odds[i];
//     if (odd.away_team === game.visitor_team.full_name) {
//       // odds.splice(odds.indexOf(odd));
//       return odd;
//     }
//   }
// }
