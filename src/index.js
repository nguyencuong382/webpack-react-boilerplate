import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  showA = () => {
    console.log('aaa');
  };

  render() {
    return (
      <div>
        <button onClick={this.showA}>Click here</button>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
