const dolphinsAverageScore = (97+112+101)/3
console.log(`The Dolphine's Average  score is ${dolphinsAverageScore.toFixed(2)}`);
const koalasAverageScore = (109+95+123)/3
console.log(`The Dolphine's Average  score is ${koalasAverageScore.toFixed(2)}`);


const minimumScore = 100;
if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minimumScore) {
  console.log("Dolphins win the trophy!");
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= minimumScore) {
  console.log("Koalas win the trophy!");
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= minimumScore && koalasAverageScore >= minimumScore) {
  console.log("It's a draw!");
} else {
  console.log("No team wins the trophy.");
}