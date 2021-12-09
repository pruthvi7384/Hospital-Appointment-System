import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useProfile } from '../../global/context/Profile.Context';
import { Redirect } from 'react-router';

function AllHospital() {
    const {profile,isloading} = useProfile()
    if(!profile && !isloading){
        return <Redirect to="/registerHospital"/>
    }
    if(profile.hospital.staus === '0'){
        return <Redirect to={`/hospitalprofile/${profile.id}`} />
    }
    const deleteAppointment = () => {

    }
    return (
       <Container className="mt-4">
            <Row className="admin_heading">
                <h3>All Hospital !</h3>
                <p>All Hospital Display Here</p>
            </Row>
            <Row className="mt-3">
                <Col xl={12}>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name of Hospital</th>
                                <th>Image</th>
                                <th>Location</th>
                                <th>Contact Number</th>
                                <th>Email Id</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <Button variant="success" onClick={deleteAppointment}>Active</Button>{' '}
                                <Link to="/hospitalprofile/1"><Button className="text-light" variant="info" ><i className='fas fa-pen'></i></Button></Link>{' '}
                                <Button variant="danger" onClick={deleteAppointment}><i className="fas fa-trash-alt"></i></Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
            </Row>
       </Container>
    )
}

export default AllHospital
