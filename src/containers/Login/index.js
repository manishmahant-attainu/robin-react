import React, { Component } from 'react';
import { LoginForm } from '../../components';

class Login extends Component {

  state = {
    formData:{
      user_email:'',
      user_password:'',
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.formData);
  }

  inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { formData } = this.state;
    this.setState({
      formData: { ...formData, [name]:value}
    });
  }

  render(){
    console.log('Login ==> ',this.props);
    // console.log(this.props.match.params);
    const { formData } = this.state;
    return(
      <LoginForm
        submitHandler={this.submitHandler}
        inputHandler={this.inputHandler}
        formData={formData}
      />
    );
  }
}

export default Login;
