import React,{ useEffect, useState } from 'react'
import { doc, getDoc, } from '@firebase/firestore'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { db } from '../../../../global/firebase/firebaseConfig'
import AddSpecialities from '../AddSpecialities'

function DisplaySpecialities({id}) {
    const [specialitie, setSpecialitie] = useState()
    const deleteAppointment = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        const getExistingData = async()=>{
            const docRef = doc(db, "Hospital", id);
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
                const data=docSnap.data()
                setSpecialitie(data.specialities)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        getExistingData()
        return () => {
            getExistingData()
        }
    }, [id,specialitie])
    return (
       <Container className="mt-4">
            <Row className="admin_heading">
                <h3>All Speshalities !</h3>
                <p>All Hospital Speshalities Display Here</p>
            </Row>
            <Row>
                <Col xl={3}>
                    <AddSpecialities id={id} text={<i className="fas fa-pen"></i>} type="Add Sepecialitie"/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xl={12}>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Speshalitie Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            specialitie ?

                            specialitie.map((sep,index)=>(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{sep}</td>
                                    <td>
                                        <AddSpecialities id={id} specality={sep} text={<i className="fas fa-pen"></i>} type="Edit Sepecialitie"/>{' '}
                                        <Button variant="danger" onClick={deleteAppointment}><i className="fas fa-trash-alt"></i></Button>
                                    </td>
                                </tr>
                               
                            ))
                            :
                            <tr>No Data Found !</tr>
                        }
                    </tbody>
                </Table>
                </Col>
            </Row>
       </Container>
    )
}

export default DisplaySpecialities
