import React, { useState } from 'react'
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap'

function AddHospitalDetailes() {
    const [show, setShow] = useState(false);
    const [user,setUser] = useState({
        name:'',
        location:'',
        description:'',
        grievances:'',
        email_id:'',
        contact_no:'',
        fax_no:'',
        opining:'',
        ending:'',
    });
    const SIGNUP = [
        {
            name:'name',
            value:user.name,
            type:'text',
            text:'Enter Your Full Name'
        },
        {
            name:'location',
            value:user.location,
            type:'text',
            text:'Enter Your Hospital Address'
        },
        {
            name:'email',
            value:user.email_id,
            type:'email',
            text:'Enter Your Email'
        },
        {
            name:'contact',
            value:user.contact_no,
            type:'number',
            text:'Enter Your Hospital Contact Number'
        },
        {
            name:'opining',
            value:user.opining,
            type:'date',
            text:'Enter Your Hospital Opping Time'
        },
        {
            name:'ending',
            value:user.ending,
            type:'time',
            text:'Enter Your Hospital Ending Time'
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value});
    }
    const signup = (e)=>{
        e.preventDefault();
    }
    return (
        <Container className="mt-4 account_form">
            <Row id="account_heading">
                <h3>Add Basic Hospital Detailes</h3>
                <p>Please Basic Hospital Detailes</p>
            </Row>
            <Form className="account_form_body mt-2">
                { 
                show ?
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Oh Know !</Alert.Heading>
                    <p>Your Entered Email Id Is Alrady Exist Please, Try To Enter Different Email Id.</p>
                    </Alert>
                    :
                    ''
                }
                {SIGNUP.map(item =>(
                    <Row key={item.text}>
                        <Col xl={6}>
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
                        </Col>
                    </Row>
                    ))
                }
                <Row>
                    <Col xl={6} className="account_button text-center mt-2">
                        <Button type="submit" onClick={signup}>Add Basic Detalies</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default AddHospitalDetailes
