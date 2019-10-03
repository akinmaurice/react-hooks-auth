import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../layout/Header';
import { validateLogin } from '../utils/Validator';
import constants from '../../config/constants';
import AlertModal from '../utils/Alert';

function Login() {
  const user = {
    email: '',
    password: ''
  };

  const initialState = {
    errorMessage: '',
    isError: false,
    isLoading: false,
    isSuccess: false
  };

  const [ loginUser, setLoginUser ] = useState(user);
  const [ viewState, setViewState ] = useState(initialState);

  const closeAlert = () => setViewState(initialState);


  const submitForm = (e) => {
    e.preventDefault();
    setViewState({
      errorMessage: '',
      isError: false,
      isLoading: true,
      isSuccess: false
    });
    const error = validateLogin(loginUser);
    if(error) {
      setViewState({
        errorMessage: error,
        isError: true,
        isLoading: false,
        isSuccess: false
      });
    } else {
      setViewState({
        errorMessage: '',
        isError: false,
        isLoading: false,
        isSuccess: true
      });
    };
  }


  let view = '';
  let modalView = '';
  const { isLoading, isError, isSuccess, errorMessage } = viewState;
  if(isLoading) {
    view = 'Loading';
  } else if(!isLoading && isError) {
    modalView = <AlertModal
    data={errorMessage}
    type="danger"
    method={closeAlert}/>
  } else if(!isLoading && isSuccess) {
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
            <Form.Group className="text-danger">
              {modalView}
            </Form.Group>
            <Form.Group>
              <Form.Control type="email" placeholder="Email"
              value={loginUser.email}
              onChange={e => setLoginUser({ ...loginUser, email: e.target.value})} />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Password"
              value={loginUser.password}
              onChange={e => setLoginUser({ ...loginUser, password: e.target.value})} />
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
