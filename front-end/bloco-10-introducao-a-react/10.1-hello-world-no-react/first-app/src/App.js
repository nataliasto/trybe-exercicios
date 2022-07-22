import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Fazer exercícios', 'Assistir as aulas', 'Se exercitar'];

function App() {
  return (
   <div>
    <ul>{compromissos.map((compromisso) => Task(compromisso))}</ul>
   </div>
  );
}

export default App;
