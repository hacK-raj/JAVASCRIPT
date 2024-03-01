//  Mark's and John's mass and height in variables
let markMass = 78;
markMass = 95;
let markHeight = 1.69;
markHeight = 1.88;
let johnMass = 92;
johnMass = 85
let johnHeight = 1.95;
johnHeight = 1.76;

// Calculate both their BMIs using the formula
const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

// Create a Boolean variable indicating whether Mark has a higher BMI
const markHigherBMI = markBMI > johnBMI;

// Print the results
console.log("Mark's BMI:", markBMI);
console.log("John's BMI:", johnBMI);
console.log("Does Mark have a higher BMI?:", markHigherBMI);

//Print a nice output to yhe console using if/else statement
if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than john's BMI (${johnBMI})`);
}else{
    console.log(`john's BMI (${johnBMI}) is higher than mark's BMI (${markBMI})`);

}
