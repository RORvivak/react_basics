
import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
    const style = {
        '@media (min-width: 500px)':{
          width: '450px'
        }
      }
    
    return(<div className = 'Person' style={style} >
        <p onClick = {props.remove} >I am {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text"  onChange = {props.change}/>
        <p>Password Check</p> 
        <input type="text" onChange = {props.length} value = {props.value}/>
    </div>);   

}

export default Radium(Person);
