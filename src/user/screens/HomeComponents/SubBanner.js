import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SubBanner() {
    return (
        <Container fluid className="subBanner mt-4 p-5">
            <Row className="Banner">
                <Col>
                    <h2>Every Hospital has moved online, why not you?</h2>
                    <Link to="/"><Button>Hospital Join Here</Button></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default SubBanner
