import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: "vivak", age: "27"},
      {name: "sam", age: "26"},
      {name: "Ramu", age: "30"}
    ]
  }

  switchData= () =>{
    this.setState(
      {
        person: [
          {name: "vivak kumar", age: "27"},
          {name: "sam", age: "26"},
          {name: "Ramu", age: "40"}
        ]
      }   
    )
  } 

  render() {
    return (
      <div className="App">
        <button onClick = {this.switchData}>Toggle</button>
        <h1>I am a react project</h1>
        <p>This is working really!!!</p>
        <Person name = {this.state.person[0].name} age  = {this.state.person[0].age}/>
        <Person name = {this.state.person[1].name} age  = {this.state.person[1].age}>I am great</Person>
        <Person name = {this.state.person[2].name} age  = {this.state.person[2].age}/>
      </div>
    );
    // return React.createElement('div',{className: "App"} ,React.createElement('h1',null ,'Hi i am vivak'));
  }
}

export default App;
