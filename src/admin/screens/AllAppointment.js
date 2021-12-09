import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { Redirect } from 'react-router'
import { useProfile } from '../../global/context/Profile.Context'

import Apporitment from '../../user/screens/HospitalComponents/Apporitment'

function AllAppointment() {

    const {profile,isloading} = useProfile()
    if(!profile && !isloading){
        return <Redirect to="/registerHospital"/>
    }
    
    return (
       <Container className="mt-4">
            <Row className="admin_heading">
                <h3>All Appointment !</h3>
                <p>All Appointments Display Here</p>
            </Row>
            <Row>
                <Col>
                    <Apporitment id={profile.id} title="Add Appointment" subTitle="Add Appointment"/>
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
                        {
                            profile.hospital.appointments.map((appointment, index)=>(
                                <tr key={index}>
                                    <th>{index}</th>
                                    <td>{appointment.name}</td>
                                    <td>{appointment.email}</td>
                                    <td>{appointment.mobileno}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.status}</td>
                                    <td>
                                        <Apporitment index={index} id={profile.id} title={<i className='fas fa-pen'></i>} subTitle="Edit Appointment"/> {' '}
                                        <Button variant="danger" ><i className="fas fa-trash-alt"></i></Button>
                                    </td>
                                </tr>
                            ))
                        }
                       
                    </tbody>
                </Table>
                </Col>
            </Row>
       </Container>
    )
}

export default AllAppointment
