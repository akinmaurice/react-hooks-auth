import React from 'react';
import Header from './layout/Header';
import { Jumbotron, Container } from 'react-bootstrap';
import constants from '../config/constants';

function App() {
  return (
    <div>
      <Header />
        <Jumbotron className="fluid d-flex align-items-center">
          <Container className="text-center">
            <h1>
              {constants.APP_TITLE}
            </h1>
            <p>
              React Hooks Authentication App
            </p>
          </Container>
        </Jumbotron>
    </div>
  );
}

export default App;
