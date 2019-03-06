import React from 'react';
import Person from './Person/Person';

const Persons = (props) =>
{
    return(props.persons.map((e, index)=> {
        return (<div><Person remove = { () => props.deletePerson(index)} name = {e.name} age  = {e.age} value = {e.text}  change = {(event) => {props.test(event, index)}} length = {(event)=> props.passwordCheck(event,index)}/>
        </div>)
      }));
}


export default Persons;
