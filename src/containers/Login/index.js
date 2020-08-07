import React, { Component } from 'react';
import { LoginForm } from '../../components';
import { httpRequest } from '../../config';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      error:'',
      formData:{
        user_email:'',
        user_password:'',
      }
    };
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  componentDidMount(){
    console.log('MOUNTED', this.emailRef.current.focus());
  }

  submitHandler = async (e) => {
    e.preventDefault();
    console.log(this.emailRef.current);
    console.log(this.passwordRef.current);
    const { formData } = this.state;
    try {
      const user = await httpRequest({
        method:'POST',
        url:'login',
        data:{email:formData.user_email, password:formData.user_password}
      });
      localStorage.setItem('access_token',user.data.token);
      localStorage.setItem('user_info',JSON.stringify(user.data.user));
    } catch (error) {
      this.setState({error:error.response.data.message});
    }
  }

  inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { formData } = this.state;
    this.setState({
      error:'',
      formData: { ...formData, [name]:value}
    });
  }

  render(){
    console.log('Login ==> ',this.props);
    // console.log(this.props.match.params);
    const { formData, error } = this.state;
    return(
      <LoginForm
        submitHandler={this.submitHandler}
        inputHandler={this.inputHandler}
        formData={formData}
        error={error}
        emailRef={this.emailRef}
        passwordRef={this.passwordRef}
      />
    );
  }
}

export default Login;
