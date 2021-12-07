import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import AddSpecialities from '../AddSpecialities'

function DisplaySpecialities() {
    const deleteAppointment = () => {

    }
    return (
       <Container className="mt-4">
            <Row className="admin_heading">
                <h3>All Speshalities !</h3>
                <p>All Hospital Speshalities Display Here</p>
            </Row>
            <Row>
                <Col xl={3}>
                    <AddSpecialities text={<i className="fas fa-pen"></i>} type="Add Sepecialitie"/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xl={12}>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Speshalitie Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Otto</td>
                            <td>
                                <Button variant="success" onClick={deleteAppointment}>Active</Button>{' '}
                                <AddSpecialities text={<i className="fas fa-pen"></i>} type="Edit Sepecialitie"/>{' '}
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

export default DisplaySpecialities
