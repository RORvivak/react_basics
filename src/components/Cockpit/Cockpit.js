import React, {useEffect} from 'react';
import classes from "./Cockpit.css"

const Cockpit = (props) =>  {
  
    const text = []
    if(props.person.length <=2)
    {
      text.push(classes.red)
    }
    if(props.person.length <=1)
    {
      text.push(classes.bold)
    }
    return(
        <div>
         <h1>I am a react project</h1>
            <p className={text.join(" ")}>This is working really!!!</p>
            <button onClick = {props.display} style={props.style}>Show</button>
         </div>   
    )

}

export default Cockpit;