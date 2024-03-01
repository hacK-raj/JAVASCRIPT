//A 


const country = "india";

console.log(country);

const continent = "Asia"
console.log(continent)

let population = 1428000000;

console.log(population)

//B

const isIsland = false;

let language = "bengali"; 
console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

//C

//D
console.log("Each half contain",population/2,"population" )
population++;
console.log(population)
let Finlandpopulation = 60000000;
console.log(population>Finlandpopulation);
let avgPopulation = 33000000;
console.log(population>avgPopulation)
let spoken = 85000000;
let description = country + " is in " + continent + " , and its " + spoken +" people speak " + language;


//E
description =`${country} is in ${continent} and its ${spoken} people speak ${language}`
console.log(description)

//F
if(population>Finlandpopulation){
    console.log("India's Population is above average") 
}else{
    console.log("India's population is 22 million below average");
    }




