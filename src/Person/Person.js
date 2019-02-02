
import React from 'react';
import './Person.css';

const Person = (props) => {
    
    return(<div className = 'Person' >
        <p onClick = {props.remove} >I am {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text"  onChange = {props.change}/>
    </div>);   

}

export default Person;
