const angulo1 = 90;
const angulo2 = 45;
const angulo3 = 45;

if (angulo1 + angulo2 + angulo3 == 180) {
    console.log("true");
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("error");
} else {
    console.log("false");
}