import React from 'react'
import { Carousel, Container, Row } from 'react-bootstrap'

function Feedback() {
    const Feedback = [
        { 
            _id:"123",
            name:"Pruthviraj Rajput",
            feedback: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct."
        },
        { 
            _id:"1234",
            name:"Kirti Patil",
            feedback: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct."
        },
        { 
            name:"Harshada Chaudhari",
            feedback: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct."
        },
        { 
            _id:"1235",
            name:"Sumit Patil",
            feedback: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct."
        }
    ]
    return (
        <Container fluid className="feedback_section mt-4">
            <Row id="feedback_section_heading">
                <h3>People’s Feedback</h3>
                <p>Enjoy People’s Feedback</p>
            </Row>
            <Row >
                <Carousel>
                    {
                        Feedback.map(feedback => (
                            <Carousel.Item key={`${feedback._id}`}>
                                <div className="feedback_card">
                                    <div>
                                        <h4>{feedback.name}</h4>
                                        <p><span><i className="fas fa-quote-left"></i></span>  {feedback.feedback}  <span><i className="fas fa-quote-right"></i></span></p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </Row>
        </Container>
    )
}

export default Feedback