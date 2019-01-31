
import React from 'react';
import './Person.css';

const Person = (props) => {
    
    return(<div className = 'Person' onClick = {props.remove}>
        <p>I am {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value = {props.name}/>
    </div>);   

}

export default Person;
