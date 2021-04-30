import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Logo'
import "./NavbarCustom.css"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavMailto from "./NavMailto"



function NavbarCustom() {
    return (
        <div className="row-fluid">
            <Navbar className="custom-nav" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/"> 
                    <Logo/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/"> Home </Nav.Link>
                        <Nav.Link as={Link} to="/product"> Product </Nav.Link>
                        <Nav.Link as={Link} to="/team"> Team </Nav.Link>
                        <NavMailto mailto={"mailto:saronoclotho@gmail.com"} label={"Contact Us"} />
                    </Nav>
                </Navbar.Collapse> 
            </Navbar>
        </div>
    )
}

export default NavbarCustom;

    // <div>
    //     <Navbar className="custom-nav" variant="dark" expand="lg">
    //         <Navbar.Brand as={Link} to="/"> 
    //             <Logo/>
    //         </Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //             <Nav className="ml-auto">
    //                 <Nav.Link as={Link} to="/"> Home </Nav.Link>
    //                 <Nav.Link as={Link} to="/product"> Product </Nav.Link>
    //                 <Nav.Link as={Link} to="/team"> Team </Nav.Link>
    //                 <NavMailto mailto={"mailto:"} label={"Contact Us"} />
    //             </Nav>
    //         </Navbar.Collapse> 
    //     </Navbar>
    // </div>