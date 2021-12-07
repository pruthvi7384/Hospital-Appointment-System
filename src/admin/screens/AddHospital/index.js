import React from 'react'
import { Container, Row, Tabs, Tab } from 'react-bootstrap'
import AddHospitalDetailes from './AddHospitalDetailes'
import DisplayFacilities from './Display/DisplayFacilitys'
import DisplayServices from './Display/DisplayServices'
import DisplaySpecialities from './Display/DisplaySpeshalities'

function UpdateHospitalDetaile() {
    return (
        <Container className="mt-4">
                <Row className="admin_heading">
                    <h3>Add Hospital Detailes !</h3>
                    <p>Please Add Your Hospital Detailes</p>
                </Row>
                <Row>
                    <Tabs defaultActiveKey="basic" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="basic" title="Basic Detaile">
                           <AddHospitalDetailes/>
                        </Tab>
                        <Tab eventKey="specialitie" title="Add Specialitie">
                            <DisplaySpecialities/>
                        </Tab>
                        <Tab eventKey="services" title="Add Services">
                            <DisplayServices/>
                        </Tab>
                        <Tab eventKey="facilities" title="Add Facilitie">
                            <DisplayFacilities/>
                        </Tab>
                    </Tabs>
                </Row>
        </Container>
    )
}

export default UpdateHospitalDetaile
