
import React, {Component} from 'react';
import './Person.css';
import Radium from 'radium';

class Person extends Component {
  render(){ 
  const style = {
        '@media (min-width: 500px)':{
          width: '450px'
        }
      }
    
    return(<div className = 'Person' style={style} >
        <p onClick = {this.props.remove} >I am {this.props.name} and my age is {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="text"  onChange = {this.props.change}/>
        <p>Password Check</p> 
        <input type="text" onChange = {this.props.length} value = {this.props.value}/>
    </div>);   
  }
}

export default Radium(Person);
