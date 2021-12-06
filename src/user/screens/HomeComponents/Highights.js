import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

function Highights() {
    const HIGHIGHTS= [
        { 
            icon:<i className="fas fa-hospital"></i>,
            text:"HOSPITALS",
            number: '00',
        },
        { 
            icon:<i className="fas fa-users"></i>,
            text:"USERS",
            number: '00',
        },
        { 
            icon:<i className="fas fa-calendar-check"></i>,
            text:"APPOINTMENTS",
            number: '00',
        }
    ]
    return (
        <Container className="Services mt-4">
            <Row id="services_heading">
                <h3>Highlights</h3>
                <p>Our Analytics</p>
            </Row>
            <Row className="services_section">
                {
                    HIGHIGHTS.map(service => (
                        <Col xl={4} key={service.text} className="mt-3">
                            <div className="service_card">
                                {service.icon}
                                <h2>{service.number}</h2>
                                <h5>{service.text}</h5>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Highights