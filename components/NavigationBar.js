import React from "react";
import { Nav } from "react-bootstrap";
import { Route, Link} from "react-router-dom"; 
import { About } from "./About";
import byrne from '../img/brandon_byrne.jpg'
import Container from "react-bootstrap/esm/Container";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SiGithub } from 'react-icons/si'; 
import { SiLinkedin } from 'react-icons/si'; 
import { SiTwitter } from 'react-icons/si'; 
import { SiGmail } from 'react-icons/si'; 

export const NavigationBar = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img 
                    src={byrne} 
                    width="75" 
                    height="75" 
                    borderRadius="400"
                    className="d-inline-block align-top"
                    alt="Brandon Byrne"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navigation-bar" />
                <Navbar.Collapse id="navigation-bar">
                    <Nav className="me-auto">
                    <a href="https://github.com/donbyrne97"><SiGithub /></a>
                        &nbsp;&nbsp;
                        <a href="https://linkedin.com/in/brandonebyrne"><SiLinkedin /></a>
                        &nbsp;&nbsp;
                        <a href="mailto:bebyrne97@gmail.com"><SiGmail /></a>
                        <Nav.Link as={Link} to="/"></Nav.Link>
                        <Nav.Link as={Link} to="/About">About Me</Nav.Link>
                        <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}