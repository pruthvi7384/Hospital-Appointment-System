import React from 'react'
import { Container, Row, Tabs, Tab } from 'react-bootstrap'
import AddFasilites from './AddFacilities'
import AddHospitalDetailes from './AddHospitalDetailes'
import AddServices from './AddServices'
import AddSpecialities from './AddSpecialities'

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
                            <AddSpecialities/>
                        </Tab>
                        <Tab eventKey="services" title="Add Services">
                            <AddServices/>
                        </Tab>
                        <Tab eventKey="facilities" title="Add Facilitie">
                            <AddFasilites/>
                        </Tab>
                    </Tabs>
                </Row>
        </Container>
    )
}

export default UpdateHospitalDetaile
