import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation'
import Char from "./Char/Char"

class App extends Component {
  state = {
    person: [
      {id: 1, name: "vivak", age: "27", length: 0, text: ""},
      {id: 2, name: "sam", age: "26", length: 0, text: ""},
      {id: 3, name: "Ramu", age: "30", length: 0, text: ""}
    ],
    showData: false
  }

  display = () =>{
    this.setState({
      showData: !this.state.showData
    })
  }

  passwordCheck = (event, i) =>{
    const person = [...this.state.person]
    person[i].text = event.target.value 
    person[i].length = event.target.value.length
    this.setState({person: person})
    console.log(this.state.person)
  }

  passwordValidation = (index) =>{
    const passwordLength = this.state.person[index].length
    if (passwordLength === 0)
    {
      
    }
    else if (passwordLength > 5)
    {
      return("Strong")
    }
    else{
      return("Not Strong")
    }
  }
  
  delete = (i, index) => {
    const person = [...this.state.person]
    const formattedArrayText = person[i].text.split("")
    formattedArrayText.splice(index, 1)
    person[i].text = formattedArrayText.join("")
    this.setState({person: person})
    
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
    let char = null
    if(this.state.showData){
      person = ( <div>
        { this.state.person.map((e, index)=> {
          return (<div><Person remove = { () => this.deletePerson(index)} name = {e.name} age  = {e.age} value = {this.state.person[index].text}  change = {(event) => {this.test(event, index)}} length = {(event)=> this.passwordCheck(event,index)}/>
          <Validation text = {this.passwordValidation(index)} /></div>)
        }) }
        </div>)

        char = (<div>
          {this.state.person.map((e,i) => {
            
             return( e.text.split("").map((e,index) => {
                return(<div><Char name = {e} remove = {() => this.delete(i, index)} ></Char></div>)

              }))
           
          })}
        </div>)
    }
    return (
      <div className="App">
        <h1>I am a react project</h1>
        <p>This is working really!!!</p>
        <button onClick = {this.display} style={style}>Show</button>
        {person}
        {char}
        <Validation/>
      </div>
    );
    // return React.createElement('div',{className: "App"} ,React.createElement('h1',null ,'Hi i am vivak'));
  }
}

export default App;
