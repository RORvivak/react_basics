import React, {useEffect, useRef} from 'react';
import classes from "./Cockpit.css"
import  withClass from '../hoc/withClass'
import AuthContext from "../../context/auth-context"

const Cockpit = (props) =>  {
// const toggleButtonRef = useRef(null);

// useEffect(()=>{
//   toggleButtonRef.current.click();
// })
  
    const text = []
    if(props.person.length <=2)
    {
      text.push(classes.red)
    }
    if(props.person.length <=1)
    {
      text.push(classes.bold)
    }

   const  app =  {
      'text-align': 'center'
    }
    
    return(
        <div style = {app}> 
        {console.log(classes)}
         <h1>I am a react project</h1>
            <p className={text.join(" ")}>This is working really!!!</p>
            <button onClick = {props.display} style={props.style}>Show</button>
            <AuthContext.Consumer>{(context) => <button onClick={context.login}>Log In</button>}</AuthContext.Consumer>
         </div>   
    )

}

export default withClass(Cockpit, classes.App);