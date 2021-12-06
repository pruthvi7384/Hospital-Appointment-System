import React , { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';

function AddSpecialities() {
    const [modalShow, setModalShow] = useState(false);
    const [feedback,setFeedback] = useState({
        name:''
    })
    const SPESHALITES = [
        {
            name:'name',
            value:feedback.name,
            type:'text',
            text:'Enter Your Hospital Specialitie'
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setFeedback({...feedback, [name]:value});
    }

    const sendFeedback = (e)=>{
        e.preventDefault();
        setModalShow(false);
    }
    return (
        <>
        <Button style={{ backgroundColor: '#008aff',
        fontFamily: `Poppins, sans-serif`,
        fontWeight:'500'}}  onClick={() => setModalShow(true)}>Add Specialitie</Button>
        <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={() => setModalShow(false)}>
                <Modal.Title id="contained-modal-title-vcenter" style={{color:'#008aff', fontWeight:700}}>
                    Add Hospital Specialities
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="account_form_body mt-2">
                    {SPESHALITES.map(item =>(
                        <Row key={item.text}>
                            <Col xl={12}>
                                { 
                                        <FloatingLabel className="mb-3" controlId="floatingTextarea2" label={item.text}>
                                            <Form.Control
                                            name={item.name}
                                            type={item.type}
                                            value={item.value}
                                            onChange={inputHandler}
                                            placeholder="Leave a comment here"
                                            />
                                        </FloatingLabel>
                                }
                            </Col>
                        </Row>
                        ))
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer style={{justifyContent: 'center'}}>
                <Button style={{ backgroundColor: '#008aff',
                fontFamily: `Poppins, sans-serif`,
                fontWeight:'500'}} onClick={sendFeedback}>Add Specialities</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AddSpecialities