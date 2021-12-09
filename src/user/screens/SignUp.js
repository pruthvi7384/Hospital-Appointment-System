import { createUserWithEmailAndPassword } from '@firebase/auth';
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import React, { useState } from 'react'
import { Col, Container, Form, Row, Button, Modal } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { useProfile } from '../../global/context/Profile.Context';
import { auth, db } from '../../global/firebase/firebaseConfig';

function SignUp() {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('')
    const [adminloading, setAdminLoading] = useState(false)
    const [user,setUser] = useState({
        name:'',
        email:'',
        contact:'',
        password:''
    });
    // ========Cheack User Login Or Not============
    const {userProfile,isloading} = useProfile()
    if(userProfile && !isloading){
        return <Redirect to="/"/>
    }
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
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value});
    }
    const signup = async(e)=>{
        e.preventDefault();
        if(!user.email || !user.password || !user.name){
            setError("May Be You Are Not Entered Email Id , Password And Your Name Please Enter Mentioned Filed Properly")
            setShow(true)
        }else{
            try{
                setAdminLoading(true)
                const userRegister = await createUserWithEmailAndPassword(auth,user.email,user.password)
                try {
                     await addDoc(collection(db, "Users"), {
                        ...user,
                        authUid:userRegister.user.uid,
                        join_Date:serverTimestamp(),
                    });
                    setAdminLoading(false)
                    setError("Your Registration Succesfuly")
                    setUser('')
                    setShow(true)
                  } catch (e) {
                    setAdminLoading(false)
                    setError(e.message)
                    setShow(true)
                  }
            }catch(e){
                setAdminLoading(false)
                setError("Your Are Allrady Register Please Try LogIn !.")
                setShow(true)
            }
        }
    }
    return (
        <Container className="mt-4 account_form">
            <Row id="account_heading">
                <h3>Signup Now</h3>
                <p>Register your self</p>
            </Row>
            <Form className="account_form_body mt-2">
                <Modal show={show} onHide={()=>setShow(false)}>
                        <Modal.Header  closeButton>
                            <Modal.Title className="text-bold">Oh Know !</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{error}</Modal.Body>
                </Modal>
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
                        <Button type="submit" onClick={signup}>{adminloading ? 'Loading...' : 'SignUp Now' }</Button>
                        <p>You are Alrady Signup,Please <Link to="/login">Login Here.</Link></p>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default SignUp
