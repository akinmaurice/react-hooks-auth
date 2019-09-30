import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../layout/Header';
import constant from '../../config/constants';

function Register() {
  const user = {
    email: '',
    password: '',
    confirm_password: ''
  };

  const initialState = {
    errorMessage: '',
    isError: false,
    isLoading: false,
    isSuccess: false
  };


  const [ newUser, setNewUser ] = useState(user);
  const [ viewState, setViewState ] = useState(initialState);


  const submitForm = (e) => {
    e.preventDefault();
    setViewState({
      errorMessage: '',
      isError: false,
      isLoading: true,
      isSuccess: false
    });
  }




  return (
    <div>
      <Header />
      <Container className="content text-center">
        <Row>
          <Col>
            <h3 className="form-head_title">
              {constant.APP_TITLE}
            </h3>
            <h5 className="form-head_text">
              Create Account
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form className="login-form">
            <Form.Group>
              <Form.Control type="email" placeholder="Email"
              value={newUser.email}
              onChange={e => setNewUser({ ...newUser, email: e.target.value})}
               />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Password"
              value={newUser.password}
              onChange={e => setNewUser({ ...newUser, password: e.target.value})}
               />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Confirm Password"
              value={newUser.confirm_password}
              onChange={e => setNewUser({ ...newUser, confirm_password: e.target.value})}
               />
            </Form.Group>
            <Button type="submit" className="btn-block btn-login"
             onClick={e => submitForm(e)}>
              Create Account
            </Button>
            <Form.Group className="text-danger">
              view Error
            </Form.Group>
            <Form.Group className="form-footer_text form-link">
            <ul className="list-unstyled list-not-found">
              <li>
                 Have an account?
              </li>
              <li>
                <Link to="/login">
                  Sign in
                </Link>
              </li>
            </ul>
            </Form.Group>
          </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
