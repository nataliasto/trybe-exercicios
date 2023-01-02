const fs = require('fs').promises;

// read simpsons.json
const readAll = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  return simpsons;
};

// A
const mainA = async () => {
  const simpsons = await readAll();
  simpsons.forEach(({id, name}) => console.log(`${id} - ${name}`));
};

// mainA();

// B
const mainB = async (id) => {
  const simpsons = await readAll();
  const char = simpsons.find((e) => Number(e.id) === id);
  if (!char) throw new Error('Id não encontrado');
  return console.log(char);
};

// mainB(3);
// mainB(15);

// C
const mainC = async () => {
  const simpsons = await readAll();
  const newContent = simpsons.filter(({id}) => Number(id) !== 6 && Number(id) !== 10);

  try {
    await fs.writeFile('./simpsons.json', JSON.stringify(newContent, null, 2));
    console.log('Arquivo editado com sucesso');
  } catch (err) {
    console.error(`Erro ao editar o arquivo: ${err.message}`);
  }
};

// mainC();

// D
const familyMembersId = [1, 2, 3, 4];

const mainD = async () => {
  const simpsons = await readAll();
  const simpsonFamilyMembers = simpsons.filter(({id}) => familyMembersId.includes(Number(id)));

  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamilyMembers, null, 2));
    console.log('Arquivo editado com sucesso');
  } catch (err) {
    console.error(`Erro ao editar o arquivo: ${err.message}`);
  }
};

// mainD();

// read simpsonFamily.json
const readFamily = async () => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonFamily = JSON.parse(data);
  return simpsonFamily;
};

// E
const newMember = {id: '5', name: 'Nelson Muntz'};

const mainE = async () => {
  const simpsonFamily = await readFamily();
  simpsonFamily.push(newMember);

  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily, null, 2));
    console.log('Arquivo editado com sucesso');
  } catch (err) {
    console.error(`Erro ao editar o arquivo: ${err.message}`);
  }
};

// mainE();

// F
const mainF = async () => {
  const simpsonFamily = await readFamily();
  const memberToChange = simpsonFamily.findIndex(({name}) => name === 'Nelson Muntz');
  simpsonFamily[memberToChange].name = 'Maggie Simpson';

  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily, null, 2));
    console.log('Arquivo editado com sucesso');
  } catch (err) {
    console.error(`Erro ao editar o arquivo: ${err.message}`);
  }
};

// mainF();
