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
    this.setState({
      showData: !this.state.showData
    })
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

  deletePerson = (personIndex) => {
    const person = [...this.state.person]
    person.splice(personIndex, 1)
    this.setState({person: person})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    }
    let person = null
    if(this.state.showData){
      person = ( <div>
        { this.state.person.map((e,i)=> {
          return (<Person name = {e.name} age  = {e.age} remove = {(i) => this.deletePerson(i)} chsnge = {this.deletePerson.nameHandler}/>)
        }) }
        </div>)
    }
    return (
      <div className="App">
        <h1>I am a react project</h1>
        <p>This is working really!!!</p>
        <button onClick = {this.display} style={style}>Show</button>
        {person}
      </div>
    );
    // return React.createElement('div',{className: "App"} ,React.createElement('h1',null ,'Hi i am vivak'));
  }
}

export default App;
