import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../layout/Header';
import constant from '../../config/constants';
import { validateRegister } from '../utils/Validator';
import { registerUser } from '../../actions/register';
import { showError, clearError } from '../../actions/utils';

function Register(props) {
  const user = {
    email: '',
    password: '',
    confirm_password: ''
  };


  const dispatch = useDispatch();

  const [ newUser, setNewUser ] = useState(user);

  const { isLoading, isError, errorMessage, registerSuccess } = useSelector(state => state);


  const submitForm = (e) => {
    e.preventDefault();
    const error = validateRegister(newUser);
    if(error) {
      dispatch(showError(error));
    } else {
      dispatch(registerUser(newUser));
    }
  }



  useEffect(()=> {
    dispatch(clearError());
  }, [dispatch])


  let view = '';
  if(isLoading) {
    view = 'Loading';
  } else if(!isLoading && isError) {
    view = `${errorMessage}`
  } else if(!isLoading && registerSuccess ) {
    props.history.push('/')
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
              {view}
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
