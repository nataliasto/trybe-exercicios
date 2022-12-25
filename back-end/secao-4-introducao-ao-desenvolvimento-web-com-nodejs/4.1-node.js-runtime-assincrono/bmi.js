const weight = 70;
const height = 1.67;

const calculateBmi = () => {
  const bmi = weight / (height * height);

  return console.log(`BMI: ${bmi.toFixed(2)}`);
};

calculateBmi();
