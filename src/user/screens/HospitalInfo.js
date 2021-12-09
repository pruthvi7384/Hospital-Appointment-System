import React,{ useState, useEffect } from 'react'
import { useParams,  } from 'react-router-dom';
import { doc, getDoc } from '@firebase/firestore';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Apporitment from './HospitalComponents/Apporitment';
import Feedback from './HospitalComponents/Feedback';
import SubNavigationBar from './HospitalComponents/SubNavigation';
import { db } from '../../global/firebase/firebaseConfig';
import TimeAgo from 'timeago-react';

function HospitalInfo() {
    // ===========Get Id From URL==========
    const {id} = useParams();
    
    // ===========Set Specific Hospital=========
    const [hospitalloading, sethospitalloading] = useState(true)
    const [specificHospital, setSpecificHospital] = useState()
    
    useEffect(() => {
        const getSpecificHospital = async(e)=>{
            const updateHospital = doc(db, "Hospital", id);
            try{
                    const docSnap = await getDoc(updateHospital);
                    if (docSnap.exists()) {
                        const data = docSnap.data()
                        setSpecificHospital({id:docSnap.id,dataHospital: data})
                        sethospitalloading(false);
                    } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }catch(e){
                console.log(e.message)
            }
        }
        getSpecificHospital()
    }, [id])
    
    if(hospitalloading){
        return(
            <Container style={{height:"100vh"}}className="d-flex justify-content-center align-items-center">
                <Row >
                        <Spinner animation="grow" variant="info" />
                </Row>
            </Container>
        )
    }
    return (
        <>
        <Container>
            <Row className="mt-4">
                <SubNavigationBar id={specificHospital.id} name={specificHospital.dataHospital.name}/>
            </Row>
        </Container>
        <Container className="hospital_page mt-4">
            <Row className="hospital_heading">
                <h3>Hospital <span> {specificHospital.dataHospital.name}</span></h3>
                <p>Hospital <span> {specificHospital.dataHospital.name} </span> Information</p>
            </Row>
            <Row className="hospital_info">
                <Col xl={6}>
                    <img className="hospital_image" src={specificHospital.dataHospital.image !== '' ? `${specificHospital.dataHospital.image}` : `https://intersectiq.com/assets/images/blogs/6/cover.jpg`} alt="" />
                </Col>
                <Col xl={6}>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{specificHospital.dataHospital.description}</p>
                </Col>
            </Row>
            <Row className="hospital_synptoms mt-4">
                <h4><span>{specificHospital.dataHospital.name}</span> Hospital <span> Detailes </span></h4>
                <Col xl={8} className="mt-2">
                    <p><span><i className="fas fa-clock"></i></span> {specificHospital.dataHospital.opining === '' ? '00 : 00 AM' : `${specificHospital.dataHospital.opining} AM` } -  {specificHospital.dataHospital.ending === '' ? '00 : 00 AM' : `${specificHospital.dataHospital.ending} PM ` }</p>
                </Col>
                <Col xl={8} className="mt-2">
                    {
                        specificHospital.dataHospital.location === ''
                        ?
                        <p className="text-danger"><span><i className="fas fa-map-marker-alt"></i></span> Location Detailes Not Mentioned !</p>
                        :
                        <p><span><i className="fas fa-map-marker-alt"></i></span> {specificHospital.dataHospital.location}</p>
                    }
                </Col>
                <Col  xl={8} className="mt-2">
                    {
                        specificHospital.dataHospital.grievances !== ''
                        ?
                        <p><span><i className="fas fa-user-plus"></i></span> {specificHospital.dataHospital.grievances}</p>
                        :
                        <p className="text-danger"><span><i className="fas fa-user-plus"></i></span> Grievances Personal Detailes Not Mentions !</p>
                    }
                </Col>
                <Col  xl={8} className="mt-2">
                    {
                        specificHospital.dataHospital.contact_no !== ''
                        ?
                        <p><span><i className="fas fa-phone-alt"></i></span> {specificHospital.dataHospital.contact_no}</p>
                        :
                        <p className="text-danger"><span><i className="fas fa-phone-alt"></i></span> Contact Number Not Mentions !</p>
                    }
                </Col>
                <Col  xl={8} className="mt-2">
                    {
                        specificHospital.dataHospital.email_id !== ''
                        ?
                        <p><span><i className="far fa-envelope"></i></span> {specificHospital.dataHospital.email_id}</p>
                        :
                        <p className="text-danger"><span><i className="far fa-envelope"></i></span> Email Id Not Mentions !</p>
                    }
                </Col>
                <Col  xl={8} className="mt-2">
                    {
                        specificHospital.dataHospital.fax_no !== ''
                        ?
                        <p><span><i className="fas fa-fax"></i></span> {specificHospital.dataHospital.fax_no}</p>
                        :
                        <p className="text-danger"><span><i className="fas fa-fax"></i></span> Fax Number Not Mentions !</p>
                    }
                </Col>
                <Col  xl={8} className="mt-2">
                    {
                        specificHospital.dataHospital.reviews
                        ?
                        <p><span><i className="fas fa-comments"></i></span> {specificHospital.dataHospital.reviews.length}</p>
                        :
                        <p className="text-danger"><span><i className="fas fa-comments"></i></span> 00 !</p>
                    }
                </Col>
                <Col  xl={8} className="mt-2">
                    <p><span><i className="fas fa-calendar-check"></i></span> <TimeAgo
                        datetime={specificHospital.dataHospital.join_Date? new Date(specificHospital.dataHospital.join_Date) : new Date()}
                    /></p>
                </Col>
            </Row>
            <Row className="hospital_synptoms mt-2">
                <h4><span>{specificHospital.dataHospital.name}</span> Hospital <span> Specialities </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        specificHospital.dataHospital.specialities === [0] ?
                        
                        specificHospital.dataHospital.specialities.map((specialitie,index) => (
                            <p key={index}><span><i className="fas fa-hand-point-right"></i></span> {specialitie}</p>
                        ))
                        :
                        <p className="text-danger text-center" style={{fontWeight:'600'}}>Specialities Detailes Not Mentions !</p>
                    }
                </Col>
            </Row>
            <Row className="hospital_synptoms mt-2">
                <h4><span>{specificHospital.dataHospital.name}</span> Hospital <span> Facilities </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        specificHospital.dataHospital.facilities === [0] ?
                        specificHospital.dataHospital.facilities.map((facility,index)=> (
                            <p key={index}><span><i className="fas fa-hand-point-right"></i></span> {facility}</p>
                        ))
                        :
                        <p className="text-danger text-center" style={{fontWeight:'600'}}>Facilities Detailes Not Mentions !</p>
                    }
                </Col>
            </Row>
            <Row className="hospital_synptoms mt-2">
                <h4><span>{specificHospital.dataHospital.name}</span> Hospital <span> Services </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        specificHospital.dataHospital.srvices === [0] ?
                        specificHospital.dataHospital.services.map((service,index)=> (
                            <p key={index}><span><i className="fas fa-hand-point-right"></i></span> {service}</p>
                        ))
                        :
                        <p className="text-danger text-center" style={{fontWeight:'600'}}>Services Detailes Not Mentions !</p>
                    }
                </Col>
            </Row>
        </Container>
        <Container className="hospital_btns mt-3">
            <Row className="justify-content-center align-items-center">
                <Col xl={4} className="text-center mt-2" >
                   <Apporitment id={specificHospital.id} title="Book Appointment" subTitle="Book Appointment"/>
                </Col>
                <Col xl={4} className="text-center mt-2">
                    <Feedback id={specificHospital.id}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default HospitalInfo