"use strict";
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
  }
  
  function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`);
    } else {
      console.log("It's a draw!");
    }
  }
 // Data 2
  const dolphinsScore4 = 85;
  const dolphinsScore5 = 54;
  const dolphinsScore6 = 41;
  
  const koalasScore4 = 23;
  const koalasScore5 = 34;
  const koalasScore6 = 27;
  
  const avgDolphinsData2 = calcAverage(dolphinsScore4, dolphinsScore5, dolphinsScore6);
  const avgKoalasData2 = calcAverage(koalasScore4, koalasScore5, koalasScore6);
  
  checkWinner(avgDolphinsData2, avgKoalasData2);