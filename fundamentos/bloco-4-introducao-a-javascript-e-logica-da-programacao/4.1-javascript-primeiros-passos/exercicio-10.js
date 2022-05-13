const valorCusto = 50;
const valorVenda = 70;

if (valorCusto >= 0 && valorVenda >= 0) {
  const valorCustoTotal = valorCusto * 1.2;
  const lucro = valorVenda - valorCustoTotal;
  console.log(lucro);
} else {
  console.log("Erro: valor negativo");
}
