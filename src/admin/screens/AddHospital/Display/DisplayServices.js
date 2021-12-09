import { doc, getDoc } from '@firebase/firestore'
import React,{ useState,useEffect } from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { db } from '../../../../global/firebase/firebaseConfig'
import AddServices from '../AddServices'

function DisplayServices({id}) {
    const [services, setServices] = useState()

    useEffect(() => {
        const getExistingData = async()=>{
            const docRef = doc(db, "Hospital", id);
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
                const data=docSnap.data()
                setServices(data.services)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        getExistingData()
        return () => {
            getExistingData()
        }
    }, [id,services])
    const deleteAppointment = () => {

    }
    return (
       <Container className="mt-4">
            <Row className="admin_heading">
                <h3>All Services !</h3>
                <p>All Hospital Services Display Here</p>
            </Row>
            <Row>
                <Col xl={2}>
                    <AddServices id={id} text={<i className='fas fa-pen'></i>} type="Add Service"/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xl={12}>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Service Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            services ?

                            services.map((ser,index)=>(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{ser}</td>
                                    <td>
                                        <AddServices id={id} services={ser} text={<i className="fas fa-pen"></i>} type="Edit Sepecialitie"/>{' '}
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

export default DisplayServices
