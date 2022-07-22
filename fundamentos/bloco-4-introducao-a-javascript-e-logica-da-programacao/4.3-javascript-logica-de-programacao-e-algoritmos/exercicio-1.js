// 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800

let fatorialDez = 1;

for (let indice = 10; indice > 0; indice -= 1) {
    fatorialDez *= indice;
}

console.log(fatorialDez);