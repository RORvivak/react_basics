import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent
{ 
  static getDerivedStateFromProps(prevprops, prevstate)
  {
    console.log("[persons.js] getDerivedStateFromProps"                   )
  }
  
    // shouldComponentUpdate(nextprops, nextstate){
    //   if(this.props.persons !== nextprops.persons){
    //   return true
    // }
    // else{
    //   return false
    // }
    // }
  getSnapshotBeforeUpdate(prevprops, prevstate){
    console.log("[persons.js] getSnapshotBeforeUpdate")
    return{ message: "vivak"}
  }

  componentDidUpdate(prevprops, prevstate, snapshot){
    console.log("[persons.js] componentDidUpdate")
    console.log(snapshot  )
  }
  render(){
    console.log("persons.js rendering")
    return(this.props.persons.map((e, index)=> {
        return (<div><Person remove = { () => this.props.deletePerson(index)} name = {e.name} age  = {e.age} value = {e.text}  change = {(event) => {this.props.test(event, index)}} length = {(event)=> this.props.passwordCheck(event,index)}/>
        </div>)
      }));
    }   
}


export default Persons;
