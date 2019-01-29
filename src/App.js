import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: "vivak", age: "27"},
      {name: "sam", age: "26"},
      {name: "Ramu", age: "30"}
    ],
    showData: false
  }

  display = () =>{
    console.log(this.showData);
    this.setState({
      showData: !this.state.showData
    })
    console.log(this.showData);
  }
  
  nameHandler = (event) =>{
    this.setState({
      person: [
        {name: "vivak kumar", age: "27"},
        {name: event.target.value, age: "26"},
        {name: "Ramu", age: "40"}
      ]
    } )

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    };
    
    return (
      <div className="App">
        <h1>I am a react project</h1>
        <p>This is working really!!!</p>
        <button onClick = {this.display} style={style}>Show</button>
        {this.state.showData ? 
        <div>
          <Person name = {this.state.person[0].name} age  = {this.state.person[0].age}/>
          <Person name = {this.state.person[1].name} age  = {this.state.person[1].age} change={this.nameHandler}>I am great</Person>
          <Person name = {this.state.person[2].name} age  = {this.state.person[2].age}/>
        </div>  : null }
      </div>
    );
    // return React.createElement('div',{className: "App"} ,React.createElement('h1',null ,'Hi i am vivak'));
  }
}

export default App;
