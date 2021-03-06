
import React, {Component} from 'react';
import './Person.css';
// import Radium from 'radium';
import AuthContext from "../../../context/auth-context"

class Person extends Component {
  constructor(props){
    super(props)
    this.ref = React.createRef();
  }

  static contextType = AuthContext;
  componentDidMount(){
    this.ref.current.focus();
  }
  render(){ 
  const style = {
        '@media (min-width: 500px)':{
          width: '450px'
        }
      }
    
    return(<div className = 'Person' style={style} >
        <p onClick = {this.props.remove} >I am {this.props.name} and my age is {this.props.age}</p>
        {<p>{this.context.auth ? "Authenticated" : "Not a valid user"}</p>}
        <p>{this.props.children}</p>
        <input type="text"  onChange = {this.props.change} ref={this.ref}/>
        <p>Password Check</p> 
        <input type="text" onChange = {this.props.length} value = {this.props.value}/>
    </div>);   
  }
}

export default Person;
