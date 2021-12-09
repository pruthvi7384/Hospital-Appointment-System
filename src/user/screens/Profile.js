import React,{ useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Container, Row, Col, Table, Button, Spinner } from 'react-bootstrap';
import { useProfile } from '../../global/context/Profile.Context';
import { db } from '../../global/firebase/firebaseConfig';
import { Link } from 'react-router-dom';

function Profile() {
    const { userProfile } = useProfile()
    const [appointments, setAppointments] = useState([])
    const [appointmentloading, setAppointmentLoading] = useState(false)

    useEffect(() => {
        const getAppointment = async()=>{
            try{
                setAppointmentLoading(true)
                const q = query(collection( db, "Appointments"), where("email", "==", `${userProfile.user.email}`))
                const querySnapshot = await getDocs(q);
                setAppointments(querySnapshot.docs.map((doc)=>({id:doc.id, data: doc.data()})));
                setAppointmentLoading(false)
            }catch(e){
                console.log(e.message)
                setAppointmentLoading(false)
            }
            setAppointmentLoading(false)
        }
        return () => {
            getAppointment()
            setAppointments([])
        }
    },[userProfile.user.email])
    if(appointmentloading){
        return(
            <Container style={{height:"100vh"}}className="d-flex justify-content-center align-items-center">
                <Row >
                        <Spinner animation="grow" variant="info" />
                </Row>
            </Container>
        )
    }
    return (
        <Container className="profile_page mt-4">
            <Row className="profile_heding"> 
                <h3 ><span>Pruthviraj Rajput</span> Profile</h3>
                <p>Your Profile And Privious Appointment History Here</p>
            </Row>
            <Row className="profile mt-2">
               <Col xl="4">
                    <ul>
                        <li>User Id : <span>{userProfile.id}</span></li>
                        <li>Name : <span>{userProfile.user.name}</span></li>
                        <li>Email : <span>{userProfile.user.email}</span></li>
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
                                <th>Date</th>
                                <th>Time</th>
                                <th>Hospital Detailes</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            appointments.map(appointment => (
                                <tr key={appointment.id}>
                                    <th>{appointment.id}</th>
                                    <td>{appointment.data.date}</td>
                                    <td>{appointment.data.time}</td>
                                    <td><Link to={`/allhospital/${appointment.data.hospitalId}`} >Like Here...</Link></td>
                                    <td style={{fontWeight:'bold'}} className={appointment.data.status === 'Approve' ? 'text-success': 'text-primary'}>{appointment.data.status}</td>
                                    <td>
                                        <Button variant="danger" disabled={appointment.data.status ==='Approve'} >Cancel</Button>
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