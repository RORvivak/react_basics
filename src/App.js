import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {id: 1, name: "vivak", age: "27"},
      {id: 2, name: "sam", age: "26"},
      {id: 3, name: "Ramu", age: "30"}
    ],
    showData: false
  }

  display = () =>{
    this.setState({
      showData: !this.state.showData
    })
  }
  
  test = (event, i) => { 
    console.log(i)
   const person = [...this.state.person]
   person[i] =  {name: event.target.value, age: person[i].age}
   console.log(i)
   this.setState(
    {person: person}
   )
  }
  nameHandler = (event) =>{
    this.setState({
      person: [
        {id: 1, name: "vivak kumar", age: "27"},
        {id: 2, name: event.target.value, age: "26"},
        {id: 3, name: "Ramu", age: "40"}
      ]
    } )

  }

  deletePerson = (personIndex) => {
    const person = [...this.state.person]
    person.splice(personIndex,1)
    // alert(personIndex)
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
        { this.state.person.map((e, index)=> {
          return (<Person remove = { () => this.deletePerson(index)} name = {e.name} age  = {e.age}  change = {(event) => {this.test(event, index)}}/>)
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
