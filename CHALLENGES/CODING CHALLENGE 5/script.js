const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) ${mark.bmi > john.bmi ? 'is higher than' : 'is lower than'} ${john.fullName}'s BMI (${john.bmi.toFixed(2)})`);
