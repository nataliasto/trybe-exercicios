// Re - exercício 1 dia 4.1
function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

// Re - exercício 2 dia 4.1
function maiorDeDoisNumeros(a, b) {
  if (a > b) {
    return "O maior número é " + a;
  } else if (b > a) {
    return "O maior número é " + b;
  }
}

// Re - exercício 3 dia 4.1
function maiorDeTresNumeros(a, b, c) {
  if (a > b && a > c) {
    return "O maior número é " + a;
  } else if (b > a && b > c) {
    return "O maior número é " + b;
  } else if (c > a && c > b) {
    return "O maior número é " + c;
  }
}

// Re exercício 4 dia 4.1
function ehPositivoOuNegativo(a) {
  if (a > 0) {
    return "positive";
  } else if (a < 0) {
    return "negative";
  } else if (a === 0) {
    return "zero";
  }
}

// Re exercício 5 dia 4.1
function ehTriangulo(a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    return "Erro: ângulo inválido";
  } else if (a + b + c === 180) {
    return true;
  } else {
    return false;
  }
}
