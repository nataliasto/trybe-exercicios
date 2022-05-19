let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
let menorPalavra = array[0];

for (let indice = 0; indice < array.length; indice += 1) {
    if (array[indice].length > maiorPalavra.length) {
		maiorPalavra = array[indice];
    }
}

console.log(maiorPalavra);

for (let indice = 0; indice < array.length; indice += 1) {
  if (array[indice].length < menorPalavra.length) {
    menorPalavra = array[indice];
  }
}

console.log(menorPalavra);