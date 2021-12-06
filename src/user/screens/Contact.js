import React,{ useState } from 'react'
import { Alert, Col, Container, Form, Row, Button, FloatingLabel } from 'react-bootstrap'

function Contact() {
    const [show, setShow] = useState(false);
    const [contact,setContact] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    });
    const SIGNUP = [
        {
            name:'name',
            value:contact.name,
            type:'text',
            text:'Enter Your Full Name'
        },
        {
            name:'email',
            value:contact.email,
            type:'email',
            text:'Enter Your Email'
        },
        {
            name:'subject',
            value:contact.subject,
            type:'text',
            text:'Enter Your Subject'
        },
        {
            name:'message',
            value:contact.message,
            type:'text',
            text:'Enter Your Message',
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setContact({...contact, [name]:value});
    }
    const contact_Info = (e)=>{
        e.preventDefault();
    }
    const contact_Details = [
        {
            icon:'fas fa-map-marker-alt',
            text:'155 Main Street, 17B, Brooklyn, NY'
        },
        {
            icon:'fas fa-phone-alt',
            text:'800-123-4567'
        },
        { 
            icon:'far fa-envelope',
            text:'example@hospitalappointment.com'
        }
    ]
    return (
        <Container className="Contact mt-4">
            <Row id="contact_heading">
                <h3>Get In Touch</h3>
                <p>Any Query Contact Now</p>
            </Row>
            { 
                show ?
                    <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Well Done !</Alert.Heading>
                    <p>Your Information Sussesfuly Stored. Our teame conatact to you two three working days.</p>
                    </Alert>
                    :
                    ''
            }
            <Row className="contact_body mt-2">
                <Col xl={6}>
                    { contact_Details.map(info => (
                        <div key={info.text} className="contact_info_card">
                            <i className={info.icon}></i>
                            <p>{info.text}</p>
                        </div>
                     ))
                    }
                </Col>
                <Col xl={6}>
                    <Form className="account_form_body mt-2">
                        {SIGNUP.map(item =>(
                            <Row key={item.text}>
                                <Col xl={12}>
                                    { 
                                        item.name === 'message' ?
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
                            <Col xl={12} className="account_button text-center mt-2">
                                <Button type="submit" onClick={contact_Info}>Send Message</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact