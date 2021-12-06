import React,{ useState } from 'react'
import { Row, Col } from 'react-bootstrap'

function SearchBar() {
    const [search, setSearch] = useState();
    const inputhandler = (e)=>{
        e.preventDefault();
        setSearch(e.target.value);
    }
    return (
        <Row className="SearchBar mt-2">
            <Col xl={6} className="search">
                <input type="text" value={search} onChange={inputhandler} placeholder="Search Hospital Here..." />
                <i className="fas fa-microphone-slash"></i>
            </Col>
        </Row>
    )
}

export default SearchBar