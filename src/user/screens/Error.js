import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="Error__Page">
            <Container>
                <Row>
                    <Col>
                        <h1>404</h1>
                        <p>Page Is Not Found !</p>
                        <Link to="/"><Button>Go Back To Home Page.</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Error
