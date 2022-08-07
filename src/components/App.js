import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ken the Ninja'};
  }

  handleClick(name) {
    this.setState({name: name});
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <p>Let's study React together!</p>
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/kentheninja.png"
          alt="Ken the Ninja welcoming you"
        />
        <p></p>
        <button onClick={() => {this.handleClick('Master Wooly')}}>Master Wooly</button>
        <button onClick={() => {this.handleClick('Ken the Ninja')}}>Ken the Ninja</button>
      </div>
    )
  }
}

export default App;