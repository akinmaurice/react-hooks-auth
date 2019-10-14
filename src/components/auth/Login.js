import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../layout/Header';
import { validateLogin } from '../utils/Validator';
import constants from '../../config/constants';
import { loginUser } from '../../actions/login';
import { showError } from '../../actions/utils';

function Login() {
  const user = {
    email: '',
    password: ''
  };


  const dispatch = useDispatch();

  const [ loginUserData, setLoginUserData ] = useState(user);

  const { isLoading, isError, errorMessage, authenticated } = useSelector(state => state);



  const submitForm = (e) => {
    e.preventDefault();
    const error = validateLogin(loginUserData);
    if(error) {
      dispatch(showError(error));
    } else {
      dispatch(loginUser(loginUserData));
    }
  }


  let view = '';
  if(isLoading) {
    view = 'Loading';
  } else if(!isLoading && isError) {
    view = `${errorMessage}`
  } else if(!isLoading && authenticated ) {
    view = 'Login Successful'
  }


  return (
    <div>
      <Header />
      <Container className="content text-center">
        <Row>
          <Col>
            <h3 className="form-head_title">
            {constants.APP_TITLE}
            </h3>
            <h5 className="form-head_text">
              Sign In
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form className="login-form">
            <Form.Group>
              <Form.Control type="email" placeholder="Email"
              value={loginUser.email}
              onChange={e => setLoginUserData({ ...loginUserData, email: e.target.value})} />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Password"
              value={loginUser.password}
              onChange={e => setLoginUserData({ ...loginUserData, password: e.target.value})} />
            </Form.Group>
            <Button type="submit" className="btn btn-block btn-login"
            onClick={e => submitForm(e)}>
              Login
            </Button>
            <Form.Group className="text-danger">
              {view}
            </Form.Group>
            <Form.Group className="form-footer_text">
            <ul className="list-unstyled list-not-found">
              <li>
                 Don't have an account?
              </li>
              <li>
                <Link to="/register">
                  Create Account
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

export default Login;
