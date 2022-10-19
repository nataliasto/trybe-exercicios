import React, { useState } from 'react';

function Form() {
  const [formState, setFormState] = useState({
    name: '',
    age: '',
    city: '',
    module: '',
  });

  const handleChange = ({target}) => {
    const {name, value} = target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form style={{display: 'flex', flexDirection: 'column'}}>
      <label htmlFor="name-input">
        Nome completo:
        <input
          type="text"
          id="name-input"
          name={formState.name}
          onChange={(event) => handleChange(event)}
        />
      </label>

      <label htmlFor="age-input">
        Idade:
        <input
          type="number"
          id="age-input"
          name={formState.age}
          onChange={(event) => handleChange(event)}
        />
      </label>

      <label htmlFor="city-input">
        Cidade:
        <input
          type="text"
          id="city-input"
          name={formState.city}
          onChange={(event) => handleChange(event)}
        />
      </label>

      <label style={{display: 'flex', flexDirection: 'column'}}>
        Módulo atual:
        <div>
          <input
            type="radio"
            id="fund"
            name="module"
            value="Fundamentos"
            checked={formState.module === 'Fundamentos'}
            onChange={(event) => handleChange(event)}
          />
          <label htmlFor="fund">Fundamentos</label>
        </div>

        <div>
          <input
            type="radio"
            id="front-end"
            name="module"
            value="Front-end"
            checked={formState.module === 'Front-end'}
            onChange={(event) => handleChange(event)}
          />
          <label htmlFor="front-end">Front-end</label>
        </div>

        <div>
          <input
            type="radio"
            id="back-end"
            name="module"
            value="Back-end"
            checked={formState.module === 'Back-end'}
            onChange={(event) => handleChange(event)}
          />
          <label htmlFor="back-end">Back-end</label>
        </div>

        <div>
          <input
            type="radio"
            id="cs"
            name="module"
            value="Ciência da Computação"
            checked={formState.module === 'Ciência da Computação'}
            onChange={(event) => handleChange(event)}
            />
          <label htmlFor="cs">Ciência da Computação</label>
        </div>
      </label>

      <button
        type="submit"
        id="submit-btn"
        style={{width: 'fit-content'}}
      >
        Enviar
      </button>

    </form>
  );
}

export default Form;
