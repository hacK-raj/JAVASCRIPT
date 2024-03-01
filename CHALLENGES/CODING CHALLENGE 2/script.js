const billAmount = 430;

const tipPercentage = billAmount >= 50 && billAmount <= 300 ? 0.15 : 0.2;
const tip = billAmount * tipPercentage;
const totalAmount = billAmount + tip;

console.log(
  `The bill was ${billAmount}, the tip was ${tip}, and the total value ${totalAmount}`
);
