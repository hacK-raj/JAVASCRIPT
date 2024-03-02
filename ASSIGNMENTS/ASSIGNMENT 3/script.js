"use strict"
//L
function describeCountry(country, population, capitalCity) {
    
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  }
  
 
  const finlandDescription = describeCountry("Finland", 6, "Helsinki");
  const indiaDescription = describeCountry("India", 1380, "New Delhi");
  const canadaDescription = describeCountry("Canada", 38, "Ottawa");
  
  
  console.log(finlandDescription);
  console.log(indiaDescription);
  console.log(canadaDescription);

  console.log("-----------------------")

  //M
  
function percentageOfWorld1(population) {
    const worldPopulation = 7900; // Million people
    return (population / worldPopulation) * 100;
  }
  
 
  const percentageOfWorld2 = (population) => (population / 7900) * 100;
  
  
  const chinaPercentage = percentageOfWorld1(1441);
  const indiaPercentage = percentageOfWorld1(1380);
  const usaPercentage = percentageOfWorld1(335);
  
  console.log(`China: ${chinaPercentage.toFixed(2)}% of the world population.`);
  console.log(`India: ${indiaPercentage.toFixed(2)}% of the world population.`);
  console.log(`USA: ${usaPercentage.toFixed(2)}% of the world population.`);
  
  
  const chinaPercentage2 = percentageOfWorld2(1441);
  const indiaPercentage2 = percentageOfWorld2(1380);
  const usaPercentage2 = percentageOfWorld2(335);
  
  console.log(`China: ${chinaPercentage2.toFixed(2)}% of the world population.`);
  console.log(`India: ${indiaPercentage2.toFixed(2)}% of the world population.`);
  console.log(`USA: ${usaPercentage2.toFixed(2)}% of the world population.`);

   //N
 
// function percentageOfWorld1(population) {
//     const worldPopulation = 7900; // Million people
//     return (population / worldPopulation) * 100;
//   }
  
 
//   const percentageOfWorld2 = (population) => (population / 7900) * 100;
  
//   // Arrow function
//   const percentageOfWorld3 = population => (population / 7900) * 100;
  
 
//   const chinaPercentage = percentageOfWorld1(1441);
//   const indiaPercentage = percentageOfWorld1(1380);
//   const usaPercentage = percentageOfWorld1(335);
  
//   console.log(`China: ${chinaPercentage.toFixed(2)}% of the world population.`);
//   console.log(`India: ${indiaPercentage.toFixed(2)}% of the world population.`);
//   console.log(`USA: ${usaPercentage.toFixed(2)}% of the world population.`);
  
 
//   const chinaPercentage2 = percentageOfWorld2(1441);
//   const indiaPercentage2 = percentageOfWorld2(1380);
//   const usaPercentage2 = percentageOfWorld2(335);
  
//   console.log(`China: ${chinaPercentage2.toFixed(2)}% of the world population.`);
//   console.log(`India: ${indiaPercentage2.toFixed(2)}% of the world population.`);
//   console.log(`USA: ${usaPercentage2.toFixed(2)}% of the world population.`);
  
  
//   const chinaPercentage3 = percentageOfWorld3(1441);
//   const indiaPercentage3 = percentageOfWorld3(1380);
//   const usaPercentage3 = percentageOfWorld3(335);
  
//   console.log(`China: ${chinaPercentage3.toFixed(2)}% of the world population.`);
//   console.log(`India: ${indiaPercentage3.toFixed(2)}% of the world population.`);
//   console.log(`USA: ${usaPercentage3.toFixed(2)}% of the world population.`);
  
console.log("------------------")

//O
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage.toFixed(2)}% of the world.`;
  }
 
 function percentageOfWorld1(population) {
    const worldPopulation = 7900; // Million people
    return (population / worldPopulation) * 100;
  }
  
  const chinaDescription = describePopulation('China', 1441);
  const indiaaDescription = describePopulation('India', 1380);
  const usaDescription = describePopulation('USA', 335);
  
  console.log(chinaDescription);
  console.log(indiaaDescription);
  console.log(usaDescription);
  console.log("-----------------------");
  
//P
  const populations = [1441, 1380, 335, 242]; //  millions
  const hasFourElements = populations.length === 4;
  console.log(`The array has 4 elements: ${hasFourElements}`);
  
  const percentages = populations.map(population => percentageOfWorld1(population));
  console.log("Percentages of the world population:");
  for (let i = 0; i < percentages.length; i++) {
    console.log(`${i + 1}. ${percentages[i].toFixed(2)}%`);
  }

  console.log("-----------------------");

  //Q

  
let country = 'India';
const neighbours = ['Pakistan', 'China', 'Nepal'];

// Adding a new neighbor 'Utopia'
neighbours.push('Utopia');
console.log(neighbours); 

// Removing 
neighbours.pop();
console.log(neighbours); 


if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country.');
}


const pkmb = neighbours.indexOf('Pakistan');
neighbours[pkmb] = 'Indian Occupied Pakistan(IOK)';
console.log(neighbours); 

console.log("-----------------------");

//R
const myCountry = {
    country: "India",
    capital: "New Delhi",
    language: "Hindi",
    population: 1380, // Population in millions
    neighbours: ["Nepal", "Bhutan", "Bangladesh", "Pakistan"]
  };
  
  console.log(myCountry);

  console.log("-----------------------");

 //S 

  
const countryInfo = `${myCountry.country} has ${myCountry.population.toFixed(2)} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`;
console.log(countryInfo);


myCountry.population += 2; // Increase using dot notation
console.log(`Population after increase: ${myCountry.population.toFixed(2)} million`);

myCountry["population"] -= 2; //Decrease using brackets notation
console.log(`Population after decrease: ${myCountry.population.toFixed(2)} million`);
 
console.log("-----------------------");

//T
// const myCountry = {
    
//     country: "India",
//     capital: "New Delhi",
//     language: "Hindi",
//     population: 1380, // Population in millions
//     neighbours: ["Nepal", "Bhutan", "Bangladesh", "Pakistan"]
       
//         describe() {
//           console.log(`${this.country} has ${this.population.toFixed(2)} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries, and a capital called ${this.capital}.`);
//         },

//         // Call the describe method
//        myCountry.describe();
       
       
//         checkIsland() {
//           this.isIsland = this.neighbours.length === 0 ? true : false;
//         }
//        };
       
//U
// Simulate 50 people voting
for (let voterNumber = 1; voterNumber <= 50; voterNumber++) {
    console.log(`Voter number ${voterNumber} is currently voting.`);
  }
  
  console.log("-----------------------");

//V
  const percentages2 = [];
  for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
  }
  
  // Compare 
  console.log(`percentages: ${percentages}`);
  console.log(`percentages2: ${percentages2}`);
  const areArraysEqual = (percentages) === (percentages2);
  console.log(`Are the arrays equal? ${areArraysEqual}`);
  console.log("------------------------------")