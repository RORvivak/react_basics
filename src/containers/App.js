import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Validation from '../components/Validation/Validation'
import Char from "../components/Char/Char"
import Radium, {StyleRoot} from "radium";



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
      backgroundColor: 'Red',
      font: 'inherit',
      border: '100x solid blue',
      padding: '40px, 20px',
      ':hover': {  
        color: 'blue'
      }
    }
    let person = null
    let char = null
    const text = []
    if(this.state.person.length <=2)
    {
      text.push("red")
    }
    if(this.state.person.length <=1)
    {
      text.push("bold")
    }
    if(this.state.showData){
      person = ( <div>
        {<Persons persons = {this.state.person}
        deletePerson = {this.deletePerson}
        test = {this.test}
        passwordCheck = {this.passwordCheck}/> }
        </div>)

        char = (<div>
          {this.state.person.map((e,i) => {
             if(e.text !=  undefined){
             return( e.text.split("").map((e,index) => {
                return(<div><Char name = {e} remove = {() => this.delete(i, index)} ></Char></div>)

              }))}
          })}
        </div>)
      style.backgroundColor = "green"}
    return (
      <StyleRoot>
        <div className="App">
          <h1>I am a react project</h1>
          <p className={text.join(" ")}>This is working really!!!</p>
          <button onClick = {this.display} style={style}>Show</button>
          {person}
          {char}
          <Validation/>
        </div>
      </StyleRoot>  
    );
    // return React.createElement('div',{className: "App"} ,React.createElement('h1',null ,'Hi i am vivak'));
  }
}

export default Radium(App);
