import React, { useState } from 'react'
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SignUp() {
    const [show, setShow] = useState(false);
    const [user,setUser] = useState({
        name:'',
        email:'',
        contact:'',
        password:'',
        cpassword:''
    });
    const SIGNUP = [
        {
            name:'name',
            value:user.name,
            type:'text',
            text:'Enter Your Full Name'
        },
        {
            name:'email',
            value:user.email,
            type:'email',
            text:'Enter Your Email'
        },
        {
            name:'contact',
            value:user.contact,
            type:'number',
            text:'Enter Your Contact Number'
        },
        {
            name:'password',
            value:user.password,
            type:'password',
            text:'Enter Your Password'
        },
        {
            name:'cpassword',
            value:user.cpassword,
            type:'password',
            text:'Enter Your Password Again'
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
                <h3>Signup Now</h3>
                <p>Register your self</p>
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
                        <Button type="submit" onClick={signup}>SignUp Now</Button>
                        <p>You are Alrady Signup,Please <Link to="/login">Login Here.</Link></p>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default SignUp
