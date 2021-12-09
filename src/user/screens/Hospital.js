import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import React,{ useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { db } from '../../global/firebase/firebaseConfig';
import SearchBar from './HospitalComponents/SearchBar';

function Hospital() {
    const [Info, setInfo] = useState([])
    const [hospitalloading, sethospitalloading] = useState(true)
    useEffect(() => {
        // featch Data From Firebase Cloude Database
        //  write query for todo list display timestamp help
        const q = query(collection(db,'Hospital'), orderBy('join_Date','desc'));
        // Get Cloud Data Here...
        const getData = async() => {
            try{
              const snapshot = await getDocs(q)
              setInfo(snapshot.docs.map((doc)=>({id:doc.id,data: doc.data()})));
              sethospitalloading(false);

            }catch(e){
                console.log(e.message)
                sethospitalloading(false);
            }
        }
      getData()
    },[]);
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
        <Container className="All_Hospital mt-4">
            <Row id="Hospital_heading">
                <h3>All Hospitals</h3>
                <p>All Hospitals Display Here.</p>
            </Row>
            <SearchBar/>
            <Row className="mt-4">
                {
                    Info.map(item => (
                        <Col xl={4} key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.data.image ? item.data.image : 'https://intersectiq.com/assets/images/blogs/6/cover.jpg'} />
                                <Card.Body>
                                    <Card.Title>{item.data.name}</Card.Title>
                                    <Card.Text>
                                        {item.data.description  ? `${item.data.description.split(' ').slice(0, 25).join(' ').replace(/<.+?>/g, "")}...`
                                        : 'No description' }
                                    </Card.Text>
                                </Card.Body>
                                <div className="Footer__Card">
                                    <ul>
                                        <li><Link to="/allhospital"><i className="fas fa-map-marker-alt"></i> <span>{item.data.location}</span></Link></li>
                                        <li><Link to="/allhospital"><i className="far fa-clock"></i>  <span>21 Junuary 2021</span></Link></li>
                                        <li ><Link to={`/allhospital/${item.id}`}><Button >Book Appointment</Button></Link></li>
                                    </ul>
                                </div>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Hospital