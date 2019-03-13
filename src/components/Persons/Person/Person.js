
import React, {Component, Fragment} from 'react';
import './Person.css';
import Radium from 'radium';
import classes from '../../../containers/App.css'
import WithClass from "../../hoc/WithClass"
// import Aux from '../../hoc/Auxiliary'

class Person extends Component {
  render(){ 
  const style = {
        '@media (min-width: 500px)':{
          width: '450px'
        }
      }
    
    return(
        <withClass classes = {classes.App}>
            <p onClick = {this.props.remove} >I am {this.props.name} and my age is {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text"  onChange = {this.props.change}/>
            <p>Password Check</p>
            <input type="text" onChange = {this.props.length} value = {this.props.value}/>
        </withClass> 
    );   
  }
}

export default Radium(Person);
