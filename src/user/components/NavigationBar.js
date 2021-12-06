import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

function NavigationBar({path}) {
  const History = useHistory();
  const BrowserPath = History.location.pathname;
  const LINKS = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/allhospital', text: 'Hospitals' },
    { to: '/contact', text: 'Contact' },
    { to: '/signup', text: 'SignUp' },
    { to: '/login', text: 'LogIn' },
  ]
  const DROPDOWN = [
    { to: '/profile', text: 'Profile' },
    { to: '/logout', text: 'LogOut' },
  ]
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg">
            <Container>
              <Link className="navbar-brand " to="/"><i className="fas fa-laptop-medical"></i> <span> E </span> Hospitals Appointment</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                  {LINKS.map(item =>(
                    <Link key={item.text} className={item.to===BrowserPath ? 'nav-active nav-link' : 'nav-link'} to={item.to}>{item.text}</Link>
                   ))
                  }
                </Nav>
                <NavDropdown title="Pruthviraj Rajput" id="basic-nav-dropdown">
                  {
                    DROPDOWN.map(menu =>(
                        <Link key={menu.text} className={menu.to===BrowserPath ? 'nav-active nav-link' : 'nav-link'} to={menu.to}>{menu.text}</Link>
                    ))
                  }
                </NavDropdown>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    )
}

export default NavigationBar