import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default React.memo(function LoginForm(props) {
  // console.log('LoginForm ===>',props);
  const { passwordRef, emailRef, submitHandler, inputHandler, formData:{ user_email, user_password }, error } = props;
  return (
    <Form onSubmit={submitHandler}>
      {error && <Label>{error}</Label>}
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <input
          ref={emailRef}
          value={user_email}
          autoComplete={'none'}
          type="text"
          name="user_email"
          id="exampleEmail"
          placeholder="Enter Email"
          onChange={inputHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          ref={passwordRef}
          value={user_password}
          autoComplete={'none'}
          type="password"
          name="user_password"
          id="examplePassword"
          placeholder="Enter Password"
          onChange={inputHandler}
        />
      </FormGroup>
      <Button className={'btn btn-danger'} type="submit">Login</Button>
    </Form>
  );
});
