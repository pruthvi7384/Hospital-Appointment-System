import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { Redirect } from 'react-router';
import { useProfile } from '../../global/context/Profile.Context';

function AllUsers() {
    const {profile,isloading} = useProfile()
    if(!profile && !isloading){
        return <Redirect to="/registerHospital"/>
    }
    if(profile.hospital.staus === '0'){
        return <Redirect to="/hospitalprofile/1" />
    }
    const deleteAppointment = () => {

    }
    return (
       <Container className="mt-4">
            <Row className="admin_heading">
                <h3>All User !</h3>
                <p>All User Display Here</p>
            </Row>
            <Row className="mt-3">
                <Col xl={12}>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Contact Number</th>
                                <th>Email Id</th>
                                <th>Register Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>1</td>
                            <td>Mark</td>
                            <td>
                                <Button variant="success" onClick={deleteAppointment}>Active</Button>{' '}
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

export default AllUsers
