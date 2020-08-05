import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default React.memo(function LoginForm(props) {
  console.log('LoginForm ===>',props);
  const { submitHandler, inputHandler, formData:{ user_email, user_password } } = props;
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
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
          value={user_password}
          autoComplete={'none'}
          type="password"
          name="user_password"
          id="examplePassword"
          placeholder="Enter Password"
          onChange={inputHandler}
        />
      </FormGroup>
      <Button className={'btn btn-danger'} type="submit">Submit</Button>
    </Form>
  );
});
