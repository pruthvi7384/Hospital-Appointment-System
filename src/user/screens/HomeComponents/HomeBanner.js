import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeBanner() {
    return (
        <Container fluid className="home_page_banner">
            <div className="home_hero_section">
                    <h1><span>Stay Home </span> Stay Safe !</h1>
                    <h4>we care about your health.</h4>
                    <Link to="/allhospital"><Button>Book Online Appointment</Button></Link>
            </div>
        </Container>
    )
}

export default HomeBanner