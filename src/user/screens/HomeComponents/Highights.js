
import React,{ useEffect, useState } from 'react'
import { collection, getDocs } from '@firebase/firestore';
import { Container, Row, Col} from 'react-bootstrap'
import { db } from '../../../global/firebase/firebaseConfig';

function Highights() {
    const [total,setTotal] = useState({
        hospital:'0',
        user:'0'
    })
    const HIGHIGHTS= [
        { 
            icon:<i className="fas fa-hospital"></i>,
            text:"HOSPITALS",
            number: total.hospital <=9 ? `0${total.hospital}` : total.hospital,
        },
        { 
            icon:<i className="fas fa-users"></i>,
            text:"USERS",
            number: total.user <=9 ? `0${total.user}` : total.user,
        },
        { 
            icon:<i className="fas fa-calendar-check"></i>,
            text:"APPOINTMENTS",
            number: '00',
        }
    ]
    useEffect(() => {
        getDocs(collection(db,'Hospital')).then(snapshot => {
          setTotal({...total,hospital:snapshot.size})
        })
        getDocs(collection(db,'Users')).then(snapshot => {
            setTotal({...total,user:snapshot.size})
          })
    },[total]);
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