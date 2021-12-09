import React  from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import { useProfile } from '../../global/context/Profile.Context';


function HospitalProfile() {
    // =======Check User Login Or Not===========
     const {profile} = useProfile()
     if(!profile){
         return <Redirect to="/registerHospital"/>
     }

    return (
        <>
            <Container className="hospital_page mt-4">
                <Row className="hospital_heading">
                    <h3>Hospital <span> {profile.hospital.name}</span></h3>
                    <p>Hospital <span> {profile.hospital.name} </span> Information</p>
                </Row>
                <Row>
                    <Col xl={3}>
                        <Link to={`/updatehospitaldetailes/${profile.id}`}><Button className="text-light" variant="info"><i className='fas fa-pen'></i></Button></Link>
                    </Col>
                </Row>
                <Row className="hospital_info">
                    <Col xl={6}>
                        <img className="hospital_image" src={profile.hospital.image !== '' ? `${profile.hospital.image}` : `https://intersectiq.com/assets/images/blogs/6/cover.jpg`} alt="" />
                    </Col>
                    <Col xl={6}>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{profile.hospital.description}</p>
                    </Col>
                </Row>
                <Row className="hospital_synptoms mt-4">
                    <h4><span>{profile.hospital.name}</span> Hospital <span> Detailes </span></h4>
                    <Col xl={8} className="mt-2">
                        <p><span><i className="fas fa-clock"></i></span> {profile.hospital.opining === '' ? '00 : 00 AM' : `${profile.hospital.opining} AM` } -  {profile.hospital.ending === '' ? '00 : 00 AM' : `${profile.hospital.ending} PM ` }</p>
                    </Col>
                    <Col xl={8} className="mt-2">
                        {
                            profile.hospital.location === ''
                            ?
                            <p className="text-danger"><span><i className="fas fa-map-marker-alt"></i></span> Location Detailes Not Mentioned !</p>
                            :
                            <p><span><i className="fas fa-map-marker-alt"></i></span> {profile.hospital.location}</p>
                        }
                    </Col>
                    <Col  xl={8} className="mt-2">
                        {
                            profile.hospital.grievances !== ''
                            ?
                            <p><span><i className="fas fa-user-plus"></i></span> {profile.hospital.grievances}</p>
                            :
                            <p className="text-danger"><span><i className="fas fa-user-plus"></i></span> Grievances Personal Detailes Not Mentions !</p>
                        }
                    </Col>
                    <Col  xl={8} className="mt-2">
                        {
                            profile.hospital.contact_no !== ''
                            ?
                            <p><span><i className="fas fa-phone-alt"></i></span> {profile.hospital.contact_no}</p>
                            :
                            <p className="text-danger"><span><i className="fas fa-phone-alt"></i></span> Contact Number Not Mentions !</p>
                        }
                    </Col>
                    <Col  xl={8} className="mt-2">
                        {
                            profile.hospital.email_id !== ''
                            ?
                            <p><span><i className="far fa-envelope"></i></span> {profile.hospital.email_id}</p>
                            :
                            <p className="text-danger"><span><i className="far fa-envelope"></i></span> Email Id Not Mentions !</p>
                        }
                    </Col>
                    <Col  xl={8} className="mt-2">
                        {
                            profile.hospital.fax_no !== ''
                            ?
                            <p><span><i className="fas fa-fax"></i></span> {profile.hospital.fax_no}</p>
                            :
                            <p className="text-danger"><span><i className="fas fa-fax"></i></span> Fax Number Not Mentions !</p>
                        }
                    </Col>
                    <Col  xl={8} className="mt-2">
                        {
                            profile.hospital.reviews
                            ?
                            <p><span><i className="fas fa-comments"></i></span> {profile.hospital.reviews.length}</p>
                            :
                            <p className="text-danger"><span><i className="fas fa-comments"></i></span> 00 !</p>
                        }
                    </Col>
                    <Col  xl={8} className="mt-2">
                        <p><span><i className="fas fa-calendar-check"></i></span> <TimeAgo
                            datetime={profile.hospital.join_Date? new Date(profile.hospital.join_Date) : new Date()}
                        /></p>
                    </Col>
                </Row>
                <Row className="hospital_synptoms mt-2">
                    <h4><span>{profile.hospital.name}</span> Hospital <span> Specialities </span></h4>
                    <Col xl={8} className="mt-2">
                        {
                            profile.hospital.specialities === [0] ?
                            profile.hospital.specialities.map((specialitie,index) => (
                                <p key={index}><span><i className="fas fa-hand-point-right"></i></span> {specialitie}</p>
                            ))
                            :
                            <p className="text-danger text-center" style={{fontWeight:'600'}}>Specialities Detailes Not Mentions !</p>
                        }
                    </Col>
                </Row>
                <Row className="hospital_synptoms mt-2">
                    <h4><span>{profile.hospital.name}</span> Hospital <span> Facilities </span></h4>
                    <Col xl={8} className="mt-2">
                        {
                            profile.hospital.facilities === [0] ?
                            profile.hospital.facilities.map((facility,index)=> (
                                <p key={index}><span><i className="fas fa-hand-point-right"></i></span> {facility}</p>
                            ))
                            :
                            <p className="text-danger text-center" style={{fontWeight:'600'}}>Facilities Detailes Not Mentions !</p>
                        }
                    </Col>
                </Row>
                <Row className="hospital_synptoms mt-2">
                    <h4><span>{profile.hospital.name}</span> Hospital <span> Services </span></h4>
                    <Col xl={8} className="mt-2">
                        {
                            profile.hospital.srvices === [0] ?
                            profile.hospital.services.map((service,index)=> (
                                <p key={index}><span><i className="fas fa-hand-point-right"></i></span> {service}</p>
                            ))
                            :
                            <p className="text-danger text-center" style={{fontWeight:'600'}}>Services Detailes Not Mentions !</p>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HospitalProfile