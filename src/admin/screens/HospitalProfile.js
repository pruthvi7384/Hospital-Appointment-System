import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';
import AllHospital from '../../global/API/AllHospital';

function HospitalProfile() {
    // ===========Get Id From URL==========
    const {id} = useParams();
    // ==========Set All Hospitals Fron Database=======
    const Info = AllHospital();
    // ================Find Hospital Inforamation using id===============
    const hospital_info= Info.find(dise => {
        return  dise.id = id;
    }); 
    return (
        <>
        <Container className="hospital_page mt-4">
            <Row className="hospital_heading">
                <h3>Hospital <span> {hospital_info.name}</span></h3>
                <p>Hospital <span> {hospital_info.name} </span> Information</p>
            </Row>
            <Row>
                <Col xl={3}>
                    <Link to="/updatehospitaldetailes"><Button className="text-light" variant="info"><i className='fas fa-pen'></i></Button></Link>
                </Col>
            </Row>
            <Row className="hospital_info">
                <Col xl={6}>
                    <img className="hospital_image" src={hospital_info.image ? `${hospital_info.image}` : `https://intersectiq.com/assets/images/blogs/6/cover.jpg`} alt="" />
                </Col>
                <Col xl={6}>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{hospital_info.description}</p>
                </Col>
            </Row>
            <Row className="hospital_synptoms mt-4">
                <h4><span>{hospital_info.name}</span> Hospital <span> Detailes </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        !hospital_info.opning ?
                        '00' :
                        <p><span><i className="fas fa-clock"></i></span> {hospital_info.opning} - {hospital_info.ending}</p>
                    }
                    {
                        !hospital_info.location ?
                        'Location Detailes Not Mentions !' :
                        <p><span><i className="fas fa-map-marker-alt"></i></span> {hospital_info.location}</p>
                    }
                    {
                        !hospital_info.grievances ?
                        'Grievances Detailes Not Mentions !' :
                        <p><span><i className="fas fa-user-plus"></i></span> {hospital_info.grievances}</p>
                    }
                    {
                        !hospital_info.contact_no?
                        'Contact Number Not Mentions !' :
                        <p><span><i className="fas fa-phone-alt"></i></span> {hospital_info.contact_no}</p>
                    }
                    {
                        !hospital_info.email_id?
                        'Email Id Not Mentions !' :
                        <p><span><i className="far fa-envelope"></i></span> {hospital_info.email_id}</p>
                    }
                    {
                        !hospital_info.fax_no?
                        'Fax Number Not Mentions !' :
                        <p><span><i className="fas fa-fax"></i></span> {hospital_info.fax_no}</p>
                    }
                    {
                        !hospital_info.reviews ?
                        '00' :
                        <p><span><i className="fas fa-comments"></i></span> {hospital_info.reviews.length}</p>
                    }
                    {
                        !hospital_info.join_Date ?
                        '00' :
                        <p><span><i className="fas fa-calendar-check"></i></span> {hospital_info.join_Date}</p>
                    }
                </Col>
            
            </Row>
            <Row className="hospital_synptoms mt-2">
                <h4><span>{hospital_info.name}</span> Hospital <span> Specialities </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        hospital_info.specialities.map(specialitie => (
                            !specialitie ?
                            'Specialities Detailes Not Mentions !' :
                            <p key={specialitie}><span><i className="fas fa-hand-point-right"></i></span> {specialitie}</p>
                        ))
                    
                    }
                </Col>
            </Row>
            <Row className="hospital_synptoms mt-2">
                <h4><span>{hospital_info.name}</span> Hospital <span> Facilities </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        hospital_info.facilities.map( facilitie => (
                            !facilitie ?
                            'Facilities Detailes Not Mentions !' :
                            <p key={facilitie}><span><i className="fas fa-hand-point-right"></i></span> {facilitie}</p>
                        ))
                    
                    }
                </Col>
            </Row>
            <Row className="hospital_synptoms mt-2">
                <h4><span>{hospital_info.name}</span> Hospital <span> Services </span></h4>
                <Col xl={8} className="mt-2">
                    {
                        hospital_info.services.map(service => (
                            !service ?
                            'Services Detailes Not Mentions !' :
                            <p key={service}><span><i className="fas fa-hand-point-right"></i></span> {service}</p>
                        ))
                    
                    }
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default HospitalProfile