import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import constants from '../../config/constants';

const Header = () => {
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="brand">
          <Link to="/" className="brand">
            {constants.APP_TITLE}
          </Link>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to ="#" className="nav-link">
                  Sign In
                </Link>
                <Link to ="#" className="nav-link">
                  Create Account
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;