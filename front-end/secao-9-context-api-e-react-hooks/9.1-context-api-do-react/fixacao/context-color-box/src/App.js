import React from 'react';
import ColorBox from './components/ColorBox';
import Context from './context/Context';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      btnBgColors: ['red', 'yellow', 'blue'],
      actualBtnBgColor: 'blue',
    }
  }

  changeColor = () => {
    const { btnBgColors, actualBtnBgColor } = this.state;
    if (actualBtnBgColor === 'red') {
      this.setState({actualBtnBgColor: btnBgColors[1]})
    } else if (actualBtnBgColor === 'yellow') {
      this.setState({actualBtnBgColor: btnBgColors[2]})
    } else {
    this.setState({actualBtnBgColor: btnBgColors[0]})
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.changeColor()    
  }

  render() {
    const { actualBtnBgColor } = this.state;
    const contextValue = {
      actualBtnBgColor,
      handleClick: this.handleClick,
    }
    return (
      <Context.Provider value={contextValue}>
        <ColorBox />
      </Context.Provider>
    );
  }
}

export default App;
