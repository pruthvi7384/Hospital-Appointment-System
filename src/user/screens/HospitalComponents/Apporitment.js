import React , { useState } from 'react'
import { Button, Col, Form, Modal, Row, FloatingLabel } from 'react-bootstrap';

function Apporitment({id}) {
    console.log(id)
    const [modalShow, setModalShow] = useState(false);
    const [quetion,setQuetion] = useState({
        name:'',
        email:'',
        mobileno:'',
        address:'',
        date:'',
        time:''
    });
    const QUECTION = [
        {
            name:'name',
            value:quetion.name,
            type:'text',
            text:'Enter Your Full Name'
        },
        {
            name:'email',
            value:quetion.email,
            type:'email',
            text:'Enter Your Email'
        },
        {
            name:'mobileno',
            value:quetion.mobileno,
            type:'mobileno',
            text:'Enter Your Mobile Number'
        },
        {
            name:'address',
            value:quetion.address,
            type:'address',
            text:'Enter Your Address'
        },
        {
            name:'date',
            value:quetion.date,
            type:'text',
            text:'Enter Appointment Date'
        },
        {
            name:'time',
            value:quetion.time,
            type:'text',
            text:'Enter Appointment Time'
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setQuetion({...quetion, [name]:value});
    }

    const sendAppointment = (e)=>{
        e.preventDefault();
        setModalShow(false);
    }
    return (
        <>
        <Button className="add_feedback"  onClick={() => setModalShow(true)}>Book Apporitment</Button>
        <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={() => setModalShow(false)}>
                <Modal.Title style={{color:'#008aff', fontWeight:700}} id="contained-modal-title-vcenter">
                    Book Apporitment
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
                </Form>
            </Modal.Body>
            <Modal.Footer style={{justifyContent: 'center'}}>
                <Button style={{ backgroundColor: '#008aff',
                    fontWeight:'500'}} onClick={sendAppointment}>Book Appointment</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}


export default Apporitment