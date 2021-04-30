import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'


const NavMailTo = ({ mailto, label }) => {
    return (
        <Link to='#'
 SaronoClotho           onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }} className="text-light text-decoration-none">

            <Nav.Link> {label} </Nav.Link>
        </Link>
        
    );
};

export default NavMailTo;
