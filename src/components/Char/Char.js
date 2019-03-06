import React from 'react';

const Char = (props) =>{
    console.log(props.name)
    return(<p onClick = {props.remove}>{"["+props.name+"] "}</p>)
    
}

export default Char;
