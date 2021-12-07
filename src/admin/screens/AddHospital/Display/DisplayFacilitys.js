import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import AddFasilites from '../AddFacilities'

function DisplayFacilities() {
    const deleteAppointment = () => {

    }
    return (
       <Container className="mt-4">
            <Row className="admin_heading">
                <h3>All Facilitis !</h3>
                <p>All Hospital Facilitis Display Here</p>
            </Row>
            <Row>
                <Col xl={2}>
                    <AddFasilites text={<i className="fas fa-pen"></i>} type="Add Facilitie"/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xl={12}>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Facilitry Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Otto</td>
                            <td>
                                <Button variant="success" onClick={deleteAppointment}>Active</Button>{' '}
                                <AddFasilites text={<i className="fas fa-pen"></i>} type="Edit Facilitie"/>{' '}
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

export default DisplayFacilities
