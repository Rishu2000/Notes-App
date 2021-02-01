import React, { Component } from 'react';
import FormGroup from "../Form/FormGroup";

export class RegForm extends Component {
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
    this.props.handleReg(this.state.Username,this.state.Password);
  }
  render() {
    return (
      <p>Register
        {this.props.regError && (
          <div className="alert alert-danger">{this.props.regError}</div>
        )}
        {this.props.regSuccess && (
          <div className="alert alert-success">{this.props.regSuccess}</div>
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
        <input type="submit" value="Register" className="btn btn-primary" onClick={this.handleSubmit}/>
      </form>
      </p>
    )
  }
}

export default RegForm;
