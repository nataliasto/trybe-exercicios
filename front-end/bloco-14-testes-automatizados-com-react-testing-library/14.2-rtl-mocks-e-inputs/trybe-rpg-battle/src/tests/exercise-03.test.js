import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

jest.mock('../service/rollMultipleDice');

const johnSnow = {
  defensePoints: 30,
};

it('testa uma vitória na função `attackEnemy`', () => {
  const attackPoints = 34;
  rollMultipleDice.mockReturnValueOnce(attackPoints);
  const result = {
    attackPoints,
    defensePoints: johnSnow.defensePoints,
    success: true,
  };

  expect(attackEnemy(2, 20, johnSnow)).toEqual(result);
});

it('testa uma derrota na função `attackEnemy`', () => {
  const attackPoints = 20;
  rollMultipleDice.mockReturnValueOnce(attackPoints);
  const result = {
    attackPoints,
    defensePoints: johnSnow.defensePoints,
    success: false,
  };

  expect(attackEnemy(2, 20, johnSnow)).toEqual(result);
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  const attackPoints = 30;
  rollMultipleDice.mockReturnValueOnce(attackPoints);
  const result = {
    attackPoints,
    defensePoints: johnSnow.defensePoints,
    success: false,
  };

  expect(attackEnemy(2, 20, johnSnow)).toEqual(result);
});
