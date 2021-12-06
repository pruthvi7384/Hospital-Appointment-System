import React from 'react'
import { Link } from 'react-router-dom'

function SubNavigationBar({id,name}) {
    return (
        <ul className="hospital_sub_nav">
            <li><Link to="/allhospital">Hospitals</Link></li>
            <li><Link to={`/allhospital/${id}`}>/</Link></li>
            <li><Link to={`/allhospital/${id}`}>Hospital</Link></li>
            <li><Link to={`/allhospital/${id}`}>/</Link></li>
            <li><Link className="active" to={`/allhospital/${id}`}>{name}</Link></li>
        </ul>
    )
}

export default SubNavigationBar