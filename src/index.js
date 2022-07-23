function uefaEuro2016(teams, scores){
    return scores[1] > scores[0] ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!` : scores[1] < scores[0] ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!` : `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  };

  console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));