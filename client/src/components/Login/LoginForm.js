import React, { Component } from 'react';
import FormGroup from "../Form/FormGroup";

export class LoginForm extends Component {
  state={
    Username:null,
    Password:null
  }
  onChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    //console.log(`handleAuth:${typeof(this.props.handleAuth)}`)
    this.props.handleAuth(this.state.Username,this.state.Password);
  }
  render() {
    return (
      <p>Login
        {this.props.error && (
          <div className="alert alert-danger">{this.props.error}</div>
        )}
      <form className="LoginForm">
        {[
          {
            Id:"Username",
            Type:"text",
            Desc:"Enter your Username."
          },{
            Id:"Password",
            Type:"password",
            Desc:"Enter your Password."
          }
        ].map((fg,key) => <FormGroup {...fg} key={key} Label={{...fg}.Id} Value={this.state[{...fg}.Id]} onChange={this.onChange}/>)}
        <input type="submit" value="Login" className="btn btn-primary" onClick={this.handleSubmit}/>
      </form>
      </p>
    )
  }
}

export default LoginForm;
