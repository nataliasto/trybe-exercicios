let aliquotaINSS;
let aliquotaIR;
const salarioBruto = 3000;

if (salarioBruto < 1556.95) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto < 2594.93) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.83) {
  aliquotaINSS = salarioBruto * 0.11;
} else if (salarioBruto >= 5189.83) {
  aliquotaINSS = 570.88;
}

const salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase < 1903.99) {
  aliquotaIR = 0;
} else if (salarioBase >= 1903.99 && salarioBase < 2826.66) {
  aliquotaIR = salarioBase * 0.075 - 142.8;
} else if (salarioBase >= 2826.66 && salarioBase < 3751.06) {
  aliquotaIR = salarioBase * 0.15 - 354.8;
} else if (salarioBase >= 3751.06 && salarioBase < 4664.69) {
  aliquotaIR = salarioBase * 0.225 - 636.13;
} else if (salarioBase >= 4664.69) {
  aliquotaIR = salarioBase * 0.275 - 869.36;
}

const salarioLiquido = salarioBase - aliquotaIR;

console.log(salarioLiquido);
