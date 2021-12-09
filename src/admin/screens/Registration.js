import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { Col, Container, Form, Row, Button, Modal } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { auth, db } from '../../global/firebase/firebaseConfig';
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { useProfile } from '../../global/context/Profile.Context';

function Registration() {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const [adminloading, setAdminLoading] = useState(false)
    const [user,setUser] = useState({
        name:'',
        location:'',
        description:'',
        email_id:'',
        contact_no:'',
        opining:'',
        ending:'',
        password:'',
        image:'',
        staus:'0'
    });
    const SIGNUP = [
        {
            name:'name',
            value:user.name,
            type:'text',
            text:'Enter Your Hospital Name'
        },
        {
            name:'location',
            value:user.location,
            type:'text',
            text:'Enter Your Hospital Address'
        },
        {
            name:'description',
            value:user.description,
            type:'text',
            text:'Enter Your Hospital Description'
        },
        {
            name:'email_id',
            value:user.email_id,
            type:'email',
            text:'Enter Your Email'
        },
        {
            name:'contact_no',
            value:user.contact_no,
            type:'number',
            text:'Enter Your Hospital Contact Number'
        },
        {
            name:'opining',
            value:user.opining,
            type:'time',
            text:'Enter Your Hospital Opping Time'
        },
        {
            name:'ending',
            value:user.ending,
            type:'time',
            text:'Enter Your Hospital Ending Time'
        },
        {
            name:'password',
            value:user.password,
            type:'password',
            text:'Enter Your Password'
        },
        {
            name:'image',
            value:user.image,
            type:'text',
            text:'Enter Your Your Hospital Image URL'
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value});
    }
     // ========Cheack User Login Or Not============
     const {profile,isloading} = useProfile()
     if(profile && !isloading){
         return <Redirect to="/dashboard"/>
     }
    // ==========Register Hospital Functionality================
    const registerHospital = async(e)=>{
        e.preventDefault();
        if(!user.email_id || !user.password || !user.name){
            setError("May Be You Are Not Entered Email Id , Password And Hospital Name Please Enter Mentioned Filed Properly")
            setShow(true)
        }else{
            try{
                setAdminLoading(true)
                const userRegister = await createUserWithEmailAndPassword(auth,user.email_id,user.password)
                console.log(userRegister.user.uid)
                try {
                     await addDoc(collection(db, "Hospital"), {
                        ...user,
                        authUid:userRegister.user.uid,
                        join_Date:serverTimestamp(),
                        fax_no:'',
                        grievances:'',
                        specialities:[],
                        services:[],
                        facilities:[],
                        reviews:[]
                    });
                    setAdminLoading(false)
                    setError("Your Hospital Registration Succesfuly")
                    setUser('')
                    setShow(true)
                  } catch (e) {
                    setAdminLoading(false)
                    setError(e.message)
                    setShow(true)
                  }
            }catch(e){
                setAdminLoading(false)
                setError("Your Hospital Allrady Ragister Please Try To Login Otherwise Contact To Site Admin.")
                setShow(true)
            }
        }
    }
    return (
        <Container className="mt-4 account_form">
            <Row id="account_heading">
                <h3>Register As A Hospital Now</h3>
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
                                required
                                />
                                <label htmlFor="floatingInputCustom">{item.text}</label>
                            </Form.Floating>
                        </Col>
                    </Row>
                    ))
                }
                <Row>
                    <Col xl={6} className="account_button text-center mt-2">
                        <Button type="submit" onClick={registerHospital}>{adminloading ? 'Loading...' : 'Register Now' }</Button>
                        <p>You are Alrady Register,Please <Link to="/loginhospital">Login Here.</Link></p>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Registration
