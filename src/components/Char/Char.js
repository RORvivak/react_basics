import React from 'react';
import withComponent from '../hoc/withClass';
import Classes from '../../containers/App.css'

const style= {'text-align': 'center'}
const Char = (props) =>{
    console.log(props.name)
    return(<p style={style} onClick = {props.remove}>{"["+props.name+"] "}</p>)
    
}


export default withComponent(Char,{style});
