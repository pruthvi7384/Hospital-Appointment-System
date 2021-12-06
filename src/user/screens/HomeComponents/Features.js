import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

function Features() {
    const SERVICES = [
        { 
            icon:<i className="fas fa-calendar-check"></i>,
            text:"Simple appointment process",
            info:"For your first visit to hospital, registration and appointment with doctor is made simpler. All you have to do is verify yourself using Aadhaar Number, Select Hospital and Department, Select date of Appointment and receive SMS for Appointment."
        },
        { 
            icon:<i className="far fa-hospital"></i>,
            text:"Hospital On Boarding",
            info:"Hospitals can come on board this platform and provide their appointment slots for online booking by patients. The system facilitates Hospitals to easily manage their registration and appointment process and monitor the flow of patients."
        },
        { 
            icon:<i className="fas fa-tachometer-alt"></i>,
            text:"Dashboard Reports",
            info:"Total number of Hospitals for which appointment can be taken through web along with their departments for which online appointment can be taken can be seen in reports. Detail reports showing information about New and Old patients taking appointment through this portal can be seen."
        }
    ]
    return (
        <Container className="Services mt-4">
            <Row id="services_heading">
                <h3>Features</h3>
                <p>Our Offered Features</p>
            </Row>
            <Row className="services_section">
                {
                    SERVICES.map(service => (
                        <Col xl={4} key={service.text} className="mt-3">
                            <div className="service_card">
                                {service.icon}
                                <h5>{service.text}</h5>
                                <p>{service.info}</p>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Features