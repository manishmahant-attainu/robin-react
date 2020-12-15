import React, { Component, Fragment } from 'react';
import { LoginForm } from '../../components';
import { httpRequest } from '../../config';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      error:'',
      date:'',
      formData:{
        user_email:'',
        user_password:'',
      }
    };
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  componentDidMount(){
    console.log('MOUNTED ==> componentDidMount');
    this.emailRef.current.classList.add('form-control');
    this.emailRef.current.focus();
    this.timer = setInterval(() => {
      this.setState({date: Date()});
    },1000);
  }

  componentDidUpdate(){
    // console.log('COMPONENT UPDATED ===> componentDidUpdate');
  }

  componentWillUnmount(){
    // console.log('COMPONENT UNMOUNTING ===> componentWillUnmount');
    clearInterval(this.timer);
  }

  //Default mechanism
  // shouldComponentUpdate(){
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }

  submitHandler = async (e) => {
    e.preventDefault();
    const { formData } = this.state;
    const { history } = this.props;

    try {
      const user = await httpRequest({
        method:'POST',
        url:'login',
        data:{email:formData.user_email, password:formData.user_password}
      });
      localStorage.setItem('access_token',user.data.token);
      localStorage.setItem('user_info',JSON.stringify(user.data.user));
      history.push('/dashboard');
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
    // console.log('RENDERING ==> LOGIN CONTAINER');
    const { formData, error, date } = this.state;
    return(
      <Fragment>
        <div><h1>{date}</h1></div>
        <LoginForm
          submitHandler={this.submitHandler}
          inputHandler={this.inputHandler}
          formData={formData}
          error={error}
          emailRef={this.emailRef}
          passwordRef={this.passwordRef}
        />
      </Fragment>
    );
  }
}

export default Login;
