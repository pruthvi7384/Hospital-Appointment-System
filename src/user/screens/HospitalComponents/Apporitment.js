import React , { useState } from 'react'
import { Button, Col, Form, Modal, Row, FloatingLabel } from 'react-bootstrap';

function Apporitment({id, title, subTitle}) {
    console.log(id)
    const [modalShow, setModalShow] = useState(false);
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
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setAppointment({...appointment, [name]:value});
    }

    const sendAppointment = (e)=>{
        e.preventDefault();
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
                    fontWeight:'500'}} onClick={sendAppointment}>{subTitle}</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}


export default Apporitment