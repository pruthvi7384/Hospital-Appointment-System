import React, { useState, useEffect } from 'react'
import { doc, getDoc, updateDoc } from '@firebase/firestore';
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { Redirect } from 'react-router';
import { useProfile } from '../../../global/context/Profile.Context';
import { db } from '../../../global/firebase/firebaseConfig';

function AddHospitalDetailes({id}) {
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
        image:'',
    });
    
   
    useEffect(() => {
        const getExistingData = async()=>{
            const docRef = doc(db, "Hospital", id);
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
                const data=docSnap.data()
                setUser(
                    {
                        name: data.name ? data.name : '',
                        location: data.location ? data.location : '',
                        description: data.description ? data.description : '',
                        grievances: data.grievances ? data.grievances : '' ,
                        email_id: data.email_id ? data.email_id : '',
                        contact_no: data.contact_no ? data.contact_no : '',
                        fax_no: data.fax_no ?  data.fax_no : '',
                        opining: data.opining ? data.opining : '',
                        ending: data.ending ? data.ending : '',
                        image: data.image ? data.image : '',
                    }
                )
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            setUser({
                name:'',
                location:'',
                description:'',
                grievances:'',
                email_id:'',
                contact_no:'',
                fax_no:'',
                opining:'',
                ending:'',
                image:'',
            })
            }
        }
        getExistingData()
        return () => {
            getExistingData()
        }
    }, [id])
   
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
            name:'description',
            value:user.description,
            type:'text',
            text:'Enter Your Hospital Description'
        },
        {
            name:'email_id',
            value:user.email_id,
            type:'email',
            text:'Enter Your Email id'
        },
        {
            name:'contact_no',
            value:user.contact_no,
            type:'number',
            text:'Enter Your Hospital Contact Number'
        },
        {
            name:'fax_no',
            value:user.fax_no,
            type:'number',
            text:'Enter Your Hospital Fax Number'
        },
        {
            name:'grievances',
            value:user.grievances,
            type:'text',
            text:'Enter Your Hospital Grievances Name'
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
            name:'image',
            value:user.image,
            type:'text',
            text:'Enter Your Hospital Image URL'
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
        const updateHospital = doc(db, "Hospital", id);
        try{
            await updateDoc(updateHospital, {
                ...user
              });
              alert('Your Hospital Basic Detailes Updated Successfuly')      
        }catch(e){
            console.log(e)
        }
       
    }
     // ========Cheack User Login Or Not============
     const {profile,isloading} = useProfile()
     if(!profile && isloading){
         return <Redirect to="/registerHospital"/>
     }
    return (
        <Container className="mt-4 account_form">
            <Row id="account_heading">
                <h3>Update Basic Hospital Detailes</h3>
                <p>Please Update Basic Hospital Detailes</p>
            </Row>
            <Form className="account_form_body mt-2">
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
                        <Button type="submit" onClick={signup}>Update Basic Detalies</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default AddHospitalDetailes
