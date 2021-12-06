import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

function Profile() {
    const APPOINTMENTS = [
        {
            id:"1",
            date: '21 May 2021',
            time:'09:00 PM',
            hospitalName:'Sahyadri Super Speciality Hospital',
            address:'Plot no.30 – C, Erandwane, Deccan Gymkhana, Pune 411004, Maharashtra, India',
            status:'Approve'
        },
        {
            id:"2",
            date: '22 May 2021',
            time:'11:00 PM',
            hospitalName:'Sahyadri Super Speciality Hospital',
            address:'Plot no.30 – C, Erandwane, Deccan Gymkhana, Pune 411004, Maharashtra, India',
            status:'Panding'
        },
    ]
    return (
        <Container className="profile_page mt-4">
            <Row className="profile_heding"> 
                <h3 ><span>Pruthviraj Rajput</span> Profile</h3>
                <p>Your Profile And Privious Appointment History Here</p>
            </Row>
            <Row className="profile mt-2">
               <Col xl="4">
                    <ul>
                        <li>User Id : <span>pruthvi1235rajput</span></li>
                        <li>Name : <span>Pruthviraj Rajput</span></li>
                        <li>Email : <span>pruthviraj@gmail.com</span></li>
                        <li>Join Date : <span>30 Nov 2021</span></li>
                        <li>Address : <span>425444, Shahada, Nandurbar</span></li>
                    </ul>
               </Col>
            </Row>
            <Row className="appointment_profile mt-4">
                <h3><span>Your  Appointment </span> Here</h3>
                <p>Your Privious Appointment Detailes Available Here</p>
                <Col xl={12} className="mt-2">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Hospital Name</th>
                                <th>Address</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            APPOINTMENTS.map(appointment => (
                                <tr>
                                    <th>{appointment.id}</th>
                                    <td>{appointment.hospitalName}</td>
                                    <td>{appointment.address}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td style={{fontWeight:'bold'}} className={appointment.status === 'Approve' ? 'text-success': 'text-primary'}>{appointment.status}</td>
                                    <td>
                                        <Button variant="danger" disabled={appointment.status==='Approve'} >Cancel</Button>
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

export default Profile