import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../layout/Header';

function NotFound() {
  return (
    <div>
      <Header />
        <Container className="text-center content">
            <h1 className="text-danger">
              Oops!
            </h1>
            <h1>
              Error (4xx)
            </h1>
            <br />
            <h5>
              We can't find the page you're looking for
            </h5>
            <br />
            <h6>
              Here are a few links that might be helpful
            </h6>
            <br />
            <ul className="list-unstyled list-not-found">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="/">
                  Create Account
                </Link>
              </li>
            </ul>
        </Container>
    </div>
  );
}

export default NotFound;
