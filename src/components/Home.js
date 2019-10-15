import React from 'react';
import Header from './layout/Header';
import { Jumbotron, Container } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Header />
        <Jumbotron className="fluid d-flex align-items-center">
          <Container className="text-center">
            <p>
              Protected Page for logged in users
            </p>
          </Container>
        </Jumbotron>
    </div>
  );
}

export default Home;
