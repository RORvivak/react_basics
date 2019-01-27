import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am a react project</h1>
        <p>This is working really!!!</p>
        <Person/>
      </div>
    );
    // return React.createElement('div',{className: "App"} ,React.createElement('h1',null ,'Hi i am vivak'));
  }
}

export default App;
