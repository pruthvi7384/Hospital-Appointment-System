import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllHospital from '../../global/API/AllHospital';
import SearchBar from './HospitalComponents/SearchBar';

function Hospital() {
  const Info = AllHospital()
    return (
        <Container className="All_Hospital mt-4">
            <Row id="Hospital_heading">
                <h3>All Hospitals</h3>
                <p>All Hospitals Display Here.</p>
            </Row>
            <SearchBar/>
            <Row className="mt-4">
                {
                    Info.map(item => (
                        <Col xl={4} key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description  ? `${item.description.split(' ').slice(0, 25).join(' ').replace(/<.+?>/g, "")}...`
                                        : 'No description' }
                                    </Card.Text>
                                </Card.Body>
                                <div className="Footer__Card">
                                    <ul>
                                        <li><Link to="/allhospital"><i className="fas fa-map-marker-alt"></i> <span>{item.location}</span></Link></li>
                                        <li><Link to="/allhospital"><i className="far fa-clock"></i> <span>{item.join_Date}</span></Link></li>
                                        <li ><Link to={`/allhospital/${item.id}`}><Button >Book Appointment</Button></Link></li>
                                    </ul>
                                </div>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Hospital