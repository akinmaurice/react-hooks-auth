import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import constants from '../../config/constants';

const Header = () => {

  const { authenticated } = useSelector(state => state);

  let navLink = (
    <Nav className="ml-auto">
      <Link to ="login" className="nav-link">
        Sign In
      </Link>
      <Link to ="register" className="nav-link">
        Create Account
      </Link>
    </Nav>
  )
  if(authenticated) {
    navLink = (
      <Nav className="ml-auto">
        <Link to ="/" className="nav-link">
          User Email
        </Link>
        <Link to ="/logout" className="nav-link">
          Logout
        </Link>
    </Nav>
    )
  }

    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="brand">
          <Link to="/" className="brand">
            {constants.APP_TITLE}
          </Link>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {navLink}
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;