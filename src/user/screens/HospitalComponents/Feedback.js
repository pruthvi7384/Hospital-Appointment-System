import React , { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';

function Feedback() {
    const [modalShow, setModalShow] = useState(false);
    const [feedback,setFeedback] = useState({
        name:'',
        email:'',
        feedback:''
    });
    const FEEDBACK = [
        {
            name:'name',
            value:feedback.name,
            type:'text',
            text:'Enter Your Full Name'
        },
        {
            name:'email',
            value:feedback.email,
            type:'email',
            text:'Enter Your Email'
        },
        {
            name:'feedback',
            value:feedback.feedback,
            type:'text',
            text:'Enter Your Valuebale Feedback',
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
        <Button className="add_feedback"  onClick={() => setModalShow(true)}>Please Add Your Valuebale Feedback Here..</Button>
        <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={() => setModalShow(false)}>
                <Modal.Title id="contained-modal-title-vcenter" style={{color:'#008aff', fontWeight:700}}>
                    Add Your Valuebale Feedback
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="account_form_body mt-2">
                    {FEEDBACK.map(item =>(
                        <Row key={item.text}>
                            <Col xl={12}>
                                { 
                                    item.name === 'feedback' ?
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
                fontFamily: `Poppins, sans-serif`,
                fontWeight:'500'}} onClick={sendFeedback}>Provide Feedback</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Feedback