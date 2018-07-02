// Sort teams by descending score.
// Returns an array of sorted teams

sortTeams = (scores) => {
  
  let score = (Object.values(scores))

  function compare(a, b) {
    if (a.points > b.points)
      return -1;
    if (a.points < b.points)
      return 1;
    return 0;
  }
  score.sort(compare);
  return score;
};

module.exports = sortTeams;