import React from 'react'
import { Container, Row, Tabs, Tab } from 'react-bootstrap'
import { Redirect, useParams } from 'react-router'
import { useProfile } from '../../../global/context/Profile.Context'
import AddHospitalDetailes from './AddHospitalDetailes'
import DisplayFacilities from './Display/DisplayFacilitys'
import DisplayServices from './Display/DisplayServices'
import DisplaySpecialities from './Display/DisplaySpeshalities'

function UpdateHospitalDetaile() {
    // =======Get Id Frome URL=========
        const { id } = useParams()
     // ========Cheack User Login Or Not============
     const {profile,isloading} = useProfile()
     if(!profile && isloading){
         return <Redirect to="/registerHospital"/>
     }
    return (
        <Container className="mt-4">
                <Row className="admin_heading">
                    <h3>Add Hospital Detailes !</h3>
                    <p>Please Add Your Hospital Detailes</p>
                </Row>
                <Row>
                    <Tabs defaultActiveKey="basic" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="basic" title="Basic Detaile">
                           <AddHospitalDetailes id={id}/>
                        </Tab>
                        <Tab eventKey="specialitie" title="Add Specialitie">
                            <DisplaySpecialities id={id}/>
                        </Tab>
                        <Tab eventKey="services" title="Add Services">
                            <DisplayServices id={id}/>
                        </Tab>
                        <Tab eventKey="facilities" title="Add Facilitie">
                            <DisplayFacilities id={id}/>
                        </Tab>
                    </Tabs>
                </Row>
        </Container>
    )
}

export default UpdateHospitalDetaile
