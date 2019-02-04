
import React from 'react';
import './Person.css';

const Person = (props) => {
    
    return(<div className = 'Person' >
        <p onClick = {props.remove} >I am {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text"  onChange = {props.change}/>
        <p>Password Check</p> 
        <input type="text" onChange = {props.length}/>
    </div>);   

}

export default Person;
