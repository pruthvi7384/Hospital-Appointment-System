import React , { useState, useEffect} from 'react'
import { serverTimestamp, collection, addDoc, updateDoc, doc, getDoc } from '@firebase/firestore';
import { Button, Col, Form, Modal, Row, FloatingLabel } from 'react-bootstrap';
import { db } from '../../../global/firebase/firebaseConfig';

function Apporitment({id, title, subTitle, appointId}) {
    // =========X===Get Hospital Id===X==============
    const [modalShow, setModalShow] = useState(false);
    const [sendappointment, setsendappointment] = useState(false)
    const [appointment,setAppointment] = useState({
        name:'',
        email:'',
        mobileno:'',
        address:'',
        date:'',
        time:'',
        status:'Panding'
    });
    const QUECTION = [
        {
            name:'name',
            value:appointment.name,
            type:'text',
            text:'Enter Your Full Name'
        },
        {
            name:'email',
            value:appointment.email,
            type:'email',
            text:'Enter Your Email'
        },
        {
            name:'mobileno',
            value:appointment.mobileno,
            type:'mobileno',
            text:'Enter Your Mobile Number'
        },
        {
            name:'address',
            value:appointment.address,
            type:'address',
            text:'Enter Your Address'
        },
        {
            name:'date',
            value:appointment.date,
            type:'date',
            text:'Enter Appointment Date'
        },
        {
            name:'time',
            value:appointment.time,
            type:'time',
            text:'Enter Appointment Time'
        }
    ]

    // =========get Appointment Detailes==================
        useEffect(() => {
            if(appointId){
                const appointmentData= async()=>{
                    const docRef = doc(db, "Appointments", appointId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data()
                        setAppointment({
                            name: data.name ? data.name : '',
                            email: data.email ? data.email : '',
                            mobileno: data.mobileno ? data.mobileno : '',
                            address: data.address ? data.address : '',
                            date: data.date ? data.date : '',
                            time: data.time ? data.time : '',
                            status:data.status ? data.status : ''
                        })
                    } else {
                        // doc.data() will be undefined in this case
                        setAppointment({
                            name:'',
                            email:'',
                            mobileno:'',
                            address:'',
                            date:'',
                            time:'',
                            status:'Panding'
                        })
                    }
                }
                appointmentData()
            }else{
                        setAppointment({
                            name:'',
                            email:'',
                            mobileno:'',
                            address:'',
                            date:'',
                            time:'',
                            status:'Panding'
                        })
            }
        }, [appointId])
    // =======X==get Appointment Detailes===X===============

    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setAppointment({...appointment, [name]:value});
    }

    const sendAppointment = async(e)=>{
        e.preventDefault();
        setsendappointment(true)
        if(appointId){
            try {
                await updateDoc(doc(db, "Appointments", appointId), {
                   ...appointment,
               });
               setsendappointment(false)
               alert('Appointment Detailes Modifide Successfuly !')   
                setAppointment({
                name:'',
                email:'',
                mobileno:'',
                address:'',
                date:'',
                time:'',
                status:'Panding'
                })
             } catch (e) {
                console.log(e.message)
                setsendappointment(false)
             }
        }else{
            try {
                await addDoc(collection(db, "Appointments"), {
                   ...appointment,
                   hospitalId: id,
                   createdAt:serverTimestamp(),
               });
               setsendappointment(false)
               alert('Thank You ! For Online Appoimtment, Your Online Hospital Appointment Booked Sussessfuly !')   
                setAppointment({
                name:'',
                email:'',
                mobileno:'',
                address:'',
                date:'',
                time:'',
                status:'Panding'
                })
             } catch (e) {
                console.log(e.message)
                setsendappointment(false)
             }
        }
       
        setModalShow(false);
    }
    return (
        <>
        <Button style={{ backgroundColor: '#008aff',
        fontWeight:'500'}} className="add_feedback"  onClick={() => setModalShow(true)}>{title}</Button>
        <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={() => setModalShow(false)}>
                <Modal.Title style={{color:'#008aff', fontWeight:700}} id="contained-modal-title-vcenter">
                    {subTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="account_form_body mt-2">
                    {QUECTION.map(item =>(
                        <Row key={item.text}>
                            <Col xl={12}>
                                { 
                                    item.name === 'address' ?
                                        <FloatingLabel className="mb-3" controlId="floatingTextarea2" label={item.text}>
                                            <Form.Control
                                            name={item.name}
                                            type={item.type}
                                            value={item.value}
                                            onChange={inputHandler}
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '150px' }}
                                            />
                                        </FloatingLabel>
                                    :
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        name={item.name}
                                        type={item.type}
                                        value={item.value}
                                        onChange={inputHandler}
                                        placeholder="name@example.com"
                                        />
                                        <label htmlFor="floatingInputCustom">{item.text}</label>
                                    </Form.Floating>
                                }
                            </Col>
                        </Row>
                        ))
                    }
                    <Row>
                        <Col>
                            {
                                subTitle === 'Edit Appointment'
                                ?
                                    <Form.Select onChange={
                                        (e)=>{
                                            setAppointment({...appointment,status:e.target.value})

                                        }
                                       
                                    }>
                                        <option value="Panding">Panding</option>
                                        <option value="Cancel">Cancel</option>
                                        <option value="Approve">Approve</option>
                                        <option value="Done">Done</option>
                                    </Form.Select>
                                :
                                ''
                            }
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer style={{justifyContent: 'center'}}>
                <Button style={{ backgroundColor: '#008aff',
                    fontWeight:'500'}} onClick={sendAppointment}>{sendappointment ? 'Booking...' : `${subTitle}`}</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}


export default Apporitment