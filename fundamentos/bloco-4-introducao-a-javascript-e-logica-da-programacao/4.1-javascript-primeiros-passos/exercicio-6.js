let pecaDeXadrez = "Rainha";

switch (pecaDeXadrez.toLowerCase()) {
  case "peão":
    console.log("Frente, uma casa");
    break;
  case "bispo":
    console.log("Diagonais, sem limite de casas");
    break;
  case "cavalo":
    console.log("Em L, qualquer sentido, três casas");
    break;
  case "torre":
    console.log("Frente e lados, sem limite de casas");
    break;
  case "rainha":
    console.log("Todos os lados, sem limite de casas");
    break;
  case "rei":
    console.log("Todos os lados, uma casa");
    break;
  default:
    console.log("Erro: peça inválida");
}
