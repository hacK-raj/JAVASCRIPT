"use strict"; 
//G  

let n ='9'-'5';
console.log(n);
n = '19' - '13' + '17';
console.log(n); 
n = '19' - '13' + 17;
console.log(n);
n = '123' < 57;
console.log(n);
n = 5 + 6 + '4' + 9 - 4 - 2;
console.log(n);

// H

    const numNeighbours = (prompt('How many neighbour countries does your country have ?'));

   if (numNeighbours == 1){
       console.log(`Only 1 border!`)
    }
   else if(numNeighbours > 1){
   console.log(`More than 1 border`)
   }

   else{
       console.log(`No borders!`)   }

//I
 let countryName="Portugal";
 let speakEnglish = true;
 let population = 20;
 let notIsland = false;

 if(speakEnglish && population < 50 && !notIsland)
 {
  console.log(`You should live in ${countryName}:)`)
 }
 else{
    console.log(`${countryName} doesn't meet your criteria :(`);
}
countryName="Canada";
speakEnglish = false;
population = 20;
notIsland = true;

 if(speakEnglish && population < 50 && !notIsland)
 {
  console.log(`You should live in ${countryName}:)`)
 }
 else{
    console.log(`${countryName} doesn't meet your criteria :(`);
}

//J
const language = "Hindi";
switch(language.toLowerCase()){
    case "chinese":
    case "mandarin":
        console.log("Most native speakers");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "hindi":
        console.log("3rd Native speakers");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too!");
}

//K1
let countryPopulation = 35;
countryPopulation > 33
? console.log("Portugal's population is above average")
: console.log("Portugal's population is below average");

//k2
countryPopulation = 13;
countryPopulation > 33
? console.log("Portugal's population is above average")
: console.log("Portugal's population is below average");

countryPopulation = 130;
countryPopulation > 33
? console.log("Portugal's population is above average")
: console.log("Portugal's population is below average");
