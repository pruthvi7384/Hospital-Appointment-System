import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import Apporitment from '../../user/screens/HospitalComponents/Apporitment'

function AllAppointment() {
    const deleteAppointment = () => {

    }
    return (
       <Container className="mt-4">
            <Row className="admin_heading">
                <h3>All Appointment !</h3>
                <p>All Appointments Display Here</p>
            </Row>
            <Row>
                <Col>
                    <Apporitment title="Add Appointment" subTitle="Add Appointment"/>
               </Col>
            </Row>
            <Row className="mt-3">
                <Col xl={12}>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name of Patient</th>
                                <th>Email Id</th>
                                <th>Contact Number</th>
                                <th>Appointment Date</th>
                                <th>Appointment Time</th>
                                <th>Appointment Status</th>
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
                                <Apporitment title={<i className='fas fa-pen'></i>} subTitle="Edit Appointment"/> {' '}
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

export default AllAppointment
