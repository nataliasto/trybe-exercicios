import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      selected: null,
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleSelectBtn = this.handleSelectBtn.bind(this);
    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
  }

  handleSelectBtn(indexTodo) {
    this.setState({ selected: indexTodo });
  }

  handleRemoveBtn(indexTodo) {
    this.setState((prev) => ({
      listTodo: prev.listTodo.filter((_, index) => index !== indexTodo),
    }));
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  render() {
    const { listTodo, selected } = this.state;
    return (
      <main className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        <ul>
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>
              <Item content={ todo } />
              <button
                type="button"
                onClick={ () => this.handleSelectBtn(index) }
              >
                Selecionar

              </button>
              <button
                type="button"
                disabled={ !(selected !== null && selected === index) }
                onClick={ () => this.handleRemoveBtn(index) }
              >
                Remover

              </button>
            </li>
          )) }
        </ul>
      </main>
    );
  }
}
export default App;
