import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table, Spinner, Button } from 'react-bootstrap'
import { query, collection, where, getDocs,  deleteDoc, doc } from '@firebase/firestore';
import { db } from '../../global/firebase/firebaseConfig';
import { Redirect } from 'react-router'
import { useProfile } from '../../global/context/Profile.Context'

import Apporitment from '../../user/screens/HospitalComponents/Apporitment'

function AllAppointment() {

    const {profile,isloading} = useProfile()
    const [appointmentloading, setAppointmentLoading] = useState(true)

    const id = profile.id

    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const getAppointment = async()=>{
            try{
                const q = query(collection( db, "Appointments"), where("hospitalId", "==", id))
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
        }
    })

    if(!profile && !isloading){
        return <Redirect to="/registerHospital"/>
    }
    
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
       <Container className="mt-4">
            <Row className="admin_heading">
                <h3>All Appointment !</h3>
                <p>All Appointments Display Here</p>
            </Row>
            <Row>
                <Col>
                    <Apporitment id={profile.id}  title="Add Appointment" subTitle="Add Appointment"/>
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
                            appointments.length !==0
                            ?
                            appointments.map((appointment)=>(
                                <tr key={appointment.id}>
                                    <th>{appointment.id}</th>
                                    <td>{appointment.data.name}</td>
                                    <td>{appointment.data.email}</td>
                                    <td>{appointment.data.mobileno}</td>
                                    <td>{appointment.data.date}</td>
                                    <td>{appointment.data.time}</td>
                                    <td>{appointment.data.status}</td>
                                    <td>
                                        <Apporitment appointId={appointment.id}  id={id} title={<i className='fas fa-pen'></i>} subTitle="Edit Appointment"/> {' '}
                                        <Button variant="danger" onClick={
                                            async()=>{
                                                await deleteDoc(doc(db, 'Appointments', `${appointment.id}`))
                                                alert( `ID => ${appointment.id} This Appointment Detailes Deleted Successfuly !`)
                                            }
                                        } ><i className="fas fa-trash-alt"></i></Button>
                                    </td>
                                </tr>
                            ))
                            :
                            <tr style={{fontWeight:'bold'}} className="text-danger">No Appointment Found !</tr>
                        }
                       
                    </tbody>
                </Table>
                </Col>
            </Row>
       </Container>
    )
}

export default AllAppointment
