const readline = require('readline-sync');

const weight = readline.questionFloat('What\'s your weight in kg?');
const height = readline.questionFloat('What\'s your height in m?');

const calculateBmi = () => {
  const bmi = weight / (height * height);

  return console.log(`BMI: ${bmi.toFixed(2)}`);
};

calculateBmi();
