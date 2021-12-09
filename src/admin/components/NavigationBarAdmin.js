import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useProfile } from '../../global/context/Profile.Context';
import { signOut } from "firebase/auth";
import { auth } from '../../global/firebase/firebaseConfig';

function NavigationBarAdmin({path}) {
  const {profile,setProfile} = useProfile();
  const History = useHistory();
  const BrowserPath = History.location.pathname;
  const LINKS = 
    profile ?
    [
      { to: profile.hospital.staus === '0' ? '1' : '/dashboard', text: profile.hospital.staus === '0' ? '' : 'Dashboard' },
      { to: profile.hospital.staus === '0' ? '2' : '/users',  text: profile.hospital.staus === '0' ? '' : 'Users' },
      { to: profile.hospital.staus === '0' ? '3' : '/hospitalsall', text: profile.hospital.staus === '0' ? '' : 'Hospitals' },
      { to: '/allapointments', text: 'Appointments' },
    ]
   
    :
    [
      { to: '/registerHospital', text: 'Registration' },
      { to: '/loginhospital', text: 'Login' },
    ]

    // =================Hospital Logout Here===========
    const logout = ()=>{
      signOut(auth).then(() => {
        alert('SingOut Successfuly')
        History.push('/')
        setProfile('')
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
                    <Link key={item.to} className={item.to===BrowserPath ? 'nav-active nav-link' : 'nav-link'} to={item.to}>{item.text}</Link>
                   ))
                  }
                </Nav>
                {
                  !profile ?
                  ''
                  :
                <NavDropdown title={profile.hospital.name ? profile.hospital.name : "NA"} id="basic-nav-dropdown">
                      <Link  className={'/hospitalprofile'===BrowserPath ? 'nav-active nav-link' : 'nav-link'} to={`/hospitalprofile`}>Profile</Link>
                      <li onClick={logout} className={'/hospitallogout'===BrowserPath ? 'nav-active nav-link' : 'nav-link'} >LogOut</li>
                </NavDropdown>
                }
              </Navbar.Collapse>
          </Container>
      </Navbar>
    )
}

export default NavigationBarAdmin
