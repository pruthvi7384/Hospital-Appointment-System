import { signOut } from '@firebase/auth';
import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useProfile } from '../../global/context/Profile.Context';
import { auth } from '../../global/firebase/firebaseConfig';

function NavigationBar({path}) {
  const History = useHistory();
  const BrowserPath = History.location.pathname;
  const {userProfile,setuserProfile} = useProfile()
  const LINKS = 
    userProfile ?
      [
        { to: '/', text: 'Home' },
        { to: '/about', text: 'About' },
        { to: '/allhospital', text: 'Hospitals' },
        { to: '/contact', text: 'Contact' },
      ]
    :
    [
      { to: '/', text: 'Home' },
      { to: '/about', text: 'About' },
      { to: '/allhospital', text: 'Hospitals' },
      { to: '/contact', text: 'Contact' },
      { to: '/signup', text: 'SignUp' },
      { to: '/login', text: 'LogIn' },
    ]
     // =================User Logout Here===========
      const logout = ()=>{
        signOut(auth).then(() => {
          alert('SingOut Successfuly')
          History.push('/')
          setuserProfile('')
        }).catch((error) => {
          console.log(error.message)
        });
      }
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
                {
                  userProfile ?
                  <NavDropdown title={userProfile.user.name} id="basic-nav-dropdown">
                    <Link className={`/profile`===BrowserPath ? 'nav-active nav-link' : 'nav-link'} to={`/profile`}>Profile</Link>
                    <li onClick={logout} className={'/hospitallogout'===BrowserPath ? 'nav-active nav-link' : 'nav-link'} >LogOut</li>
                  </NavDropdown>
                  :
                  ""
                }
               
              </Navbar.Collapse>
          </Container>
      </Navbar>
    )
}

export default NavigationBar
