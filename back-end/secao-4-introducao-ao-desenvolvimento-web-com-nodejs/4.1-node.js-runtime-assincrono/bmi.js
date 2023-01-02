const readline = require('readline-sync');

const weight = readline.questionFloat('What\'s your weight in kg?');
const height = readline.questionFloat('What\'s your height in m?');

const calculateBmi = () => {
  const bmi = weight / (height * height);

  return bmi.toFixed(2);
};

const condition = () => {
  const bmi = calculateBmi();

  if (bmi < 18.5) return 'Underweight (thin)';
  if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
  if (bmi >= 25 && bmi < 30) return 'Overweight';
  if (bmi >= 30 && bmi < 35) return 'Grade I obesity';
  if (bmi >= 35 && bmi < 40) return 'Grade II obesity';
  if (bmi >= 40) return 'Obesity grades III and IV';
};

const main = () => {
  const bmi = calculateBmi();
  const message = condition();

  return console.log(`BMI: ${bmi}, ${message}`);
};

main();
